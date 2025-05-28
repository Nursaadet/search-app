const formWrapper = document.querySelector(".form-wrapper");
const form = document.querySelector("#form");
const searchInput = document.querySelector("#searchInput");
const buttonWrapper = document.querySelector(".button-wrapper");
const searchButtton = document.querySelector("#searchButton");
const clearButton = document.querySelector("#clearButton");
const imageListWrapper = document.querySelector(".imageListWrapper");

runEventListeners();
function runEventListeners() {
  form.addEventListener("submit", search);
}

function search(e) {
  const value = searchInput.value.trim();
  fetch(`https://api.unsplash.com/search/photos?query=${value}`, {
    method: "GET",
    headers: {
      Authorization: "Client-ID iZjod8EE_Q0nZpK3ZPp-6CKgccx4gy12KrSVSXsl9mw",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      Array.from(data.results).forEach((image) => {
        console.log(image.urls.small);
      });
    })
    .catch((err) => console.log(err));

  e.preventDefault();
}