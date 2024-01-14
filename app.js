"use strict";
{

  const express = require("express");
  const app = express();
  const newsRoute = require("./routes/news");
  const connectDB = require("./database/connect");
  const PORT = 5050;
  app.use(express.json());
  require("dotenv").config();


  app.listen(PORT, () => {
    console.log("サーバーを起動しています");
  })

  
  const start = async () => {
    try {
      await connectDB(process.env.MONGODB_URL);
      app.use("/api/v1/news", newsRoute);
    } catch (err) {
      console.log(err);
    }
  }

  start();


}