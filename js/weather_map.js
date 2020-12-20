$(document).ready(function() {
    "use strict";


    //Displaying the Weather Forecast Initially Displayed on the Webpage
    updateWeather(29.4252,-98.4916);


    //Function to Update the Weather on the Webpage
    function updateWeather(latitude, longitude) {
        //Ajax Request for 5 Day Forecast
        var getFiveDayForecast = $.get("https://api.openweathermap.org/data/2.5/onecall", {
            APPID: OPEN_WEATHER_APPID,
            lat: latitude,
            lon: longitude,
            units: "imperial",
            exclude: "minutely,hourly,alerts,current"
        });

        //Making 5 Day Forecast Cards
        getFiveDayForecast.done(function(weatherConditions) {
            var daily = weatherConditions.daily;
            $(".weather-card-container").html("");

            for (var i = 0; i < 5; i++) {
                makeCard(daily[i]);
            }
        });
    }


    //Function to Make a Forecast Card
    function makeCard(weatherConditions) {
        var weatherCard = "";

        //Converting the Time Stamp Date to a Human Readable Date
        var unixTimeStamp = weatherConditions.dt;
        var milliseconds = unixTimeStamp * 1000;
        var dateObject = new Date(milliseconds);
        var humanDateFormat = dateObject.toLocaleString();
        var date = humanDateFormat.split(",");
        date = date[0];

        //Creating the Forecast Card
        weatherCard += "<div class='d-inline-block'>"
        weatherCard += "<div class='card m-2' style='width: 18rem;'>";
        weatherCard += "<div class='card-header text-center'>" + date + "</div>";
        weatherCard += "<ul class='list-group list-group-flush'>";
        weatherCard += "<li class='list-group-item text-center'>";
        weatherCard += "<strong>" + weatherConditions.temp.max + "°F / " + weatherConditions.temp.min + "°F" + "</strong><br>";
        weatherCard += `<img src='http://openweathermap.org/img/w/${weatherConditions.weather[0].icon}.png' alt='${weatherConditions.weather[0].description} image'>`;
        weatherCard += "<li class='list-group-item'>Description: <strong>" + weatherConditions.weather[0].description + "</strong><br><br>";
        weatherCard += "Humidity: <strong>" + weatherConditions.humidity + "</strong></li>";
        weatherCard += "<li class='list-group-item'>Wind: <strong>" + weatherConditions.wind_speed + "</strong></li>";
        weatherCard += "<li class='list-group-item'>Pressure: <strong>" + weatherConditions.pressure + "</strong></li>";
        weatherCard += "</ul>";
        weatherCard += "</div>";
        weatherCard += "</div>";

        //Adding the Forecast Card to the div with a class of weather-card-container
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


    //Customizing the Marker
    var markerOptions = {
        color: "#ff0000",
        draggable: true
    };

    //Creating the Marker
    var marker = new mapboxgl.Marker(markerOptions)
        .setLngLat([-98.4916, 29.4252])
        .addTo(map);


    //Function to Get Coordinates of the Draggable Marker and Use Those Coordinates Within the updateWeather Function
    function onDragEnd() {
        var lngLat = marker.getLngLat();
        updateWeather(lngLat.lat, lngLat.lng);
        reverseGeocode({lng: lngLat.lng, lat: lngLat.lat}, mapboxToken).then(function(data){
            $('#city').html(data);
        });
    }

    marker.on('dragend', onDragEnd);


    //Exercise 7:
    // Add a Mapbox text input to search by location and have the forecast update when a new location is searched.

    //Mapbox Text Input
    var geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
        marker: false
    });

    map.addControl(geocoder);

    //Exercise 8:
    //As a bonus make sure you can update the marker's position to the new search result.
    geocoder.on("result", function(result){
        marker.remove();
        var long = result.result.geometry.coordinates[0];
        var lat = result.result.geometry.coordinates[1];
        marker = new mapboxgl.Marker(markerOptions)
            .setLngLat([long, lat])
            .addTo(map);
        marker.on('dragend', onDragEnd);

        reverseGeocode({lng: long, lat: lat}, mapboxToken).then(function(data){
            $('#city').html(data);
        });

        updateWeather(lat, long);
    });


    //Updating the location in the Navbar
    function reverseGeocode(coordinates, token) {
        var baseUrl = 'https://api.mapbox.com';
        var endPoint = '/geocoding/v5/mapbox.places/';
        return fetch(baseUrl + endPoint + coordinates.lng + "," + coordinates.lat + '.json' + "?" + 'access_token=' + token)
            .then(function(res) {
                return res.json();
            })
            // to get all the data from the request, comment out the following three lines...
            .then(function(data) {
                return data.features[1].place_name;
            });
    }


});