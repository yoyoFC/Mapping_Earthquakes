// Create the map object with center and zoom level.
//let map = L.map('mapid').setView([30, 30], 2);

//Second method to replace setView
// Create the map object with a center and zoom level.
//let map = L.map("mapid", {
//  center: [40.7, -94.5],
//  zoom: 4
//});

//Layer 1
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}',{
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
   accessToken: API_KEY
});

//Layer 2
// We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
  Street: streets,
  Dark: dark
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [44.0, -80.0],
  zoom: 2,
  layers: [streets]
})

// Create a style for the lines.
let myStyle = {
  color: "#ffffa1",
  weight: 2
}

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Accessing the airport GeoJSON URL
let torontoData = "https://raw.githubusercontent.com/yoyoFC/Mapping_Earthquakes/main/torontoRoutes.json";

//// Grabbing our GeoJSON data.
//d3.json(airportData).then(function(data) {
//    console.log(data);
//  // Creating a GeoJSON layer with the retrieved data.
//  L.geoJson(data, {
//    color: "#ffffa1",
//    weight: 2,
//    onEachFeature: function(feature,layer){
//        console.log(layer);
//        layer.bindPopup("<h3> Airline: " + feature.properties.name + "</h3> <hr><h3> Destination: "
//        + feature.properties.dst + "</h3>");
//    }
//  }).addTo(map);
//});

// Grabbing our GeoJSON data.
d3.json(torontoData).then(function(data) {
  console.log(data);
// Creating a GeoJSON layer with the retrieved data.
L.geoJson(data, {
  style: myStyle,
  onEachFeature: function(feature,layer){
      console.log(layer);
      layer.bindPopup("<h3> Airline: " + feature.properties.name + "</h3> <hr><h3> Destination: "
      + feature.properties.dst + "</h3>");
  }
}).addTo(map);
});

//streets.addTo(map);