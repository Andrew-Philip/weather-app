const Forecast = ({country, el}) => {
    const { weather } = country;

    let countryData = []
    for(let i = 0; i <= 2; i++){
        countryData.push(
            <div>
                <p>{weather.forecastday[i].date}</p>
                <p>{weather.forecastday[i].day.mintemp_c}</p>
            </div>
        )
    }
    
    return (
        <>
            {countryData.map((el, index) => {
                return (
                    <div key={index}>
                        {el}
                    </div>
                )
            })}
        </>
    )
    
}

export default Forecast;