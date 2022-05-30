import Forecast from "./Forecast";
import contentCSS from '../static/Content.module.css'
import forecastCSS from '../static/Forecast.module.css'
import { useState } from "react";
import { HiSwitchVertical } from 'react-icons/hi';
import { GiWorld } from 'react-icons/gi';
import { WiHumidity } from 'react-icons/wi'
import { FcInfo } from 'react-icons/fc'
import { TiWeatherDownpour } from 'react-icons/ti'
import { MdAir } from 'react-icons/md'

const LocationInfo = ({country}) => {
    const { weather } = country;
    const [toggleTemp, setToggleTemp] = useState(false);
    const [togglePress, setTogglePress] = useState(false);
    const [togglePressured, setTogglePressured] = useState(false);
    const [toggleWind, setToggleWind] = useState(false);

    const toggleTemperature = () =>{
        toggleTemp ? setToggleTemp(false) : setToggleTemp(true);
    }

    const togglePressipitation = () =>{
        togglePress ? setTogglePress(false) : setTogglePress(true);
    }

    const togglePressure = () =>{
        togglePressured ? setTogglePressured(false) : setTogglePressured(true);
    }

    const toggleWindAbv = () =>{
        toggleWind ? setToggleWind(false) : setToggleWind(true);
    }

  
    return (
        <>
        <div className={contentCSS.container}>
            <div className={contentCSS.imgData}>
            {weather.isDay
                ?
                <div>
                    <img className={contentCSS.timeImg} src={require("../assets/day-night/day.jpg")}></img>
                </div>
                
                : <div>
                    <img className={contentCSS.timeImg} src={require("../assets/day-night/night.jpg")}></img>
                </div>}
                    <button onClick={toggleTemperature} className={contentCSS.temperatureSwitch}>
                        <HiSwitchVertical className={contentCSS.switchIcon}/>
                            <span className={toggleTemp ? contentCSS.visible : contentCSS.notVisible}>{weather.tempF}°F</span>
                            <span className={toggleTemp ? contentCSS.notVisible : contentCSS.visible}>{weather.tempC}°C</span>
                    </button>
                <div className={contentCSS.conditionContainer}>
                    <div className={contentCSS.iconContainer}>
                        <div className={contentCSS.iconCircle}>
                            <img className={contentCSS.icon} src={weather.icon}></img>
                        </div>
                    </div>
                    <span className={contentCSS.text}>{weather.text}</span>
                </div>
                <span className={contentCSS.timeZone}>{weather.localtime.slice(10)}</span>
                <div className={contentCSS.location}>
                    <div className={contentCSS.countryData}>
                        <span className={contentCSS.countryIcon}>
                            <GiWorld/> 
                        </span>
                        <span className={contentCSS.countryName}>{weather.country}</span>
                    </div>
                    <div className={contentCSS.regionData}>
                        <span>{weather.name}, {weather.region}</span>
                    </div>
                </div>

                <div className={contentCSS.locationData}>
                    
                    <div className={contentCSS.headerContent}>
                        <div className={contentCSS.dataContainer}>
                            <span className={contentCSS.textIndicator}>Humedad</span> 
                            <div className={contentCSS.basicData}>
                                <WiHumidity className={contentCSS.dataIcon}/>
                                <span>{weather.humidity}</span>
                                <FcInfo className={contentCSS.tooltipIconBasic}/>
                            </div>
                        </div>
                        
                        <div className={contentCSS.dataContainer}>
                            <span className={contentCSS.textIndicator}>Se siente como</span> 
                            <div className={contentCSS.basicData}>
                                <span className={contentCSS.principalData}>
                                <WiHumidity className={contentCSS.dataIcon}/>
                                    <span className={contentCSS.feels}>{weather.feelslikeC}°C</span>
                                    <span className={contentCSS.feels}>{weather.feelslikeF}°F</span>
                                </span>
                            </div>
                        </div>

                        <div className={contentCSS.dataContainer}>
                            <span className={contentCSS.textIndicator}>Viento</span> 
                            <div className={contentCSS.basicData}>
                                <WiHumidity className={contentCSS.dataIcon}/>
                                <span>{weather.windDIR}-{weather.windDEGREE}</span>
                                <FcInfo className={contentCSS.tooltipIconBasic}/>
                            </div>
                        </div>

                        <div className={contentCSS.dataContainer}>
                            <span className={contentCSS.textIndicator}>% de nubes</span> 
                            <div className={contentCSS.basicData}>
                                <WiHumidity className={contentCSS.dataIcon}/>
                                <span>{weather.cloudPercent}%</span>
                                <FcInfo className={contentCSS.tooltipIconBasic}/>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className={contentCSS.dataContainerBtn}>
                        <span className={contentCSS.textIndicatorBtn}>Precipitacion</span> 
                        <button onClick={togglePressipitation} className={contentCSS.basicDataPress}>
                            <HiSwitchVertical className={contentCSS.dataSwitch}/>
                            <TiWeatherDownpour className={contentCSS.dataIcon}/>
                            <span className={togglePress ? contentCSS.visible : contentCSS.notVisible}>{weather.precipMM} <span className={contentCSS.equivalent}>milimetros</span></span>
                            <span className={togglePress ? contentCSS.notVisible : contentCSS.visible}>{weather.precipINCH} <span className={contentCSS.equivalent}>pulgadas</span></span>
                            <FcInfo className={contentCSS.tooltipIcon}/>
                        </button>
                    </div>
                    <div className={contentCSS.dataContainerBtn}>
                        <span className={contentCSS.textIndicatorBtn}>Presion</span> 
                        <button onClick={togglePressure} className={contentCSS.basicDataPress}>
                            <HiSwitchVertical className={contentCSS.dataSwitch}/>
                            <MdAir className={contentCSS.dataIcon}/>
                            <span className={togglePressured ? contentCSS.visible : contentCSS.notVisible}>{weather.pressureMB}<span className={contentCSS.equivalent}>milibars</span></span>
                            <span className={togglePressured ? contentCSS.notVisible : contentCSS.visible}>{weather.pressureINCH}<span className={contentCSS.equivalent}>pulgadas</span></span>
                            <FcInfo className={contentCSS.tooltipIcon}/>
                        </button>
                    </div>

                    <div className={contentCSS.dataContainerBtn}>
                        <span className={contentCSS.textIndicatorBtn}>Velocidad del viento</span> 
                        <button onClick={toggleWindAbv} className={contentCSS.basicDataPress}>
                            <HiSwitchVertical className={contentCSS.dataSwitch}/>
                            <MdAir className={contentCSS.dataIcon}/>
                            <span className={toggleWind ? contentCSS.visible : contentCSS.notVisible}>{weather.windMPH}<span className={contentCSS.equivalent}>M/h</span></span>
                            <span className={toggleWind ? contentCSS.notVisible : contentCSS.visible}>{weather.windKPH}<span className={contentCSS.equivalent}>Km/h</span></span>
                            <FcInfo className={contentCSS.tooltipIcon}/>
                        </button>
                    </div>
                </div>   
            </div>
        </div>
        <div className={forecastCSS.forecastContainer}>
                <Forecast country={country}/>
        </div>  
        )
        </>
    );
}

export default LocationInfo;