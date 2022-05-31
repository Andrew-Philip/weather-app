import { useEffect, useState } from "react";
import '../static/NotFound.css'
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
          {error && 
            <div className="container">
              <img className="error" src={require("../assets/not-found.png")} alt="" />
            </div>}
          {loader && <CloudLoader/>}
          </>
          )
      }
      else{
        return <HomePage/>
      }
}

export default LocationData;