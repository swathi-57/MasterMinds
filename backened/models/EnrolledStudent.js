const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    name: {type: String, required: true},
    subject:{type: String, required: true}
});
module.exports = mongoose.model('enrolledstudents', UserSchema);