"use strict";

{

  const express = require("express");
  const router = express.Router();
  const {
    getAllNews,
    createNews,
    getSingleNews,
    updateNews,
    deleteNews
  } = require("../controllers/news");


  // 記事一覧取得
  router.get("/", getAllNews);

  // 記事投稿
  router.post("/", createNews);

  // 記事を1つ取得する
  router.get("/:id", getSingleNews);

  // 記事を編集する
  router.patch("/:id", updateNews);

  // 記事を削除する
  router.delete("/:id", deleteNews);

  module.exports = router;
}