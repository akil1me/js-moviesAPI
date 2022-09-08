let elMovieForm = document.querySelector(".movies__form");
let elMovieInput = document.querySelector(".movies__serchInput");

let elMovieList = document.querySelector(".movies__list")

function copyMovie(movies) {
  movies.forEach(movie => {
    let elMovieImg = document.createElement("img");
    elMovieImg.className = "rounded mb-2"
    elMovieImg.src = movie.Poster;
    elMovieImg.alt = movie.Title;
    elMovieImg.width = "300";
    elMovieImg.height = "400";

    let elMovieItem = document.createElement("li");
    elMovieItem.className = "card mb-3 movie__item pb-5";

    let elTitle = document.createElement("h2");
    elTitle.textContent = movie.Title;

    let elMovieYear = document.createElement("p");
    elMovieYear.textContent = movie.Year

    let elMovieLink = document.createElement("a");
    elMovieLink.className = "text-decoration-none movie__link"
    elMovieLink.href = `https://www.imdb.com/title/${movie.IimdbID}/?ref_=hm_tpks_tt_i_6_pd_tp1_pbr_ic`;
    elMovieLink.textContent = "IMDB →"

    elMovieItem.append(elMovieImg, elTitle, elMovieYear, elMovieLink)
    console.log(movie);
    elMovieList.appendChild(elMovieItem);
  });
}

function searchMoveiAPI(value) {
  let urlApi = `https://www.omdbapi.com/?apikey=6d47d711&s=${value}`
  fetch(urlApi)
    .then(res => res.json())
    .then(data => copyMovie(data.Search));
}

elMovieForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  elMovieList.innerHTML = "";
  searchMoveiAPI(elMovieInput.value)

  elMovieInput.value = ""
})