let apiKey = '20d3501773a839af3857d2b0374101f6';
let lat = '40.76';
let lon = '-111.89';

//get weather from openweathermap.org
function getWeather() {
    fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&appid=' + apiKey + '&units=imperial')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let temp = data.current.temp;
            let clouds = data.current.clouds;
            let uvIndex = data.current.uvi;
        })
}

getWeather();