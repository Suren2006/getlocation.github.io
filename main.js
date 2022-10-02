// navigator.geolocation.getCurrentPosition(mapgeo);

// // function showgeo(position) {
// //     var x = position.coords.latitude
// //     var y = position.coords.longitude
// //     console.log(x + '\n' + y)
// // }

// function mapgeo(position) {
//     var x = position.coords.latitude
//     var y = position.coords.longitude
//     console.log(x + '\n' + y)
//     return x, y
// }

// function opengooglemap() {    
// }

function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
      document.write("Geolocation is not supported by this browser.");
    }
}
  
  function showPosition(position) {
    var x = position.coords.latitude
    var y = position.coords.longitude
    window.open(`https://www.google.com/maps/@${x},${y},16z`,"_blank")
 }
