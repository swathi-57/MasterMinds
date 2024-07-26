const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  name:{ type: String, required: true},
  videos: { type: String, required: true},
  path: { type: String, required: true },
  subject: { type: String, required: true },
  img: { type: String, required: true },
  image: { type: String, required: true }
});
module.exports = mongoose.model('courses', UserSchema);
