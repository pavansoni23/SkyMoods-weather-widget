import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
    let [weatherInfo , setWeatherInfo] = useState({});

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
        <>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox weatherInfo={weatherInfo} />
        </>
    );
}