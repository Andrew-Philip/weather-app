const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
		'X-RapidAPI-Key': 'e1dac049ddmshb08a57e74130f9dp1bb914jsna9e5d518ebcb'
	}
};
  
export const getWeather = async(data) => {
	try {
		
		const response = await fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${data}&days=3`, options),
		jsonResponse = await response.json();
	
		const { location, current, forecast } = jsonResponse,
		{ condition, cloud, humidity, feelslike_c, feelslike_f, is_day, precip_mm, precip_in, pressure_mb, pressure_in, temp_c, temp_f, wind_kph, wind_mph, wind_degree } = current,
		{ text, icon } = condition,
		{ forecastday } = forecast,
		{ country, localtime, name, region } = location;

		const weather = {
			//CURRENT
			cloudPercent:cloud,
			weatherCondition:text,
			feelslikeC:feelslike_c,
			feelslikeF:feelslike_f,
			humidity,
			isDay:is_day,
			//Presipitacion en milimetros/pulgadas
			precipMM:precip_mm,
			precipINCH:precip_in,
			//Presion en milibars/pulgadas
			pressureMB:pressure_mb,
			pressureINCH:pressure_in,
			//temperatura en farenheit/centigrados
			tempC:temp_c,
			tempF:temp_f,
			//Velocidad del viento en millas por hora/km por hora
			windMPH:wind_mph,
			windKPH:wind_kph,
			//Direccion del viento en grados
			windDIR:wind_degree,
			
			//FORECAST
			//Arreglo con prediccion de los proximos 3 dias
			forecastday,

			country,
			localtime,
			name,
			region,
		};

		return {
			status: 200,
			weather
		};
	} catch (error) {
		console.log(error)
	}	
}



