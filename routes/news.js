"use strict";

{

  const express = require("express");
  const router = express.Router();
  const {
    getAllNews,
    getAllPublishedNews,
    getNewsPerPage,
    createNews,
    getSingleNews,
    updateNews,
    deleteNews,
  } = require("../controllers/news");


  // 記事一覧取得（編集ページ用）
  router.get("/", getAllNews);

  // 公開記事一覧取得
  router.get("/published/", getAllPublishedNews);

  // 10記事ごとにページを生成？
  // router.get("/:page", getNewsPerPage);

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