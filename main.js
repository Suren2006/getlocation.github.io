function getLocation() {
if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition(showPosition);
} else { 
document.write("Geolocation is not supported by this browser.");
}
}

function showPosition(position) {
var lat = position.coords.latitude
var lng = position.coords.longitude
document.getElementById("iframe").src=`https://maps.google.com/maps?q=${lat},${lng}&t=&z=15&ie=UTF8&iwloc=&output=embed`
document.getElementById("iframe").style = "display:block"
}


