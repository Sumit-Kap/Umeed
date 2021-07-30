const { designationEnum } = require("../constants/mentor_constants");
const mongoose = require("../db");

const Schema = mongoose.Schema;

const MentorSchema = new Schema({
  resume_url: {
    type: String,
    required: true,
  },
  name: { type: String, required: true },
  email_id: { type: String, required: true },
  reason_to_be_mentor: { type: String, required: true },
  location: { type: String, required: true },
  designation: { type: String, enum: Object.values(designationEnum) },
  company_name: { type: String, required: true },
  candidate_bio: { type: String, required: true },
  is_approved: { type: Boolean, required: true },
});

var Mentor = mongoose.model("Mentor", MentorSchema);

module.exports = Mentor;
