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

// document.getElementById("iframe").src=`https://maps.google.com/maps/dir/${lat},${lng}/${lng},${lat}&t=&z=15&ie=UTF8&iwloc=&output=embed`
// document.getElementById("iframe").src=`https://www.google.com/maps/dir/${lat},${lng}/${lat},${lng}/@${lat},${lng},17.36z/data=!4m2!4m1!3e2`
}

function showPosition2() {
    const successCallback = (position) => {
        lat2 = position.coords.latitude
        lng2 = position.coords.longitude
        document.getElementById("iframe2").src=`https://maps.google.com/maps?q=${lat2},${lng2}&t=&z=15&ie=UTF8&iwloc=&output=embed`

    };
    
    const errorCallback = (error) => {
        console.log(error);
    };

    const id = navigator.geolocation.watchPosition(successCallback, errorCallback);

}