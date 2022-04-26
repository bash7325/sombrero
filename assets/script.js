let apiKey = "20d3501773a839af3857d2b0374101f6";
let lat = "40.76";
let lon = "-111.89";
let sombrero = document.getElementById("sombrero-button");

//get weather from openweathermap.org
function getWeather() {
  fetch(
    "https://api.openweathermap.org/data/2.5/onecall?lat=" +
      lat +
      "&lon=" +
      lon +
      "&appid=" +
      apiKey +
      "&units=imperial"
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let temp = data.current.temp;
      let clouds = data.current.clouds;
      let uvIndex = data.current.uvi;

      if (temp > 50 && clouds < 50 && uvIndex > 2) {
        //add h1 that says it's sombrero weather
        let sombreroWeather = document.createElement("h1");
        sombreroWeather.innerHTML = "Sombrero Weather";
        sombreroWeather.setAttribute("id", "sombrero-weather");
        document.body.appendChild(sombreroWeather);
      }else
        {
            //add h1 that says it's not sombrero weather
            let notSombreroWeather = document.createElement("h1");
            notSombreroWeather.innerHTML = "Not Sombrero Weather";
            notSombreroWeather.setAttribute("id", "not-sombrero-weather");
            document.body.appendChild(notSombreroWeather);
        }
    });
}
//on click, get weather
sombrero.addEventListener("click", getWeather);
