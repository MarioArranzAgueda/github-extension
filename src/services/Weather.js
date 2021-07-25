const getWeather = async (city = 'Madrid') => {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER}&units=metric`)
    return data.json();

}

export default getWeather;