const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '619e4f3facmshb063e44aae9415bp19d493jsn523a6b66b4e8',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
    
};

const getWeather = (city)=>{
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then((response) => {
        console.log(response)
       // cloud_pct.innerHTML = response.cloud_pct
        temp.innerHTML = response.temp
        temp2.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        humidity2.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        wind_speed2.innerHTML = response.wind_speed
        wind_degrees.innerHTML = response.wind_degrees
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
    })
    .catch(err => console.error(err)); 
} 
const submit= document.getElementById('submit');

submit.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather(city.value)
})

const samplecity=['Bangalore','Kolkata','Dehradun','Switzerland']
for(let i=0;i<samplecity.length;i++)
{
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + samplecity[i], options)
    .then(response => response.json())
    .then((response) => {
        console.log(response)
        document.querySelector('tbody').innerHTML += `
        <tr>
        <th scope="row" class="text-start">${samplecity[i]}</th>
        <td>${response.temp}</td>
        <td>${response.cloud_pct}</td>
        <td>${response.feels_like}</td>
        <td>${ response.humidity}</td>
        <td>${response.min_temp}</td>
        <td>${response.max_temp}</td>
        <td>${response.wind_degrees}</td>
        <td>${response.wind_speed}</td>
       
        
      </tr>
    `
    })
    .catch(err => {
        console.error(err)});

} 

getWeather("Delhi")