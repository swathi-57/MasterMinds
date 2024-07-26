const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  name:{ type: String, required: true},
  email: { type: String, required: true},
  phn: { type: String, required: true },
  msg: { type: String, required: true }
});
module.exports = mongoose.model('contactus', UserSchema);
