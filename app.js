"use strict";
{

  const express = require("express");
  const app = express();
  const newsRoute = require("./routes/news");
  const connectDB = require("./database/connect");
  require("dotenv").config();
  app.use(express.json());
  app.use(express.static("./public"));
  
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