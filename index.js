const express = require("express");
const app = express();
const PORT = 5050;
app.use(express.json());

app.listen(PORT, () => {
  console.log("サーバーを起動しています");
})

app.get("/", (req, res) => {
  res.send("Hello World");
})

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

// 記事一覧
app.get("/api/v1/news", (req, res) => {
  res.send(newsdata);
});

// 記事を1つ取得する
app.get("/api/v1/news/:id", (req, res) => {
  const news = newsdata.find((c) => c.id === parseInt(req.params.id));
  res.send(news);
});

// 記事投稿
app.post("/api/v1/news", (req, res) => {
  const news = {
    title: req.body.title,
    date: req.body.date,
    content: req.body.content
  }

  newsdata.push(news);
  res.send(newsdata);
});

// 記事を1つひっぱってくる（編集用）
app.patch("/api/v1/news/:id", (req, res) => {
  const news = newsdata.find((c) => c.id === parseInt(req.params.id));
  news.title = req.body.title;
  news.date = req.body.date;
  news.content = req.body.content;
  res.send(news);
});

// 記事を削除する
app.delete("/api/v1/news/:id", (req, res) => {
  const news = newsdata.find((c) => c.id === parseInt(req.params.id));
  const index = newsdata.indexOf(news);
  newsdata.splice(index, 1);
  res.send(news);
});



// const adminUser = {
//   username: "admin",
//   password: "password"
// }


// app.post("/login", (req, res) => {
//   const { username, password } = req.body;

//   if (username === adminUser.username && password === adminUser.password) {
//     console.log("ログイン成功");
//   } else {
//     res.status(401).json({ message: '認証エラー' });
//   }
// });