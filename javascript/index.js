function updateTime(timezone) {
  let city = timezone.split("/")[1].toLowerCase();
  let cityElement = document.querySelector(`#${city}`);
  if (cityElement) {
    let cityDate = cityElement.querySelector(".date");
    cityDate.innerHTML = moment().tz(`${timezone}`).format("MMMM Do YYYY");

    let cityTime = cityElement.querySelector(".time");
    cityTime.innerHTML = moment().tz(`${timezone}`).format("HH:mm:ss");
  }
}

updateTime("Europe/Paris");
updateTime("Asia/Tel_Aviv");
updateTime("Australia/Sydney");

let intervalForParis = "Europe/Paris";
let intervalForTelAviv = "Asia/Tel_Aviv";
let intervalForSydney = "Australia/Sydney";

setInterval(updateTime, 1000, intervalForParis);
setInterval(updateTime, 1000, intervalForTelAviv);
setInterval(updateTime, 1000, intervalForSydney);

function updateCityTime(event) {
  let selectedTimeZone = event.target.value;
  if (selectedTimeZone === "current" || !selectedTimeZone) {
    selectedTimeZone = moment.tz.guess();
  }
  let cityName = selectedTimeZone.replace("_", " ").split("/")[1];
  let selectedCityDate = moment()
    .tz(`${selectedTimeZone}`)
    .format("MMMM Do YYYY");
  let selectedCityTime = moment().tz(`${selectedTimeZone}`).format("HH:mm:ss");
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
          <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${selectedCityDate}</div>
          </div>
          <div class="time">${selectedCityTime}</div>
        </div>`;
}

let citySelectElement = document.querySelector("#city");
citySelectElement.addEventListener("change", updateCityTime);
