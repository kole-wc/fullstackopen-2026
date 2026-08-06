import { useState, useEffect } from 'react'
import countryService from './services/countries'
import Countries from './components/Countries'

const App = () => {
  const [search, setSearch] = useState('')
  const [countries, setCountries] = useState([])

  useEffect(() => {
    countryService
      .getCountries()
      .then(returnedCountries => {
        setCountries(returnedCountries)
      })
  }, [])

  const handleChange = (event) => {
    setSearch(event.target.value)
  }

  const filteredCountries = countries.filter(country => country.name.common.toLowerCase().includes(search.toLowerCase())) 

  return (
    <div>
      find countries <input value={search} onChange={handleChange} />
      {search && <Countries countries={filteredCountries} />}
    </div>
  )
}

export default App
