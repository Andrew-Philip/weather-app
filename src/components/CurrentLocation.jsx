import { useEffect, useState } from "react";
import { getWeather } from "../api/get-weather";
import { getGeolocation } from "../services/getGeolocation";
import CloudLoader from "./CloudLoader";
import LocationInfo from "./LocationInfo";

const CurrentLocation = () => {
    const [country, setCountry] = useState();
    const [coords, setCoords] = useState();
    
    getGeolocation()
    .then(response => setCoords(response))
    .catch(() => {
        setCoords('48.8567,2.3508');
    })

    useEffect(() => {
        (async() => {
            if(coords !== undefined){
                const location = await getWeather(coords);
                setCountry(location);
            }
            else
            {
                return;
            }
        })()
    }, [coords]);
    
    return (
        <>
            {country 
            ?   <LocationInfo country={country} />
            :  <><CloudLoader/></>}            
        </>
    );
}

export default CurrentLocation;
