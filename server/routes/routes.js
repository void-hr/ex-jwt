const express = require('express');
const { createUser, fetchUser, userLogin } = require('../controllers/userprofile');
const router  = express.Router();


router.get('/', (req,res) => {
    res.send('Express 🐍 expresses love')
})
router.post('/create', createUser)
router.get('/allUser', fetchUser)
router.post('/login', userLogin)







module.exports = router;  