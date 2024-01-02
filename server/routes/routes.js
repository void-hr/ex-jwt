const express = require('express');
const { createUser } = require('../controllers/userprofile');
const router  = express.Router();


router.get('/', (req,res) => {
    res.send('Express 🐍 expresses love')
})
router.get('/create', createUser)





module.exports = router;  