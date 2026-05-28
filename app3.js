//API Calls
let d = document.querySelector("#Data");
let btn = document.querySelector("#btn");

const YOUR_API_KEY = `33851331ccce070c6d41b8949184ac4c`;
const cityname = "q=Vancouver";
const url = `https://api.openweathermap.org/data/2.5/weather?${cityname}&appid=${YOUR_API_KEY}&units=metric`;
let promise = fetch(url);
async function GetWeather(){
    let res = await promise;
    let data = await res.json();
    console.log(data);
    d.innerText = `Temperature in ${data.name} is ${data.main.temp}°C`;
}
btn.addEventListener("click", GetWeather);
