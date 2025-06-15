import { getWeatherByCoords, getRandomImage } from './api.js';

async function init() {
  try {
    const pos = await getLocation();
    const weather = await getWeatherByCoords(pos.coords.latitude, pos.coords.longitude);
    const bgUrl = await getRandomImage();

    updateWeatherUI(weather);
    document.body.style.backgroundImage = `url(${bgUrl})`;
  } catch (error) {
    console.error("Initialization error:", error);
  }
}

function getLocation() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

function updateWeatherUI(data) {
  document.getElementById('location').textContent = `${data.name}, ${data.sys.country}`;
  document.getElementById('description').textContent = data.weather[0].description;
  document.getElementById('temperature').textContent = `${data.main.temp}°C`;
}

init();
