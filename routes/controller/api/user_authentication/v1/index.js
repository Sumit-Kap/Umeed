const User = require('../../../../../schemas/user_otp_schema');
const UserAuthenticationController = require('./user_authentication_controller');

module.exports = function(app){
    app.get('/api/umeed/v1/user_authentication/generate_otp',UserAuthenticationController.getOtp);
}