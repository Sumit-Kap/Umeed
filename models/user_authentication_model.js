'use strict';

const Helpers = require('../helpers');
const OtpHelper = Helpers.UserAuthOtpHelper;
const Schema = require('../schemas');
const UserOtpSchema = Schema.UserOtpSchema;

let UserAuthenticationModels = {
    generateOtpAndSave:function(){
        let generateOtp = OtpHelper.generateOtpHelper();
    }
}

module.exports = UserAuthenticationModels;