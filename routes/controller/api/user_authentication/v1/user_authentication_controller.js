'use strict';

const Models = require('../../../../../models');
const UserAuthenticationModels = require('../../../../../models/user_authentication_model');
const UserAuthenticationModel = Models.UserAuthenticationModels

let UserAuthenticationController = {
    getOtp:function(req,res,next){
        let phn_number = req.body.phn_number;
        UserAuthenticationModels.generateOtpAndSave(phn_number,(err,response)=>{
        if(err || !res){
            res.send({"error": "Oops unable to send otp"});
        }
        res.send({"otp":response});
        next();
        })
    }
}

module.exports = UserAuthenticationController;