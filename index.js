const express=require('express')
const mongoose =require('mongoose')
const morgan = require('morgan')
const cors =require('cors')
const app=express();
const jwt =require("jsonwebtoken");
require('dotenv').config();
app.use(morgan("dev"));
app.use(cors());
require("./db/mongodb");

const user=require('./Router/UserRoute');
app.use('/api',user)

const movie=require('./Router/MovieRouter');
app.use('/api',movie)
const Book=require('./Router/BookRouter');
app.use('/api',Book)
const Review=require('./Router/ReviewRouter');
app.use('/api',Review)

app.listen(5000,()=>{
    console.log(`sERVER RUNNING ON port 5000`);
});