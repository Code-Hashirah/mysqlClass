const http =require('http');
const fs=require('fs')
const express=require('express')
const path =require('path')
const bodyParser=require('body-parser')
const adminRoute=require('./routes/admin')
const app=express();
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine', 'ejs')
app.use(adminRoute)
app.use(express.static(path.join(__dirname, 'public')));
app.listen(5000,()=>{
    console.log('server is running on port 5000')
})