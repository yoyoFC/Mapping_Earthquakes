// An array containing each city's location, state, and population.
// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([37.6213, -122.3790], 5);

// Get data from cities.js
let cityData = cities;

//*************************************************** 
// Coordinates for each point to be used in the line.

let line = [
   //airports: LAX and SFO
   [33.9416, -118.4085],
   [37.6213, -122.3790],

   //airports: SLC and SEA
   [40.7899, -111.9791],
   [47.4502, -122.3088]
 ];

 // Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
   color: "yellow"
 }).addTo(map);

 //***************************************************

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}',{
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
    //Option for map style : 
    //mapbox/streets-v11
    //mapbox/outdoors-v11
    //mapbox/light-v10
    //mapbox/dark-v10
    //mapbox/satellite-v9
    //mapbox/satellite-streets-v11
});

cityData.forEach(function(city){
    console.log(city)
    L.circleMarker(city.location,{
        radius: city.population/100000,
        color:'black',
        fillColor:'#ffffa1'
    })
    .bindPopup("<h2>" + city.city + "," + city.state + "</h2> <hr> <h3>Population" + city.population.toLocaleString() + "</h3>")
    .addTo(map);
 });

 // Then we add our 'graymap' tile layer to the map.
streets.addTo(map);