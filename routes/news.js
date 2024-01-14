"use strict";

{

  const express = require("express");
  const router = express.Router();



  const newsdata = [
    {
      id: 1,
      title: "タイトルです1",
      date: "2020-20-20",
      content: "コンテンツでーす1"
    },
    {
      id: 2,
      title: "タイトルです2",
      date: "2020-20-20",
      content: "コンテンツでーす2"
    },
    {
      id: 3,
      title: "タイトルです3",
      date: "2020-20-20",
      content: "コンテンツでーす3"
    }
  ];



  // router.get("/", (req, res) => {
  //   res.send("Hello World");
  // })

  // 記事一覧
  router.get("/", (req, res) => {
    res.send(newsdata);
  });

  // 記事を1つ取得する
  router.get("/:id", (req, res) => {
    const news = newsdata.find((c) => c.id === parseInt(req.params.id));
    res.send(news);
  });

  // 記事投稿
  router.post("/", (req, res) => {
    const news = {
      title: req.body.title,
      date: req.body.date,
      content: req.body.content
    }

    newsdata.push(news);
    res.send(newsdata);
  });

  // 記事を1つひっぱってくる（編集用）
  router.patch("/:id", (req, res) => {
    const news = newsdata.find((c) => c.id === parseInt(req.params.id));
    news.title = req.body.title;
    news.date = req.body.date;
    news.content = req.body.content;
    res.send(news);
  });

  // 記事を削除する
  router.delete("/:id", (req, res) => {
    const news = newsdata.find((c) => c.id === parseInt(req.params.id));
    const index = newsdata.indexOf(news);
    newsdata.splice(index, 1);
    res.send(news);
  });

  module.exports = router;
}