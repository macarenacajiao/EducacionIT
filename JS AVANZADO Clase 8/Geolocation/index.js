/*Geolocation*/
if(window.navigator.geolocation){
    navigator.geolocation.getCurrentPosition(showPos);
    navigator.geolocation.watchPosition(showPos);
}

function showPos(pos){
 console.log("GPS",pos.coords);
}