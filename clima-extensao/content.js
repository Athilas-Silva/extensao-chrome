fetch("http://api.openweathermap.org/data/2.5/weather?units=metric&q=S%C3%A3o%20Paulo&appid=11068e38ca27f86c4e6e5d706f572029")
.then(response => response.json())
.then(data => {
    const clima = document.getElementById("cidade");
    clima.innerHTML = (data.name)

    const clima2 = document.getElementById("temp-min")
    clima2.innerHTML = (data.main.temp_min)

    const clima3 = document.getElementById("temp-max")
    clima3.innerHTML = (data.main.temp_max)

    const clima4 = document.getElementById("temp")
    clima4.innerHTML =(data.main.temp)

    const clima5 = document.getElementById("termica")
    clima5.innerHTML = (data.main.feels_like)

    console.log(data)
})