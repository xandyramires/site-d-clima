const apiKey = "";
const apiCountryURL = "https://countryflagsapi.com";

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

const cityElement = document.querySelector("#city");
const tempElement = document.querySelector("#temperature span");
const descElement = document.querySelector("#description");
const weatherIconElement = document.querySelector("#weather-icon");
const countryElement = document.querySelector("#country");
const humidityElement = document.querySelector("#humidity span");
const windElement = document.querySelector("#wind span");

// Funções
const getWeatherData = async (city) => {
  const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;
  const res = await fetch(apiWeatherURL);
  const data = await res.json();
  return data;
};

const showWeatherData = async (city) => {
  try {
    const data = await getWeatherData(city);
    console.log(data);
    cityElement.textContent = data.name;
    tempElement.textContent = data.main.temp;
    descElement.textContent = data.weather[0].description;
    weatherIconElement.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    countryElement.src = `${apiCountryURL}/${data.sys.country}/shiny/64.png`;
    humidityElement.textContent = data.main.humidity;
    windElement.textContent = data.wind.speed;
  } catch (error) {
    console.log("Erro ao obter dados do clima:", error);
  }
};

// Eventos
searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const city = cityInput.value;
  showWeatherData(city);
});
