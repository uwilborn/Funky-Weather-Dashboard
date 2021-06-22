var APIkey = "f3bc0a3c85231ad135e4beb406f8cdc7";
let city;
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIkey;

let userinput = document.getElementById("userinput");
const submit = document.getElementById("submit");

// function containing variable that stores input from the user
function grabText(){
    city = userinput.value;
    alert(city);
    localStorage.setItem("userinput", JSON.stringify(city));
    console.log(city);
}

// function 
function getApi(queryURL) {
    fetch("https//api.openweathermap.org/data/2.5/forecast?id={city ID}&appid={API key}")
      console.log(queryURL)
    }
  
  getApi();

submit.addEventListener("click", grabText)