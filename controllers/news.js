"use strict";
{

  const getAllNews = (req, res) => {
    res.send("ニュースを全て取得しました");
  };

  const createNews = (req, res) => {
    res.send("ニュースを投稿しました");
  };

  const getSingleNews = (req, res) => {
    res.send("特定のニュースを取得しました");
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