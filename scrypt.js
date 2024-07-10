//time

let date = document.getElementById('date');
let month = document.getElementById('month');
let year = document.getElementById('year');

let currentTime = new Date();
date.textContent = currentTime.getDate();
month.textContent = "0" + (currentTime.getMonth()+1);
year.textContent = currentTime.getFullYear();

//local

window.onload = function () {
	const o = ymaps.geolocation;
	document.getElementById("local").innerHTML = o.city;
}