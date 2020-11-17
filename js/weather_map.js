$(document).ready(function() {
    "use strict";

    // Ajax Request
    var getOneDayWeather = $.get("http://api.openweathermap.org/data/2.5/weather", {
        APPID: OPEN_WEATHER_APPID,
        lat: 29.423017,
        lon: -98.48527,
        units: "imperial"
    });


    //Add 1 Day Weather Conditions to Webpage
    getOneDayWeather.done(function(weatherConditions) {
        console.log(weatherConditions);
        addOneCardFor(weatherConditions);
    });


    //Function to Add 1 Day Weather Conditions to Webpage
    function addOneCardFor(weatherConditions) {
        var weatherCard = "";
        weatherCard += "<div class='card m-5' style='width: 18rem;'>";
        weatherCard += "<div class='card-header text-center'>" + weatherConditions.dt + "</div>";
        weatherCard += "<ul class='list-group list-group-flush'>";
        weatherCard += "<li class='list-group-item text-center'>";
        weatherCard += "<strong>" + weatherConditions.main.temp_max + "°F / " + weatherConditions.main.temp_min + "°F" + "</strong><br>";
        weatherCard += "<p>" + weatherConditions.weather[0].icon + "</p></li>";
        weatherCard += "<li class='list-group-item'>Description: <strong>" + weatherConditions.weather[0].description + "</strong><br><br>";
        weatherCard += "Humidity: <strong>" + weatherConditions.main.humidity + "</strong></li>";
        weatherCard += "<li class='list-group-item'>Wind: <strong>" + weatherConditions.wind.speed + "</strong></li>";
        weatherCard += "<li class='list-group-item'>Pressure: <strong>" + weatherConditions.main.pressure + "</strong></li>";
        weatherCard += "</ul>";
        weatherCard += "</div>";

        $(".weather-card-container").html(weatherCard);
    }



    //Mapbox Token
    mapboxgl.accessToken = mapboxToken;

    //Customizing the Map
    var mapOptions = {
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
        center: [-98.4916, 29.4252], // starting position [lng, lat]
        zoom: 12 // starting zoom
    }

    var map = new mapboxgl.Map(mapOptions);
});