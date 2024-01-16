"use strict";

{

  console.log(axios);
  const params = window.location.search;
  const id = new URLSearchParams(params).get("id");
  // console.log(params);
  // console.log(id);

  const newsSectionDOM = document.querySelector(".create-news");
  const titleDOM = document.querySelector(".create-news__input");
  const cetegoryDOM = document.querySelector(".create-news__select");
  const contentDOM = document.querySelector(".create-news__textarea");
  const publishedDOM = document.getElementById("published");

  const getSingleNews = async () => {
    try {
      const { data: news } = await axios.get(`/api/v1/news/${id}`);
      // const data = await axios.get(`api/v1/news/${id}`);
      // console.log(data);
      const { _id, title, content, category, published } = news;
      titleDOM.value = title;
      cetegoryDOM.value = category;
      contentDOM.value = content;
      if (published) {
        publishedDOM.value = true;
      } else {
        publishedDOM.value = false;
      }
    } catch (err) {
      console.log(err);
    }
  };

  getSingleNews();

  const updateNews = async () => {
    try {
      const news = {
        title: titleDOM.value,
        category: cetegoryDOM.value,
        content: contentDOM.value,
        published: publishedDOM.value
      }
      const savedNews = await axios.patch(`api/v1/news/${id}`, news);
      
      while (newsSectionDOM.firstChild) {
        newsSectionDOM.removeChild(newsSectionDOM.firstChild);
      }
      newsSectionDOM.textContent = `「${news.title}」の編集内容を保存しました。`;
      console.log(savedNews);
      } catch (err) {
        console.log(err);
      }
  }

  const createBtn = document.querySelector(".create-news__btn--create");

  createBtn.addEventListener("click", (e) => {
    e.preventDefault();
    updateNews();
  });

}