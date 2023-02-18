function updateTime(){
//Los Angeles
let losAngelesElement = document.querySelector("#los-angeles");
if (losAngelesElement) {
let losAngelesDateElement = losAngelesElement.querySelector(".date");
let losAngelesTimeElement = losAngelesElement.querySelector(".time");
let losAngelesDateTime = moment().tz("America/Los_Angeles");
losAngelesDateElement.innerHTML = losAngelesDateTime.format("MMMM Do YYYY");
losAngelesTimeElement.innerHTML = losAngelesDateTime.format("h:mm:ss [<small>]A[</small>]");
}

//Paris
let parisElement = document.querySelector("#paris");
if (parisElement) {
let parisDateElement = parisElement.querySelector(".date");
let parisTimeElement = parisElement.querySelector(".time");
let parisDateTime = moment().tz("Europe/Paris");
parisDateElement.innerHTML = parisDateTime.format("MMMM Do YYYY");
parisTimeElement.innerHTML = parisDateTime.format("h:mm:ss [<small>]A[</small>]");
}
//Tijuana
let tijuanaElement = document.querySelector("#tijuana");
if (tijuanaElement) {
let tijuanaDateElement = tijuanaElement.querySelector(".date");
let tijuanaTimeElement = tijuanaElement.querySelector(".time");
let tijuanaDateTime = moment().tz("America/Tijuana");
tijuanaDateElement.innerHTML = tijuanaDateTime.format("MMMM Do YYYY");
tijuanaTimeElement.innerHTML = tijuanaDateTime.format("h:mm:ss [<small>]A[</small>]");
}
//Montreal
let montrealElement = document.querySelector("#montreal");
if (montrealElement) {
let montrealDateElement = montrealElement.querySelector(".date");
let montrealTimeElement = montrealElement.querySelector(".time");
let montrealDateTime = moment().tz("America/Montreal");
montrealDateElement.innerHTML = montrealDateTime.format("MMMM Do YYYY");
montrealTimeElement.innerHTML = montrealDateTime.format("h:mm:ss [<small>]A[</small>]");
}
//Dubai
let dubaiElement = document.querySelector("#dubai");
if (dubaiElement) {
let dubaiDateElement = dubaiElement.querySelector(".date");
let dubaiTimeElement = dubaiElement.querySelector(".time");
let dubaiDateTime = moment().tz("Asia/Dubai");
dubaiDateElement.innerHTML = dubaiDateTime.format("MMMM Do YYYY");
dubaiTimeElement.innerHTML = dubaiDateTime.format("h:mm:ss [<small>]A[</small>]");
}
}

function updateCity(event) {
   let cityTimeZone = event.target.value;
   if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess(); 
   }
   let cityName = cityTimeZone.replace("_", " ").split("/")[1];
   let cityTime = moment().tz(cityTimeZone);
   let citiesElement = document.querySelector("#cities");
   citiesElement.innerHTML = `
   <div class="city">
        <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format("h:mm:ss [<small>]A[</small>]")}
        </div>
    </div>
    <a href="index.html">Back to cities</a>
   `;
   
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);