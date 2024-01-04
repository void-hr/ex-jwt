const  {User}  = require('../models/userSchema');

const createUser = async (req,res) => {
    const { name, username, email, password } = req.body.signUp;
    try {
        const existingUser = await User.find({'email': email, 'username' : username});
        if(existingUser.length > 0){
            res.send("Email or Username Already Present Sir")
        }else{
            const newUser = await User.create({name, username, email, password});
            console.log(newUser)
            res.send("User Is Created")
        }
    } catch (error) {
        res.send("user already present")
        console.log(error)
    }
}

const fetchUser = async (req,res) => {
    try {
        const allUsers = await User.find({});
        res.json(allUsers) 
    } catch (error) {
        console.log("first")
    }
}

const userLogin = async (req,res) => {
    const { email, password: pass } = req.body.logIn;

    try {
        const existingUser = await User.findOne({'email': email});
        console.log(existingUser)
        if(existingUser.password === pass){
            res.json({"message" : "login successfully"})
        }else{
            res.send("wrong credentials")
        }
    } catch (error) {
        console.log(error)
    }

}


module.exports = {
    createUser,
    fetchUser,
    userLogin
}

