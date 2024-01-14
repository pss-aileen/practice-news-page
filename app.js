"use strict";
{

  const express = require("express");
  const app = express();
  const newsRoute = require("./routes/news");
  const connectDB = require("./database/connect");
  app.use(express.json());
  require("dotenv").config();
  
  const PORT = 5050;

  
  app.use("/api/v1/news", newsRoute);
  
  const start = async () => {
    try {
      await connectDB(process.env.MONGODB_URL);
      
      app.listen(PORT, () => {
        console.log("サーバーを起動しています");
      })
    } catch (err) {
      console.log(err);
    }
  }

  start();


}