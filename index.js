const inputFilm = document.getElementById("valueFilm");
const getBtn = document.getElementById("getValue");
const getFilm = document.getElementById("getFilm");
const error = document.getElementById("validation");
const checkBoxBtn = document.querySelectorAll(".check");
const filmListNode = document.getElementById("film-list");
const btnDelite = document.getElementById("btn-delite");

const posts = [];

getBtn.addEventListener("click", function () {
  if (inputFilm.value.length === 0) {
    error.innerHTML = `<p class='error'>Вы не ввели название!</p>`;
  } else {
    error.innerHTML = ``;
    addFilm();
    renderFilm();
  }
});

function addFilm() {
  posts.push(inputFilm.value);
}

function renderFilm() {
  const filmComponent = /*html*/ `<li class='item-film'>
  <div class='wrapper-left'>
    <input type="checkbox" name="check" id="check" class='check' onclick='done(this)'/>
    <p class='film-list' id='film-list'>${posts[posts.length - 1]}</p>
  </div>
  <button class='btn-delite' id='btn-delite' onclick='delite(this)'>&times</button>
  </li>`;

  getFilm.insertAdjacentHTML("beforeend", filmComponent);

  inputFilm.value = "";
  inputFilm.focus();
}

function done(target) {
  const doneComponent = target.closest(".item-film");
  doneComponent.querySelector(".film-list").classList.toggle("not-active");
}

function delite(target) {
  const deliteFilmComponent = target.closest(".item-film");
  deliteFilmComponent.remove();
}

inputFilm.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    if (inputFilm.value.length === 0) {
      error.innerHTML = `<p class='error'>Вы не ввели название!</p>`;
    } else {
      error.innerHTML = ``;
      addFilm();
      renderFilm();
    }
  }
});

// function validationMessage() {
//   if (inputFilm.value.length === 0) {
//     error.innerHTML = `<p class='error'>Вы не ввели название!</p>`;
//   } else {
//     error.innerHTML = ``;
//   }
// }
