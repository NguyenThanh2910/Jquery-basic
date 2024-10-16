const DEFAULT_VALUE = '--';
const searchInput = $("#searchInput");
const cityName = $(".city-name");
const timeCity = $(".time-city");
const temperature = $(".temperature");
const status = $(".status");
const weatherIcon = $(".weather-icon");
const wind = $(".wind");
const humidity = $(".humidity");

searchInput.on('change', function(e) {
    const query = e.target.value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&lang=vi&appid=1a829827882f153ee20946c06bb7bbf4`;

    $.ajax({
        url: apiUrl,
        method: 'GET',
        success: function(data) {
            cityName.html(data.name || DEFAULT_VALUE);
            status.html(data.weather[0].description || DEFAULT_VALUE);
            weatherIcon.attr('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`) || DEFAULT_VALUE;
            temperature.html(Math.round(data.main.temp) || DEFAULT_VALUE);
            humidity.html(data.main.humidity || DEFAULT_VALUE);
            wind.html((data.wind.speed * 3.6).toFixed(2) || DEFAULT_VALUE);
        },
        error: function() {
            console.log('Error fetching data');
        }
    });
});
