"use strict";
{

  const News = require("../models/News");

  const getAllNews = async (req, res) => {
    try {
      const allNews = await News.find({});
      res.status(200).json(allNews);
    } catch (err) {
      res.status(500).json(err);
    }
  };

  const createNews = async (req, res) => {
    try {
      const createNews = await News.create(req.body);
      res.status(200).json(createNews);
    } catch (err) {
      res.status(500).json(err);
    }
  };

  const getSingleNews = async (req, res) => {
    try {
      const singleNews = await News.findOne({ _id: req.params.id });
      
      if (!singleNews) {
        return res.status(404).json(`_id: ${req.params.id} は存在しません。`);
      }

      res.status(200).json(singleNews);
    } catch (err) {
      res.status(500).json(err);
    }
  };

  const updateNews = async (req, res) => {

    const newData = {
      title: req.body.title ,
      content: req.body.content,
      category: req.body.category,
      modifiedTime: new Date()
    };

    try {
      const updateNews = await News.findOneAndUpdate(
        { _id: req.params.id },
        newData,
        {
          new: true
        }
      );

      if (!updateNews) {
        return res.status(404).json(`_id: ${req.params.id} は存在しません。`);
      }

      res.status(200).json(updateNews);
    } catch (err) {
      res.status(500).json(err);
    }

  };

  const deleteNews = async (req, res) => {
    try {
      const deleteNews = await News.findOneAndDelete(
        { _id: req.params.id }
      );

      if (!deleteNews) {
        return res.status(404).json(`_id: ${req.params.id} は存在しません。`);
      }

      res.status(200).json(deleteNews);
    } catch (err) {
      res.status(500).json(err);
    }
  };


  module.exports = {
    getAllNews,
    createNews,
    getSingleNews,
    updateNews,
    deleteNews
  }
}