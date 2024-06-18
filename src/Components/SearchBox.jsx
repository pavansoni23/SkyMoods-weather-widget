import './SearchBox.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useState } from 'react';

export default function SearchBox({updateInfo}) {
    let [city , setCity] = useState("");

    const url = "https://api.openweathermap.org/data/2.5/weather";
    const apiKey = "b839fcebc28b573807b14ad5d751cb58";

    let getWeatherInfo = async () => {
        let res = await fetch(`${url}?q=${city}&appid=${apiKey}&units=metric`);
        let resJson = await res.json();

        // console.log(resJson);

        let result = {
            city : city,
            temp : resJson.main.temp,
            minTemp : resJson.main.temp_min,
            maxTemp : resJson.main.temp_max,
            humidity : resJson.main.humidity,
            feelsLike: resJson.main.feels_like, 
            weather : resJson.weather[0].description,
        }

        console.log(result);

        return result;
    }


    let handelCity = (event) => {
        setCity(event.target.value);
    }

    let handelSubmit = async (event) => {
        event.preventDefault();
        console.log(city);
        setCity("");
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
    }

    return (
        <div className="SearchBox">
            <form onSubmit={handelSubmit}>
                <h1>SkyMoods</h1>
                <TextField id="city" label="city/country name" variant="standard" value={city} onChange={handelCity} required /> <br /> <br />
                <Button type='submit' variant="contained" startIcon={<SearchOutlinedIcon />} onClick={handelSubmit}>Search</Button>
            </form>
        </div>
    );
}