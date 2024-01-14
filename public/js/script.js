"use strict";

{

  console.log(axios);

  // axios.get("/api/v1/news")
  //   .then(function (res) {
  //     console.log(res);
  //   });
  
  const newsWrapperDOM = document.querySelector(".news-wrapper");

  const showAllNews = async () => {
    try {
      // const params = window.location.serach;
      // const page = new URLSearchParams(params).get("page");

      const { data: news } = await axios.get("api/v1/news");
      // const { data: news } = await axios.get(`/api/v1/news/${page}`);
      console.log(news);

      const allNews = news.map((singleNews) => {
        const { _id, title, content, category, createdTime, modifiedTime } = singleNews;
        console.log(_id, title, category, content, createdTime, modifiedTime);

        const sectionNews = document.createElement("section");
        const divNewsInfo = document.createElement("div");
        const timeNewsTime = document.createElement("time");
        const spanNewsCategory = document.createElement("span");
        const h2NewsTitle = document.createElement("h2");
        const pNewsContent = document.createElement("p");

        sectionNews.classList.add("news");
        divNewsInfo.classList.add("news__info");
        timeNewsTime.classList.add("news__time");
        spanNewsCategory.classList.add("news__category");
        h2NewsTitle.classList.add("news__title");
        pNewsContent.classList.add("news__content");
        
        newsWrapperDOM.appendChild(sectionNews);
        sectionNews.appendChild(divNewsInfo);
        sectionNews.appendChild(h2NewsTitle);
        sectionNews.appendChild(pNewsContent);
        divNewsInfo.appendChild(timeNewsTime);
        divNewsInfo.appendChild(spanNewsCategory);

        spanNewsCategory.textContent = category;
        h2NewsTitle.textContent = title;
        pNewsContent.textContent = content;

        const date = new Date(createdTime);

        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const hours = date.getHours();
        const minutes = date.getMinutes();

        timeNewsTime.textContent = `${year}年${month}月${day}日 ${hours}時${minutes}分`


      });
    } catch (err) {
      console.log(err);
    }
  }
  
  showAllNews();
  

}