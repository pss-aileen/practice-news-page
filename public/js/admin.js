"use strict";

{
  console.log(axios);

  const tableDOM = document.querySelector(".news-table tbody");

  const deleteSingleNews = async () => {
    try {

    } catch (err) {
      console.log(err);
    }
  };

  const showAllNews = async () => {
    try {
      const { data: news } = await axios.get("api/v1/news");
      console.log(news);

      while (tableDOM.firstChild) {
        tableDOM.removeChild(tableDOM.firstChild);
      }

      const allNews = news.map((singleNews) => {
        const { _id, title, content, category, createdTime, modifiedTime } = singleNews;

        const tr = document.createElement("tr");

        const tdDate = document.createElement("td");
        const tdCategory = document.createElement("td");
        const tdTitle = document.createElement("td");
        const tdEdit = document.createElement("td");
        const tdDelete = document.createElement("td");
        const btnDelete = document.createElement("button");

        tdCategory.textContent = category;
        tdTitle.textContent = title;
        tdEdit.innerHTML = `<a href="/edit.html?id=${_id}">編集</a>`;

        btnDelete.textContent = "削除";
        btnDelete.addEventListener("click", async () => {
          const userConfirmed = window.confirm(`「${title}」を本当に削除しますか？`)
          console.log(_id);

          if (userConfirmed) {
            try {
              await axios.delete(`api/v1/news/${_id}`);
              const messageDOM = document.querySelector(".controlls-message");
              messageDOM.textContent = `「${title}」を削除しました。`;
              messageDOM.classList.add("delete");
              showAllNews();
            } catch (err) {
              console.log(err);
            }
          } else {
            console.log("削除がキャンセルされました");
          }
        });

        const date = new Date(createdTime);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        tdDate.textContent = `${year}年${month}月${day}日`;

        tableDOM.appendChild(tr);
        tr.appendChild(tdDate);
        tr.appendChild(tdCategory);
        tr.appendChild(tdTitle);
        tr.appendChild(tdEdit);
        tr.appendChild(tdDelete);
        tdDelete.appendChild(btnDelete);

      });
    } catch (err) {
      console.log(err);
    }
  }
  
  showAllNews();

}