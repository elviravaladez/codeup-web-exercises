$(document).ready(function() {
    "use strict";


    //Using HTML, CSS, jQuery, AJAX, and the OpenWeatherMap API, start by showing the current conditions for the city you live in on your page.

    //AJAX Request
    var getWeather = $.get("http://api.openweathermap.org/data/2.5/weather", {
        APPID: OPEN_WEATHER_APPID,
        q: "San Antonio, US"
    });

    //What do to once AJAX Request is complete
    getWeather.done(function(weatherConditions) {
        console.log(weatherConditions);
        add(weatherConditions);
    });

    //Function to add weather conditions to the page
    function add(weatherConditions) {
        var weatherCard = "";
        weatherCard += "<div class='card' style='width: 18rem;'>";
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

        $(".map-card-container").html(weatherCard);
    }

});