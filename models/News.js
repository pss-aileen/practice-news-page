const mongoose = require("mongoose");

const NewsSchema = new mongoose.Schema({
  // id, title, date, 編集日 content
  title: {
    type: String,
    required: [true, "お知らせのタイトルを入力してください"],
    trim: true,
    maxLength: [100, "お知らせのタイトルは100文字以内で入力してください"]
  },
  createdTime: {
    type: Date,
    // required: true,
    default: Date.now
  },
  modifiedTime: {
    type: Date,
    default: Date.now
  },
  content: {
    type: String,
    required: true,
    maxLength: [1000, "お知らせの内容は1000文字以内で入力してください"]
  }
});

module.exports = mongoose.model("News", NewsSchema);

// 内容が変わっていなければ変更しないにしないと、cratedAtは基本変更しないようにする