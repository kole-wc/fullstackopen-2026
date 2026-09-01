import { useState, useEffect } from 'react'
import weatherService from '../services/weather'

const Country = ({ country }) => {
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    const [lat, lon] = country.capitalInfo.latlng
    weatherService
      .getWeather(lat, lon)
      .then(returnedWeatherData => {
        setWeather(returnedWeatherData)
      })
  }, [country])

  return (
    <div>
      <div>
        <h1>{country.name.common}</h1>
        Capital {country.capital[0]}
        <br />
        Area {country.area}
        <h2>Languages</h2>
        <ul>
          {Object.values(country.languages).map(lang =>
            <li key={lang}>{lang}</li>
          )}
        </ul>
        <img src={country.flags.png} alt={country.flags.alt} />
      </div>
      <div>
        <h2>Weather in {country.name.common}</h2>
        {weather && <p>Temperature {weather.main.temp} celsius</p>}
        {weather && <img src={`https://openweathermap.org/payload/api/media/file/${weather.weather[0].icon}.png`}/>}
        {weather && <p>Wind {weather.wind.speed} m/s</p>}
      </div>
    </div>
  )
}

export default Country