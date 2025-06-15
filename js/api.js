const WEATHER_API_KEY = 'c147a938569846d91366dc5c41bf0bea';
const UNSPLASH_ACCESS_KEY = '';

export async function getWeatherByCoords(lat, lon) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${WEATHER_API_KEY}`;
  const response = await fetch(url);
  if (!response.ok) throw new Error("Weather fetch failed");
  return await response.json();
}

export async function getRandomImage() {
  const url = `https://api.unsplash.com/photos/random?query=landscape&orientation=landscape&client_id=${UNSPLASH_ACCESS_KEY}`;
  const response = await fetch(url);
  if (!response.ok) throw new Error("Unsplash fetch failed");
  const data = await response.json();
  return data.urls.full;
}
