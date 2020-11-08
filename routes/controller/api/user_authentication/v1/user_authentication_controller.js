'use strict';

const Models = require('../../../../../models');
const UserAuthenticationModels = require('../../../../../models/user_authentication_model');
const UserAuthenticationModel = Models.UserAuthenticationModels

let UserAuthenticationController = {
    getOtp:function(req,res,next){
        let phn_number = req.body.phn_number;
        UserAuthenticationModels.generateOtpAndSave(phn_number,(err,response)=>{
        if(err || !response){
            res.send({"error": "Oops unable to send otp"});
            next();
        }
        res.send({"otp":response});
        next();
        })
    },
    authenticateOtp: function(req,res,next) {
        let getUserOtp = req.body.otp || req.query.otp;
        let mobileNumber = req.body.ph_number || req.query.ph_number;
        UserAuthenticationModels.validateOtp(getUserOtp,mobileNumber,(err,response)=>{
            if(err || !response){
                res.send({"response":false});
                next();
            }
            res.send({"response":true});
            next();
        })
    }
}

module.exports = UserAuthenticationController;