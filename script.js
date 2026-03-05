const temp = document.querySelector('.temp');
const info = document.querySelector('.info');
const tempInfo = document.querySelector('.tempInfo');
const cityName = document.querySelector('.cityName');
const descriptionP = document.querySelector('.des');
const humidity = document.querySelector('.hum');
const conditions = document.querySelector('.con');
const windSpeed = document.querySelector('.ws');
const dataBtn = document.getElementById('check');
const cityInput = document.getElementById('city');
const container = document.querySelector('.container');

async function getTemp(data) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${data}?key=FJ3S8FJ4ZJHBBD6CQN5GXKVQD`,
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
    container.innerHTML = '';
    container.innerHTML = `<p><span style="color:red; font-size:2rem;">City with name "${data}" does not exist</span></p>`;
  }
}
getTemp('london');

dataBtn.addEventListener('click', () => {
  getTemp(cityInput.value);
  cityInput.value = '';
});
