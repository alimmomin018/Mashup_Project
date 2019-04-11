var map1, map2, map3;
            
function initialize() {
    // create the maps
    var myOptions = {
        zoom: 1,
        center:new google.maps.LatLng(40.758904,-73.985128)
        
    }
    map1 = new google.maps.Map(document.getElementById("map_canvas1"), myOptions);

    map2 = new google.maps.Map(document.getElementById("map_canvas2"), myOptions);
    map3 = new google.maps.Map(document.getElementById("map_canvas3"), myOptions);
    
}
google.maps.event.addDomListener(window,'load',initialize);