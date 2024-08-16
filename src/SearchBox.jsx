import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css'
import InfoBox from './InfoBox';

function SearchBox() {
    let [city, setCity] = useState("");
    let [active, setActive] = useState(false);
    let [data,setData] = useState({});
    const URL = "https://api.openweathermap.org/data/2.5/weather"
    const API_KEY = "3303b60917732aa520ca1e718def425d";

    let getWeatherInfo = async function(){
        let response = await fetch(`${URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let respJson = await response.json();
        console.log(respJson);
        let res = {
            city : city,
            feels_like: respJson.main.feels_like,
            humidity : respJson.main.humidity,
            temp : respJson.main.temp,
            temp_max : respJson.main.temp_max,
            temp_min : respJson.main.temp_min,
            weather : respJson.weather[0].description,
            windspeed : respJson.wind.speed,
        }
        setData(res)
        console.log(res);
    }
    let handleSubmit = function(e) {
        e.preventDefault();
        console.log(city);
        getWeatherInfo();
        setActive(true);
        setCity('');
    }
  return (
    <div>

    <div className='Searchbox'>
        <form onSubmit={handleSubmit}>
        <TextField style = {{backgroundColor:"wheat", borderRadius:"10px"}}id="outlined-basic" label="City" required variant="outlined"  value={city} onChange={(e) => {setCity(e.target.value)}}/>
        <br /><br ></br>
        <Button variant="contained" type='submit'> Search</Button>
        </form>
    </div>
        {active && <InfoBox data = {data}/>}
    </div>
  )
}

export default SearchBox