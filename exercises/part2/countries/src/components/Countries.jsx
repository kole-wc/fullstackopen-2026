import { useState } from 'react'
import Country from './Country'

const Countries = ({ countries }) => {
  const [selected, setSelected] = useState([])

  const toggleSelected = (country) => {
    const isSelected = selected.some(select => select.cca3 === country.cca3)

    if (isSelected) {
      setSelected(selected.filter(select => select.cca3 !== country.cca3))
    } else {
      setSelected(selected.concat(country))
    }
  }

  if (countries.length > 10) {
    return (
      <div>
        <p>Too many matches, specify another filter</p>
      </div>
    )
  }
  else if (countries.length === 1) {
    return (
      <Country country={countries[0]} />
    )
  }
  else {
    return (
      <div>
        {countries.map(country => {
          const isSelected = selected.some(select => select.cca3 === country.cca3)
          return (
            <div key={country.cca3}>
              {country.name.common}<button onClick={() => toggleSelected(country)}>{isSelected ? 'hide' : 'show'}</button>
              {isSelected && <Country country={country} />}
            </div>
          )
        })}
      </div>
    )
  }
}

export default Countries