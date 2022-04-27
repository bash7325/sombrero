let apiKey = "20d3501773a839af3857d2b0374101f6";
let lat = "40.76";
let lon = "-111.89";
let hatDance = document.getElementById("myAudio");
let sombrero = document.getElementById("sombrero-button");
let sombreroContainer = document.getElementById("sombrero-container");
let sombreroImage = document.createElement("img");
let sombreroWeather = document.createElement("h1");
let notSombreroWeather = document.createElement("h1");

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

      if (temp > 50 && clouds < 100 && uvIndex > 0) {
        //add h1 to the sombrero-container that says it's sombrero weather
        sombreroWeather.setAttribute("style", "text-align: center");
        sombreroWeather.innerHTML = "It's Sombrero Weather!";
        sombreroWeather.classList.add("sombrero-text");
        sombreroContainer.appendChild(sombreroWeather);
        //add sombrero image
        sombreroImage.setAttribute("src", "./assets/images/sombrero-image.jpg");
        sombreroImage.setAttribute("id", "sombrero-image");
        document.body.appendChild(sombreroImage);
        //play audio of hat dance
        playAudio();
      } else {
        //add h1 that says it's not sombrero weather
        notSombreroWeather.setAttribute("style", "text-align: center");
        notSombreroWeather.innerHTML = "No, It's Not Sombrero Weather";
        sombreroContainer.appendChild(notSombreroWeather);
      }
    });
}

//mexican hat dance play audio
function playAudio() {
  hatDance.play();
}
//on click, get weather
sombrero.addEventListener("click", getWeather);
