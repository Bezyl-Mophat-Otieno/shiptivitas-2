import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'

const app = express()
dotenv.config()
const PORT = process.env.PORT || 3000;

const connectDB= async () =>{

  try {
      const conn=  mongoose.connect(process.env.MONGO_URI);
      console.log(`MongoDB connected : ${conn.connection.host}`.cyan.underline);
      
  } catch (error) {
      console.log(error);
      process.exit(1);
      
  }
  
  }
app.listen(PORT, ()=>{
  connectDB()
  console.log(`listening on port ${PORT}`);
})





