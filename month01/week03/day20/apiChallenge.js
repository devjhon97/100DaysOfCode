const apiKey = '66e97ebe08fb974555e8057851b0bd0d';
const res = document.getElementById('resp');
var city;
var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;


async function cityInfo(){
    city = document.getElementById('city').value;
    url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`;

    fetch(url)
    .then(Response => Response.json())
    .then(data => {
        if(data.sys.country === "BR" || data.sys.country === "US" || data.sys.country === "CA"){
            res.innerHTML = `${data.name}-${data.sys.country}<br>Latitude: ${data.coord.lat}<br>Longitude: ${data.coord.lon}<br><br>Tempo: ${parseInt(data.main.temp)+'ºC'}<br>${data.weather[0].description}`;
        }else{
            res.innerHTML = 'Essa cidade não pertence aos paises válidos!';
        }
        console.log(data)
    })
    .catch(err =>{
        res.innerHTML = 'Essa cidade não existe!';
    })
}