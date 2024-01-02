const  {User}  = require('../models/userSchema');

const createUser = async (req,res) => {
    try {
        if(await User.find({'name': 'void'})){
            const newUser = await User.create({name:'void'});
            console.log(newUser.name)

        }
        res.send("User Created as : "+ "void")
    } catch (error) {
        console.log(error)
    }
}

const fetchUser = () => {
    
}

module.exports = {
    createUser,
    fetchUser
}

