"use strict";

{

  console.log(axios);

  const titleDOM = document.querySelector(".create-news__input");
  const cetegoryDOM = document.querySelector(".create-news__select");
  const contentDOM = document.querySelector(".create-news__textarea");

  const createNews = async () => {
    try {
      const news = {
        title: titleDOM.value,
        category: cetegoryDOM.value,
        content: contentDOM.value
      }
      await axios.post("api/v1/news", news);
      console.log(news);
      } catch (err) {
        console.log(err);
      }
  }

  const createBtn = document.querySelector(".create-news__btn");

  createBtn.addEventListener("click", (e) => {
    e.preventDefault();
    createNews();
  });

}