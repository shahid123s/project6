const user_Route = require('./routes/userRoutes')
const admin_Route = require('./routes/adminRoute')
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.2.15/user_management_system");


const express = require('express');
const app = express();

app.use('/admin',admin_Route);


app.use('/',user_Route);


app.listen(3000,()=>console.log('http://localhost:3000'))

