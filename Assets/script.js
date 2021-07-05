var APIkey = "f3bc0a3c85231ad135e4beb406f8cdc7";
let currentWeather = document.getElementById("currentWeather")
let currentDate = moment().format('MMMM Do YYYY')
let currentWeather2 = document.getElementById("currentWeather2")
let currentWeather3 = document.getElementById("currentWeather3")
let currentWeather4 = document.getElementById("currentWeather4")
let currentWeather5 = document.getElementById("currentWeather5")
let currentWeather6 = document.getElementById("currentWeather6")


let userinput = document.getElementById("userinput");
const submit = document.getElementById("submit");


function grabText(event){
  event.preventDefault(); 
  // currentWeather.innerText = "";
  // currentWeather2.innerText = ""; 
  // currentWeather3.innerText = ""; 
  // currentWeather4.innerText = ""; 
  // currentWeather5.innerText = ""; 
  // currentWeather6.innerText = "";  
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
let icon = data.weather[0].icon;
cityName.innerText = data.name + " " + currentDate + icon;
currentWeather.append(cityName);
let currentTemp = document.createElement("h2")
let fTemp = ((data.main.temp -273.15)*1.8)+32
currentTemp.innerText = fTemp.toFixed(0) + "\xB0" + "F";


currentWeather.append(currentTemp);



get5Day(data.coord.lat,data.coord.lon);
}

