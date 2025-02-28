const mongoose = require('mongoose')
const express = require ('express');
const app = express();
const cors = require('cors');
const router = require('./router')


app.use(cors());
app.use(express.json()); 

const uri= 'mongodb+srv://user1:user1965@cluster0.qlevg.mongodb.net/User?retryWrites=true&w=majority&appName=Cluster0'

const connect = async ()=>{
    try {
        
        await mongoose.connect(uri)
        console.log("connect db")
    } catch (err) {
        console.log("mongo db error" , err)
        
    }
}
connect();
app.use('/api', router);

const server = app.listen(3000, ()=>{
    console.log("server running !");
    
    
})
