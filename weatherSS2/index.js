$(document).ready(function () {
    const APIKey = "1a829827882f153ee20946c06bb7bbf4";
  
    $(".search").on("click", function () {
      const city = $(".input-city").val();
  
      if (city === "") return;
  
      $.ajax({
        url: `https://api.openweathermap.org/data/2.5/weather`,
        type: "GET",
        data: {
          q: city,
          units: "metric",
          lang: "vi",
          appid: APIKey
        },
        success: function (json) {
  
          const image = $(".img-weather");
          const temperature = $(".temperature");
          const description = $(".description");
          const humidity = $(".humidity");
          const wind = $(".wind");
  
          switch (json.weather[0].main) {
            case "Clear":
              image.attr("src", "./images/clear.png");
              $('body').css('background-image', 'url(./images/bg-clear.jpg)');
              break;
            case "Snow":
              image.attr("src", "./images/snow.png");
              $('body').css('background-image', 'url(./images/bg-snow.jpg)');
              break;
            case "Clouds":
              image.attr("src", "./images/cloud.png");
              $('body').css('background-image', 'url(./images/bg-cloud.jpg)');
              break;
            case "Mist":
              image.attr("src", "./images/mist.png");
              $('body').css('background-image', 'url(./images/bg-mist.jpg)');
              break;
            case "Rain":
              image.attr("src", "./images/rain.png");
              $('body').css('background-image', 'url(./images/bg-rain.jpg)');
              break;
            case "Thunderstorm":
              image.attr("src", "./images/rain.png");
              $('body').css('background-image', 'url(./images/bg-rain.jpg)');
              break;
            default:
              image.attr("src", "./images/cloud.png");
              $('body').css('background-image', 'url(./images/background.jpg)');
          }
  
          temperature.html(`${parseInt(json.main.temp)}`);
          description.html(`${json.weather[0].description}`);
          humidity.html(`${json.main.humidity}%`);
          const windSpeedCmPerS = Math.round(json.wind.speed * 100); 
          const windSpeedKmh = Math.round(windSpeedCmPerS * 0.036);
          wind.html(`${parseInt(windSpeedKmh)} km/h`);
        }
      });
    });
  });
  