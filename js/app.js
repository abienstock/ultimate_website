myMap = function(){
    var myLatLng = {lat: 40.872454, lng: -73.915710};
    var mapOptions = {
	center: myLatLng,
	zoom: 14,
	mapTypeId: google.maps.MapTypeId.MAP
    }
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    var marker = new google.maps.Marker({
	    position: myLatLng,
	    map: map,
	    title: 'Baker Athletic Complex'
	});
}
$(document).ready(function() {
	myMap();
})