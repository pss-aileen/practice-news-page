"use strict";

{

  console.log(axios);

  const newsSectionDOM = document.querySelector(".create-news");
  const titleDOM = document.querySelector(".create-news__input");
  const cetegoryDOM = document.querySelector(".create-news__select");
  const contentDOM = document.querySelector(".create-news__textarea");

  const createNews = async (published) => {
    try {
      const news = {
        title: titleDOM.value,
        category: cetegoryDOM.value,
        content: contentDOM.value,
        published: published
      }
      const savedNews = await axios.post("api/v1/news", news);
      
      while (newsSectionDOM.firstChild) {
        newsSectionDOM.removeChild(newsSectionDOM.firstChild);
      }
      newsSectionDOM.textContent = `「${news.title}」を${published ? "公開しました。" : "下書きとして保存しました。"}`;
      console.log(savedNews);
      } catch (err) {
        console.log(err);
      }
  }

  const createBtn = document.querySelector(".create-news__btn--create");

  createBtn.addEventListener("click", (e) => {
    e.preventDefault();
    createNews(true);
  });

  const saveBtn = document.querySelector(".create-news__btn--draft");

  saveBtn.addEventListener("click", (e) => {
    e.preventDefault();
    createNews(false);
  });

}