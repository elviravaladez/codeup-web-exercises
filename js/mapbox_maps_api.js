
mapboxgl.accessToken = mapboxToken;


var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/navigation-preview-night-v4', // stylesheet location
    center: [-98.4916, 29.4252], // starting position [lng, lat]
    zoom: 15 // starting zoom
});


//Map of SATX
// geocode("San Antonio, TX", mapboxToken).then(function(result) {
// 	console.log(result);
// 	map.setCenter(result);
// 	map.setZoom(10);
// });

//Refactor your code to display at least three of your favorite restaurants with information about each. Create an array of objects with information about each restaurant to accomplish this. Use a .forEach() loop rather than a for loop.

var restaurants = [
    {
        name: "Viva Vegeria",
        address: "1422 Nogalitos St. San Antonio, TX 78204"
    },
    {
        name: "Earth Burger",
        address: "Park North Shopping Center 818 NW Loop 410, Bldg. L-7, San Antonio, TX 78216"
    },
    {
        name: "Cinnaholic",
        address: "812 South Alamo Suite 113 San Antonio, TX 78205"
    }
];

restaurants.forEach(function(restaurant){
    geocode(restaurant.address, mapboxToken).then(function(result){
        //rest of body that tells us what to do with the results
        // map.setCenter(result);
        // map.setZoom(10);

        var restaurantPopup = new mapboxgl.Popup()
            .setHTML(restaurant.name);

        new mapboxgl.Marker()
            .setLngLat(result)
            .setPopup(restaurantPopup)
            .addTo(map);
    });
});