const express = require('express');
const app =express();
const cors = require('cors'); 
const port = 3001;
const host = 'localhost';
const mongoose = require('mongoose');
const router = require('./router');

app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://kavindu:pAT6g8k88V7RCljD@cluster0.p4lssk3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const connectDB = async () => {
  try{
    await mongoose.connect(uri);
    console.log('Connected to MongoDB');
  }
  catch(error){
    console.error('Error connecting to MongoDB:', error);
  }
};

connectDB();

const server = app.listen(port, host, () =>{
  console.log(`Module server is listening to ${server.address().port}`);
  });

app.use('/api', router);