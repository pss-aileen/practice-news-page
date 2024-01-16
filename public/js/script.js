"use strict";

{
  const newsWrapperDOM = document.querySelector(".news-wrapper");

  const showAllNews = async () => {
    try {
      const { data: news } = await axios.get("/api/v1/news/published");
      // console.log(news);

      if (news.length === 0) {
        newsWrapperDOM.textContent = "まだNEWSがありません。";
        return;
      }

      const allNews = news.map((singleNews) => {
        const { _id, title, content, category, createdTime, modifiedTime, published } = singleNews;
        // console.log(_id, title, category, content, createdTime, modifiedTime, published);

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
        spanNewsCategory.classList.add(`category--${category}`);
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
        pNewsContent.innerText = content;

        const date = new Date(createdTime);

        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");

        timeNewsTime.textContent = `${year}年${month}月${day}日 ${hours}時${minutes}分`;

      });
    } catch (err) {
      console.log(err);
    }
  }
  
  showAllNews();
}