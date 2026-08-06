const Countries = ({ countries }) => {
  console.log('Countries component rendered')
  if (countries.length > 10) {
    return (
      <div>
        <p>Too many matches, specify another filter</p>
      </div>
    )
  }
  else if (countries.length === 1) {
    const country = countries[0]
    return (
      <div>
        <h1>{country.name.common}</h1>
        <p>Capital {country.capital[0]}</p>
        <p>Area {country.area}</p>
        <h2>Languages</h2>
        <ul>
          {Object.values(country.languages).map(lang => 
            <li key={lang}>{lang}</li>
          )}
        </ul>
        <img src={country.flags.png} alt={country.flags.alt} />
      </div>
    )
  }
  else {
    console.log(countries)
    return (
      <div>
        {countries.map(country => <p key={country.cca3}>{country.name.common}</p>)}
      </div>
    )
  }
}

export default Countries