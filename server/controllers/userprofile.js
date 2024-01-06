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
        console.log(res)
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
        if(existingUser?.password === pass){
            res.status(200).json({"message" : "login successfully"})
        }else{
            res.status(401).send({"error":"wrong credentials"})
        }
    } catch (error) {
        console.log("this error is arising because :"+error)
    }

}


module.exports = {
    createUser,
    fetchUser,
    userLogin
}

