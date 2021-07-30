"use strict";

const Models = require("../../../../../models");

let MentorRegisterController = {
  registerMentor: (req, res, next) => {
    const {
      first_name,
      last_name,
      bio,
      designation,
      location,
      resume_file,
      reason_to_be_mentor,
    } = req.body;
    console.log("print user's request", req.body);
    if (!first_name) {
      res
        .status(400)
        .json({ status: 400, message: "first name is not defined" });
      // next(err);
    } else if (!bio) {
      res.status(400).json({ status: 400, message: "bio is not defined" });
      // next(err);
    } else if (!resume_file) {
      res.status(400).json({
        status: 400,
        message: "resume file is not uploaded by the user",
      });
    }
  },
};

module.exports = MentorRegisterController;