function get5Day(lat,lon){
  var queryURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${APIkey}`
  console.log(queryURL);
  fetch(queryURL)
  .then(response => response.json())
  .then(data => display5Day(data));

}

//THIS IS THE ORGINAL FOR LOOP BUT I COULDN'T GET THE CSS TO WORK FOR THE INDIVIDUAL DIVS
// function display5Day(data){
// console.log(data);
// let container = [];
// for (var i=0; i<data.daily.length-7; i++){

//  contianer[i]= document.createElement("div");
//  contianer[i].className = 'box';
//  contianer[i].id= (i+1);
 

// let fdate = document.createElement("h3");
// fdate.innerText = data.daily[i].dt;
// let futureTemp = document.createElement("h2");
// let convertTemp = ((data.daily[i].temp.day -273.15)*1.8)+32;
// futureTemp.innerText = convertTemp.toFixed(0) + "degrees F";
// let fwind = document.createElement("h2");
// fwind.innerText = data.daily[i].wind_speed;
// let fhumid = document.createElement("h2");
// fhumid.innerText = data.daily[i].humidity;
// container.append(fdate);
// container.append(futureTemp);
// container.append(fwind);
// container.append(fhumid);
// currentWeather2.appendChild(container[i]);

// }}

//Display Day 1

function display5Day(data){
  
  let fdate = document.createElement("h3");
  fdate.innerText = convertTimestamp(data.daily[0].dt);
  let ficon = document.createElement("div");
  ficon.innerText = data.daily[0].weather;
  let futureTemp = document.createElement("h2");
  let convertTemp = ((data.daily[0].temp.day -273.15)*1.8)+32;
  futureTemp.innerText = "Temp: " + convertTemp.toFixed(0) + "\xB0" + "F";
  let fwind = document.createElement("h2");
  fwind.innerText = "Wind: " + data.daily[0].wind_speed + " MPH";
  let fhumid = document.createElement("h2");
  fhumid.innerText = "Humidity: " + data.daily[0].humidity + " %";
  currentWeather2.append(fdate);
  currentWeather2.append(ficon);
  currentWeather2.append(futureTemp);
  currentWeather2.append(fwind);
  currentWeather2.append(fhumid);
  display5Day2(data);
  }

  function display5Day2(data){
  
    let fdate = document.createElement("h3");
    fdate.innerText = convertTimestamp(data.daily[1].dt);
    let futureTemp = document.createElement("h2");
    let convertTemp = ((data.daily[1].temp.day -273.15)*1.8)+32;
    futureTemp.innerText = "Temp: " + convertTemp.toFixed(0) + "\xB0" + "F";
    let fwind = document.createElement("h2");
    fwind.innerText = "Wind: " + data.daily[1].wind_speed + " MPH";
    let fhumid = document.createElement("h2");
    fhumid.innerText = "Humidity: " + data.daily[1].humidity + " %";
    currentWeather3.append(fdate);
    currentWeather3.append(futureTemp);
    currentWeather3.append(fwind);
    currentWeather3.append(fhumid);
    display5Day3(data)
    }

    function display5Day3(data){
  
      let fdate = document.createElement("h3");
      fdate.innerText = convertTimestamp(data.daily[2].dt);
      let futureTemp = document.createElement("h2");
      let convertTemp = ((data.daily[2].temp.day -273.15)*1.8)+32;
      futureTemp.innerText = "Temp: " + convertTemp.toFixed(0) + "\xB0" + "F";
      let fwind = document.createElement("h2");
      fwind.innerText = "Wind: " + data.daily[2].wind_speed + " MPH";
      let fhumid = document.createElement("h2");
      fhumid.innerText = "Humidity: " + data.daily[2].humidity + " %";
      currentWeather4.append(fdate);
      currentWeather4.append(futureTemp);
      currentWeather4.append(fwind);
      currentWeather4.append(fhumid);
      display5Day4(data)
      }
      function display5Day4(data){
  
        let fdate = document.createElement("h3");
        fdate.innerText = convertTimestamp(data.daily[3].dt);
        let futureTemp = document.createElement("h2");
        let convertTemp = ((data.daily[3].temp.day -273.15)*1.8)+32;
        futureTemp.innerText = "Temp: " + convertTemp.toFixed(0) + "\xB0" + "F";
        let fwind = document.createElement("h2");
        fwind.innerText = "Wind: " + data.daily[3].wind_speed + " MPH";
        let fhumid = document.createElement("h2");
        fhumid.innerText = "Humidity: " + data.daily[3].humidity + " %";
        currentWeather5.append(fdate);
        currentWeather5.append(futureTemp);
        currentWeather5.append(fwind);
        currentWeather5.append(fhumid);
        display5Day5(data)
        }

        function display5Day5(data){
  
          let fdate = document.createElement("h3");
          fdate.innerText = convertTimestamp(data.daily[4].dt);
          let futureTemp = document.createElement("h2");
          let convertTemp = ((data.daily[4].temp.day -273.15)*1.8)+32;
          futureTemp.innerText = "Temp: " + convertTemp.toFixed(0) + "\xB0" + "F";
          let fwind = document.createElement("h2");
          fwind.innerText = "Wind: " + data.daily[4].wind_speed + " MPH";
          let fhumid = "Humidity: " + document.createElement("h2");
          fhumid.innerText = "Humidity: " + data.daily[4].humidity + " %";
          currentWeather6.append(fdate);
          currentWeather6.append(futureTemp);
          currentWeather6.append(fwind);
          currentWeather6.append(fhumid);
          }


          //Timestamp to Date Converter
function convertTimestamp(timestamp) {
  var d = new Date(timestamp * 1000), // Convert the passed timestamp to milliseconds
      yyyy = d.getFullYear(),
      mm = ('0' + (d.getMonth() + 1)).slice(-2),  // Months are zero based. Add leading 0.
      dd = ('0' + d.getDate()).slice(-2),         // Add leading 0.
      hh = d.getHours(),
      h = hh,
      min = ('0' + d.getMinutes()).slice(-2),     // Add leading 0.
      ampm = 'AM',
      time;

  if (hh > 12) {
      h = hh - 12;
      ampm = 'PM';
  } else if (hh === 12) {
      h = 12;
      ampm = 'PM';
  } else if (hh == 0) {
      h = 12;
  }

  // ie: 2014-03-24, 3:00 PM
  time = mm + '/' + dd + '/' + yyyy;
  return time;
}

submit.addEventListener("click", grabText)

