$(document).ready(function () {
  function getCityInfo(cityName) {
    var apiKey = "e3d698c2298d9ba4bb8bb9f4bda0cb45";
    var currentDayURL =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      cityName +
      "&appid=" +
      apiKey +
      "&units=imperial"
    $.ajax({
      url: currentDayURL,
      method: "GET",
    }).then(function (response) {
      var cityName = $(".cityTitle").text(response.name+" currentdate");
      var Temp = $("#temp").text("Temp: "+response.main.temp+"°F"
      );
    var wind = $("#wind").text("Wind: "+response.wind.speed);

      var lat = response.coord.lat;
      var lon = response.coord.lon;
      var oneCallUrl =
        "https://api.openweathermap.org/data/2.5/onecall?lat=" +
        lat +
        "&lon=" +
        lon +
        "&appid=" +
        apiKey;
      $.ajax({
        url: oneCallUrl,
        method: "GET",
      }).then(function (response) {
        console.log(response);
        var UVIndex = $("#UVIndex").text("UV Index: "+response.current.uvi);
        var humidity = $("#humidity").text("Humidity: "+response.current.humidity);
      });
    });
   } getCityInfo("new orleans");
  
});
