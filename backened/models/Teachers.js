const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  name:{ type: String, required: true},
  proff: { type: String, required: true },
  subject: { type: String, required: true},
  videos: { type: String, required: true}
  
});
module.exports = mongoose.model('teachers', UserSchema);
