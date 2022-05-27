import Forecast from "./Forecast";
import contentCSS from '../static/Content.module.css'

const LocationInfo = ({country}) => {
    const { weather } = country;

    return (
        <div className={contentCSS.container}>
            Temperatura en celcius/farenheits: 
            <p>{weather.tempC}°C</p>
            <p>{weather.tempF}°F</p>
            <hr/>
            <p>{weather.humidity} humidity</p>
            <p>country: {weather.country}</p>
            <p>name: {weather.name}</p>
            <p>region: {weather.region}</p>
            {weather.isDay
            ? <>its day</>
            : <>its night <img src={weather.conditionIcon}></img></>}
            
            <hr/>
            DETALLES:
            Presion en milibars/pulgadas:
            <p>{weather.precipMM} milimeters</p>
            <p>{weather.precipINCH} inches</p>
            <hr/>
            <p>{weather.pressureMB} milibars</p>
            <p>{weather.pressureINCH} inches</p>
            <hr/>

            <Forecast country={country}/>
            
            
            )
            
        </div>
    );
}

export default LocationInfo;