
const DEFAULT_VALUE='--';
const searchInput = $("#search-Input");
const cityName = $(".city-name");
const timeCity = $(".time-city");
const temperature = $(".temperature");
const status = $(".status");
const weatherIcon = $(".weather-icon");
const wind = $(".wind");
const humidity = $(".humidity");



searchInput.addEventListener('change', (e)=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&units=metric&lang=vi&appid=1a829827882f153ee20946c06bb7bbf4 `)
    .then(async res=>{
        const data =await res.json();
        console.log('[Search Input]',data);
        cityName.innerHTML=data.name || DEFAULT_VALUE;
        status.innerHTML=data.weather[0].description || DEFAULT_VALUE;
        weatherIcon.setAttribute('src', ` https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`) || DEFAULT_VALUE;
        temperature.innerHTML=Math.round(data.main.temp)|| DEFAULT_VALUE;
        humidity.innerHTML=data.main.humidity || DEFAULT_VALUE;
        wind.innerHTML=(data.wind.speed*3.6).toFixed(2) || DEFAULT_VALUE;

    })
});