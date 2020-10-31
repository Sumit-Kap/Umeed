'use strict';

let UserOtpHelper = {
    generateOtpHelper:function(){
        let getOtp = new Date().getTime().toString();
        let otpString = getOtp.substring(getOtp.length-6,getOtp.length);
        return otpString;
    }
};

module.exports = UserOtpHelper;

