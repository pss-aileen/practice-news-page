"use strict";
{

  const express = require("express");
  const app = express();
  const newsRoute = require("./routes/news");
  const PORT = 5050;
  app.use(express.json());


  app.listen(PORT, () => {
    console.log("サーバーを起動しています");
  })


  app.use("/api/v1/news", newsRoute);

}