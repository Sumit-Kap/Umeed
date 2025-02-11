"use strict";

const Helpers = require("../helpers");
const OtpHelper = Helpers.UserAuthOtpHelper;
const Schema = require("../schemas");
const UserOtpSchema = Schema.User;
const Config = require("../config/app_config");
// const appConfig = Config.appConfig;
const nodeMailer = require("nodemailer");

let UserAuthenticationModels = {
  generateOtpAndSave: function (phn_number, cb) {
    let generateOtp = OtpHelper.generateOtpHelper();
    let user = new UserOtpSchema({
      mobile_number: phn_number,
      otp: generateOtp,
    });
    user.save((err, response) => {
      if (err) {
        console.log("error in saving in mongo", err);
        return cb(err, null);
      }
      var transporter = nodeMailer.createTransport({
        service: "gmail",
        auth: {
          user: "pickyourmentor52@gmail.com",
          pass: "Angur!123",
        },
      });
      var mailOptions = {
        from: "pickyourmentor52@gmail.com",
        to: "smtkpr88@gmail.com",
        subject: "Sending Email using Node.js",
        text: "That was easy!",
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });
      return cb(null, generateOtp);
    });
    // const accountSid = Config.twilio_account_sid;
    // const authToken = Config.twilio_auth_token;
    // const client = require('twilio')(accountSid, authToken);

    // client.messages
    //     .create({
    //     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
    //     from: '+917983344157',
    //     to: phn_number
    // })
    // .then(message => console.log(message.sid)).catch((err) => console.log(err));
    return generateOtp;
  },
  validateOtp: function (userOtp, ph_number, cb) {
    let user = new UserOtpSchema();
    UserOtpSchema.findOne(
      { otp: userOtp, mobile_number: ph_number },
      (err, response) => {
        if (err || !response) {
          console.log(
            "unable to find any otp associated with the number",
            ph_number,
            err,
            response
          );
          cb(err, false);
        }
        cb(null, true);
      }
    );
  },
};

module.exports = UserAuthenticationModels;
