$(document).ready(function() {
    "use strict";

    //Ajax Request for 5 Day Forecast
    var getFiveDayForecast = $.get("https://api.openweathermap.org/data/2.5/onecall", {
        APPID: OPEN_WEATHER_APPID,
        lat: 29.423017,
        lon: -98.48527,
        units: "imperial",
        exclude: "minutely,hourly,alerts,current"
    });


    //Making 5 Day Forecast Cards
    getFiveDayForecast.done(function(weatherConditions) {
        var daily = weatherConditions.daily;

        for (var i = 0; i < 5; i++) {
            makeCard(daily[i]);
        }
    });


    //Function to Make a Forecast Card
    function makeCard(weatherConditions) {
        var weatherCard = "";

        weatherCard += "<div class='d-inline-block'>"
        weatherCard += "<div class='card m-2' style='width: 18rem;'>";
        weatherCard += "<div class='card-header text-center'>" + weatherConditions.dt + "</div>";
        weatherCard += "<ul class='list-group list-group-flush'>";
        weatherCard += "<li class='list-group-item text-center'>";
        weatherCard += "<strong>" + weatherConditions.temp.max + "°F / " + weatherConditions.temp.min + "°F" + "</strong><br>";
        weatherCard += "<p>" + weatherConditions.weather[0].icon + "</p></li>";
        weatherCard += "<li class='list-group-item'>Description: <strong>" + weatherConditions.weather[0].description + "</strong><br><br>";
        weatherCard += "Humidity: <strong>" + weatherConditions.humidity + "</strong></li>";
        weatherCard += "<li class='list-group-item'>Wind: <strong>" + weatherConditions.wind_speed + "</strong></li>";
        weatherCard += "<li class='list-group-item'>Pressure: <strong>" + weatherConditions.pressure + "</strong></li>";
        weatherCard += "</ul>";
        weatherCard += "</div>";
        weatherCard += "</div>";

        $(".weather-card-container").append(weatherCard);
    }


    /*************** Mapbox JS *****************/

    //Mapbox Token
    mapboxgl.accessToken = mapboxToken;

    //Customizing the Map
    var mapOptions = {
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
        center: [-98.4916, 29.4252], // starting position [lng, lat]
        zoom: 12 // starting zoom
    }

    //Creating the Map
    var map = new mapboxgl.Map(mapOptions);


    //Exercise 6:
    //Refer to your Mapbox API exercise. Recreate the map below your 5 day forecast.
    // Read through the documentation for the Mapbox API and figure out how to allow
    // the user to drop a pin on any place on the map. Once the user drops a pin,
    // grab its coordinates and feed those into your OpenWeatherMap API. Update
    // the five-day forecast with the information from those coordinates
    // (you should also get rid of your input boxes at this point).


    //Exercise 7:
    // Add a Mapbox text input to search by location and have the forecast update when a new location is searched.


    //Exercise 8:
    //As a bonus make sure you can update the marker's position to the new search result.



});