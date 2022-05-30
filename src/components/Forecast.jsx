import React, {useState} from 'react'
import forecastCSS from '../static/Forecast.module.css'
import { MdDateRange } from 'react-icons/md'
import { FaCloudMoon, FaCloudSun } from 'react-icons/fa';
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai';

const Forecast = ({country, el}) => {
    const { weather } = country;
    const [slideIndex, setSlideIndex] = useState(1);

    let countryData = []
    for(let i = 0; i <= 2; i++){
        countryData.push(
            <div>
                <div className={forecastCSS.dateContainer}>
                    <MdDateRange className={forecastCSS.iconDate}/>
                    <p className={forecastCSS.currentDate}>{weather.forecastday[i].date}</p>
                </div>

                <div className={forecastCSS.forecastHours}>
                    {weather.forecastday[i].hour.map((hours, index) => {
                        return (
                            <div className={forecastCSS.hourContainer} key={index}>
                                <div>
                                    {hours.is_day 
                                    ? <FaCloudSun className={forecastCSS.dayIcon}/>
                                    : <FaCloudMoon className={forecastCSS.nightIcon}/>}
                                </div>
                                <img className={forecastCSS.hourlyIcon} src={hours.condition.icon}></img>
                                <div className={forecastCSS.adtionalData}>
                                    <span>{hours.condition.text}</span>
                                    <span>{hours.time.slice(10)}</span>
                                    <span>{hours.temp_c}°C {hours.temp_f}°F</span>
                                </div>
                            </div>
                        ) 
                    })}
                </div>             
            </div>
        )    
    }

    const nextSlide = () => {
        if(slideIndex !== countryData.length){
            setSlideIndex(slideIndex + 1);
        }
        else if(slideIndex === countryData.length)
        {
            setSlideIndex(1);
        }
    }

    const previousSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1);
        }
        else if(slideIndex === 1)
        {
            setSlideIndex(countryData.length);
        }
    }

    return (
        <div className={forecastCSS.containerSlider}>
            <div className={forecastCSS.buttonsContainer}>
                <button onClick={previousSlide}><AiOutlineArrowLeft className={forecastCSS.btnText}/></button>
                <button onClick={nextSlide}><AiOutlineArrowRight className={forecastCSS.btnText}/></button>
            </div>
            {countryData.map((location, index) => {
                return (
                    <div key={index} className={slideIndex === index + 1 ? forecastCSS.activeAnim : forecastCSS.slide}>
                        <div className={forecastCSS.forecast}>
                            {location}
                        </div>
                    </div>
                )
            })}
        </div>
    )
    
}

export default Forecast;