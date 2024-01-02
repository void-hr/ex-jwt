const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
    
      isGoodBoy: {
        type: Boolean,
        required: false,
        default: true,
      },
})

const User  = mongoose.model("User", userSchema);

module.exports = { User };