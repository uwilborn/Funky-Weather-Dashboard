var APIkey = "f3bc0a3c85231ad135e4beb406f8cdc7";
let currentWeather = document.getElementById("currentWeather")
let currentDate = moment().format('MMMM Do YYYY')
let currentWeather2 = document.getElementById("currentWeather2")

let userinput = document.getElementById("userinput");
const submit = document.getElementById("submit");


function grabText(event){
  event.preventDefault();  
  let city = userinput.value;
  getApi(city);
    localStorage.setItem("userinput", JSON.stringify(city));
   
}


function getApi(city) {
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIkey
    console.log(queryURL);
  fetch(queryURL)
  .then(response => response.json())
  .then(data => displayWeather(data));
  }

function displayWeather(data){
console.log(data)
let cityName = document.createElement("h1");
cityName.innerText = data.name + " " + currentDate;
currentWeather.append(cityName);
let currentTemp = document.createElement("h2")
let fTemp = ((data.main.temp -273.15)*1.8)+32
currentTemp.innerText = fTemp.toFixed(0);
currentWeather.append(currentTemp);

get5Day(data.coord.lat,data.coord.lon);
}

function get5Day(lat,lon){
  var queryURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${APIkey}`
  fetch(queryURL)
  .then(response => response.json())
  .then(data => display5Day(data));

}

function display5Day(data){
// console.log(data);

for (var i =0; i < data.length; i++){
let fdate = document.createElement("h3");
fdate.innerText = data.daily[i].dt;
let futureTemp = document.createElement("h2");
let convertTemp = ((data.daily[i].temp[0] -273.15)*1.8)+32;
futureTemp.innerText = convertTemp.toFixed(0);
let fwind = document.createElement("h2");
fwind.innerText = data.daily[i].wind_speed;
let fhumid = document.createElement("h2");
fhumid.innerText = data.daily[i].humidity;
currentWeather2.append(fdate);
currentWeather2.append(futureTemp);
currentWeather2.append(fwind);
currentWeather2.append(fhumid);
}
}



submit.addEventListener("click", grabText)

