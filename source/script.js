function updateweather(response) {
  console.log(response);
  let correctTemperature = document.querySelector("#temperature");
  correctTemperature.innerHTML = Math.round(response.data.temperature.current);
  let city = document.querySelector("#city");
  city.innerHTML = response.data.city;
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.condition.description;
  let humidityLevel = document.querySelector("#Humidity");
  humidityLevel.innerHTML = ` %${response.data.temperature.humidity}`;
  let windSpeed = document.querySelector("#wind");
  windSpeed.innerHTML = `${response.data.wind.speed} km/h`;
}

function searchcity(city) {
  let api = "c2526553620odab6dft0efe428b8b025";
  let apiUrl = `https:api.shecodes.io/weather/v1/current?query=${city}&key=${api}`;
  console.log(apiUrl);
  axios.get(apiUrl).then(updateweather);
}

function runTheSearch(event) {
  event.preventDefault();
  let searchInput = document.querySelector(".search-form-input");

  searchcity(searchInput.value);
}

let search = document.querySelector(".search-form");
search.addEventListener("submit", runTheSearch);

searchcity("tehran");
