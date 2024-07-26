const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  name:{ type: String, required: true},
  img: { type: String, required: true},
  date: { type: String, required: true },
  msg: { type: String, required: true }
});
module.exports = mongoose.model('comments', UserSchema);