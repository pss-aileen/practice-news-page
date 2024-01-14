"use strict";
{

  const News = require("../models/News");

  const getAllNews = async (req, res) => {
    // res.send("ニュースを全て取得しました");
    try {
      const allNews = await News.find({});
      res.status(200).json(allNews);
    } catch (err) {
      res.status(500).json(err);
    }
  };

  const createNews = async (req, res) => {
    // res.send("ニュースを投稿しました");
    try {
      const createNews = await News.create(req.body);
      res.status(200).json(createNews);
    } catch (err) {
      res.status(500).json(err);
    }
  };

  const getSingleNews = async (req, res) => {
    // res.send("特定のニュースを取得しました");
    try {
      const singleNews = await News.findOne({_id: req.params.id});
      res.status(200).json(singleNews);
    } catch (err) {
      res.status(500).json(err);
    }
  };

  const updateNews = (req, res) => {
    res.send("特定のニュースをアップデートしました");
  };

  const deleteNews = (req, res) => {
    res.send("特定のニュースを削除しました");
  };


  module.exports = {
    getAllNews,
    createNews,
    getSingleNews,
    updateNews,
    deleteNews
  }
}