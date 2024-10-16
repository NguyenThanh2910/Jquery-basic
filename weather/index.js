
const DEFAULT_VALUE='--';
const searchInput=document.querySelector("#search-Input");
const cityName=document.querySelector(".city-name");
const timeCity=document.querySelector(".time-city");
const temperature=document.querySelector(".temperature");
const status=document.querySelector(".status");
const weather_icon=document.querySelector(".weather-icon");
const wind=document.querySelector(".wind");
const humidity=document.querySelector(".humidity");


searchInput.addEventListener('change', (e)=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&units=metric&lang=vi&appid=1a829827882f153ee20946c06bb7bbf4 `)
    .then(async res=>{
        const data =await res.json();
        console.log('[Search Input]',data);
        cityName.innerHTML=data.name || DEFAULT_VALUE;
        status.innerHTML=data.weather[0].description || DEFAULT_VALUE;
        weather_icon.setAttribute('src', ` https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`) || DEFAULT_VALUE;
        temperature.innerHTML=Math.round(data.main.temp)|| DEFAULT_VALUE;
        humidity.innerHTML=data.main.humidity || DEFAULT_VALUE;
        wind.innerHTML=(data.wind.speed*3.6).toFixed(2) || DEFAULT_VALUE;

    })
});