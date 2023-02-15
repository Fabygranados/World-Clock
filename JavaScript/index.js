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
   `
   
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);