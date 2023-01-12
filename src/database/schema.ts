import mongoose from 'mongoose';

const _userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: [true, 'First name is required']
    },
    last_name: {
        type: String,
        required: [true, 'Last name is required']
      },
    emailid: {
        type: String,
        required: [true, 'Email is required']
      },
});

module.exports = mongoose.model("userdetails", _userSchema);