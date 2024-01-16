"use strict";

{
  console.log(axios);

  const tableDOM = document.querySelector(".news-table tbody");
  const messageDOM = document.querySelector(".controlls-message");

  const updateNews = async (id, isPublished) => {
    const newData = {
      modifiedTime: new Date(),
      isPublished: isPublished
    };

    try {
      await axios.patch(`api/v1/news/${id}`);
      console.log("公開状態を変更しました。")
    } catch (err) {
      console.log(err);
    }
  };

  const showAllNews = async () => {
    try {
      const { data: news } = await axios.get("/api/v1/news");
      console.log(news);

      while (tableDOM.firstChild) {
        tableDOM.removeChild(tableDOM.firstChild);
      }

      const allNews = news.map((singleNews) => {
        const { _id, published, title, content, category, createdTime, modifiedTime } = singleNews;
        //published
        const tr = document.createElement("tr");

        const tdPublished = document.createElement("td");
        const spanCondition = document.createElement("span");
        const tdDate = document.createElement("td");
        const tdCategory = document.createElement("td");
        const spanCategory = document.createElement("span");
        const tdTitle = document.createElement("td");
        const tdEdit = document.createElement("td");
        const tdDelete = document.createElement("td");
        const btnDelete = document.createElement("button");

        spanCategory.textContent = category;
        spanCategory.classList.add(`category--${category}`);
        tdTitle.textContent = title;
        tdEdit.innerHTML = `<a href="/edit.html?id=${_id}">編集</a>`;

        let isCondition;
        // tdPublished
        if (published) {
          isCondition = "公開";
          spanCondition.classList.add("isPublished");
        } else {
          isCondition = "非公開";
          spanCondition.classList.add("isUnpublished");
        }
        spanCondition.textContent = isCondition;

        spanCondition.addEventListener("click", async () => {
          let userConfirmed;
          let newPublished;
          if (published) {
            userConfirmed = window.confirm(`「${title}」を非公開にしますか？`);
            if (!userConfirmed) {
              return;
            }
            isCondition = "非公開";
            messageDOM.textContent = `「${title}」を非公開にしました。`;
            // クラスの追加と統一化をしたい〜緑＝公開、非公開＝青
            // 削除は赤
            newPublished = false;
            spanCondition.classList.remove("isPublished");
            spanCondition.classList.add("isUnpublished");
          } else {
            userConfirmed = window.confirm(`「${title}」を公開しますか？`);
            if (!userConfirmed) {
              return;
            }
            isCondition = "公開";
            messageDOM.textContent = `「${title}」を公開しました。`;
            newPublished = true;
            spanCondition.classList.remove("isUnpublished");
            spanCondition.classList.add("isPublished");
          }
          spanCondition.textContent = isCondition;

          const newData = {
            modifiedTime: new Date(),
            published: newPublished
          };
      
          try {
            await axios.patch(`api/v1/news/${_id}`, newData);
            showAllNews();
            console.log("公開状態を変更しました。")
          } catch (err) {
            console.log(err);
          }
        });

        btnDelete.textContent = "削除";
        btnDelete.addEventListener("click", async () => {
          const userConfirmed = window.confirm(`「${title}」を本当に削除しますか？`)
          console.log(_id);

          if (userConfirmed) {
            try {
              await axios.delete(`api/v1/news/${_id}`);
              
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
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");
        tdDate.innerText = `${year}/${month}/${day} ${hours}:${minutes}`;

        tableDOM.appendChild(tr);
        tr.appendChild(tdPublished);
        tdPublished.appendChild(spanCondition);
        tr.appendChild(tdDate);
        tr.appendChild(tdCategory);
        tdCategory.appendChild(spanCategory);
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