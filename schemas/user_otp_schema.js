const mongoose = require('../db');

const Schema = mongoose.Schema;

var UserOtpSchema = new Schema({
    mobile_number: {type: String,required:true},
    otp: {type:String,required:true}
},{timestamps:true});

UserOtpSchema.index({mobile_number:1,created_at:-1});

var User = mongoose.model("UserOtp",UserOtpSchema);



module.exports = User;