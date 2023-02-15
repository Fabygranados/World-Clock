function updateTime(){
//Los Angeles
let losAngelesElement = document.querySelector("#los-angeles");
let losAngelesDateElement = losAngelesElement.querySelector(".date");
let losAngelesTimeElement = losAngelesElement.querySelector(".time");
let losAngelesDateTime = moment().tz("America/Los_Angeles");
losAngelesDateElement.innerHTML = losAngelesDateTime.format("MMMM Do YYYY");
losAngelesTimeElement.innerHTML = losAngelesDateTime.format("h:mm:ss [<small>]A[</small>]");

//Paris
let parisElement = document.querySelector("#paris");
let parisDateElement = parisElement.querySelector(".date");
let parisTimeElement = parisElement.querySelector(".time");
let parisDateTime = moment().tz("Europe/Paris");
parisDateElement.innerHTML = parisDateTime.format("MMMM Do YYYY");
parisTimeElement.innerHTML = parisDateTime.format("h:mm:ss [<small>]A[</small>]");
}
updateTime();
setInterval(updateTime, 1000);