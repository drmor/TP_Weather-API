const temp = document.querySelector('.temp');
const info = document.querySelector('.info');
const tempInfo = document.querySelector('.tempInfo');
const cityName = document.querySelector('.cityName');
const descriptionP = document.querySelector('.des');
const humidity = document.querySelector('.hum');
const conditions = document.querySelector('.con');
const windSpeed = document.querySelector('.ws');

async function getTemp() {
  try {
    const response = await fetch(
      'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/almaty?key=FJ3S8FJ4ZJHBBD6CQN5GXKVQD',
    );
    const cityData = await response.json();
    const cel = Math.floor((cityData.currentConditions.temp - 32) * (5 / 9));
    tempInfo.innerText = `${cel} °C`;
    cityName.textContent = cityData.address;
    descriptionP.textContent = cityData.description;
    humidity.textContent = cityData.currentConditions.humidity;
    conditions.textContent = cityData.currentConditions.conditions;
    windSpeed.textContent = cityData.currentConditions.windspeed;
    console.log(cityData);
  } catch (error) {
    console.error(error);
  }
}
getTemp();
