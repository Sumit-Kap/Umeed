const MentorRegisterController = require("./mentor_register_controller");

module.exports = function (app) {
  app.post(
    "/api/umeed/v1/mentor_info",
    MentorRegisterController.registerMentor
  );
};
