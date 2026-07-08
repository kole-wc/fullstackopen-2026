import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios
    .get('http://localhost:3001/persons')
    .then(response => {
      setPersons(response.data)
    })
  }, [])

  const addEntry = (event) => {
    event.preventDefault()

    const newEntry = {
      id: persons.length + 1,
      name: newName,
      number: newNumber
    }

    // find the person from the input that exists in the phonebook
    const personFound = persons.find(person => person.name === newName)
    const numberFound = persons.find(person => person.number === newNumber)
    // trigger alert message if person/number is found, otherwise add the person to phonebook
    if (personFound) {
      alert(`${personFound.name} is already in the phonebook`)
    } else if (numberFound) {
      alert(`${numberFound.number} is already in the phonebook`)
    } else {
      setPersons(persons.concat(newEntry))
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchChange = (event) => {
    setSearch(event.target.value)

  }

  const personsToShow = persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleSearchChange={handleSearchChange} />
      <h2>add a new</h2>
      <PersonForm addEntry={addEntry} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} />
    </div>
  )
}

export default App
