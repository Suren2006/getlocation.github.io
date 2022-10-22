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
// document.getElementById("iframe").src=`https://maps.google.com/maps?q=${lat},${lng}&t=&z=15&ie=UTF8&iwloc=&output=embed`

// document.getElementById("iframe").src=`https://maps.google.com/maps/dir/${lat},${lng}/${lng},${lat}&t=&z=15&ie=UTF8&iwloc=&output=embed`
document.getElementById("iframe").src=`https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d13539.467868559606!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e2!4m3!3m2!1d${lat}!2d${lng}!4m3!3m2!1d40.1245647!2d44.417113199999996!5e1!3m2!1sru!2s!4v1666449694248!5m2!1sru!2s`
}

// function showPosition2() {
//     const successCallback = (position) => {
//         lat2 = position.coords.latitude
//         lng2 = position.coords.longitude
//         document.getElementById("iframe2").src=`https://maps.google.com/maps?q=${lat2},${lng2}&t=&z=15&ie=UTF8&iwloc=&output=embed`

//     };
    
//     const errorCallback = (error) => {
//         console.log(error);
//     };

//     const id = navigator.geolocation.watchPosition(successCallback, errorCallback);

// }