const express = require('express');
const app =express();
const cors = require('cors'); 
const port = 3001;
const host = '127.0.0.1'
const mongoose = require('mongoose');

app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://amalkaeka:kavindu@cluster0.jd5he2z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

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

