function runTheSearch() {
  event.preventDefault();
  let searchInput = document.querySelector(".search-form-input");
  let city = document.querySelector("#city");
  city.innerHTML = searchInput.value;
}

let search=document.querySelector("#search-input");
search.addEventListener("submit", runTheSearch);
