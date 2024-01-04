const express = require('express');
const app = express();
const routes = require('./routes/routes')
var cors = require('cors')
// to use .env
const dotenv = require('dotenv');
dotenv.config({ path: './.env' }); 
// import db config
const db = require('./config/mongodb');

app.use(cors());
app.use(express.json());
app.use('/', routes);

const PORT = process.env.PORT


app.listen(PORT, (err) => {
    if(!err){
        console.log(`Server is 🚀 on Port: ${PORT} `)
    }
    else {
        console.log(err)
    }
})