const apiKey = "4ce3469635c00f375a5a7c333fc7192f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city){
    const response = await fetch(apiUrl + city+ `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);

    if(response.status == 404){
        document.querySelector(".weather").style.display = "none";
        document.querySelector(".error p").style.display = "block";
    }
    else{
        document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";
    document.querySelector(".main").innerHTML = data.weather[0].main;
    // document.querySelector(".minmax").innerHTML = "min : "+data.main.temp_min+"°C" + "  max : "+data.main.temp_max+"°C";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png"
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png"
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png"
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png"
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png"
    }
    else if(data.weather[0].main == "Haze"){
        weatherIcon.src = "images/Haze.svg"
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error p").style.display = "none";
    }

    
    
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value)
})

