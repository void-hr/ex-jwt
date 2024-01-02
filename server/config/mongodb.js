const mongoose = require("mongoose");
const db = mongoose.connect(
    process.env.MONGODB_URI, 
).then(() => { console.log("moza hi moza") },
err => { console.log("toxic db")})

module.exports = db; 