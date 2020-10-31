const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var UserOtpSchema = new Schema({
    mobile_number: {type: Number,required:true},
    otp: {type:Number,required:true}
},{timestamps:true});

UserOtpSchema.index({mobile_number:1,created_at:-1});

var User = mongoose.model("UserOtp",UserOtpSchema);



module.exports = User;