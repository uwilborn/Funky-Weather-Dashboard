var APIkey = "f3bc0a3c85231ad135e4beb406f8cdc7";

let userinput = document.getElementById("userinput");
const submit = document.getElementById("submit");

// function containing variable that stores input from the user
function grabText(){
    let city = userinput.value;
   
    localStorage.setItem("userinput", JSON.stringify(city));
    console.log(city);
}

// function 
function getApi(city,APIkey) {
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIkey;
    fetch(queryURL).then(function (response) {
                return response.json();
          })
          .then(function (data) {
            console.log(data);
          })};
  
  getApi();

submit.addEventListener("click", grabText)