"use strict";
{

  const express = require("express");
  const app = express();
  const newsRoute = require("./routes/news");
  const PORT = 5050;
  app.use(express.json());
  require("dotenv").config();


  app.listen(PORT, () => {
    console.log("サーバーを起動しています");
  })

  app.use("/api/v1/news", newsRoute);


  const mongoose = require("mongoose");

  main().catch(err => console.log(err));

  async function main() {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("データベースに接続しています");
  }


}