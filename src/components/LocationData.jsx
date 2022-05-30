import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getWeather } from "../api/get-weather";
import CloudLoader from "./CloudLoader";
import HomePage from "./HomePage";
import LocationInfo from "./LocationInfo";

const LocationData = ({value, isEmpty}) => {
    const [country, setCountry] = useState(); 
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState(false);    

    useEffect(() => {
      setError(false);
      value 
      ? getWeather(value)
          .then(response => {
          setLoader(true);
          if(response.status === 200){
            setError(false);
            setCountry(response);
            setLoader(false);
          }
        })
        .catch(() => {
          setTimeout(() => {
            setError(true);
            setLoader(false);
          }, 2000);
          setCountry(undefined)
          setLoader(true);
        })

      : setError(false)
    }, [value])

    if(!isEmpty)
      {
        return (
          <>
          {country && <LocationInfo country={country}/>}
          {error && <div>NO ENCONTRAMOS UNA POLLA</div>}
          {loader && <CloudLoader/>}
          </>
          )
      }
      else{
        return <HomePage/>
      }
}

export default LocationData;