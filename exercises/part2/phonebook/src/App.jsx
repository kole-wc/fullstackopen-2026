import { useState, useEffect } from 'react'
import personService from './services/persons'
import Filter from './components/Filter'
import Person from './components/Person'
import PersonForm from './components/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  useEffect(() => {
    personService
    .getAll()
    .then(initialPersons => {
      setPersons(initialPersons)
    })
  }, [])

  const addEntry = (event) => {
    event.preventDefault()

    const newEntry = {
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
      personService
        .create(newEntry)
        .then(returnedEntry => {
          setPersons(persons.concat(returnedEntry))
          setNewName('')
          setNewNumber('')
        })
    }
  }

  const removePerson = (id) => {
    const personToDelete = persons.find(person => person.id === id)

    if (confirm("Are you sure you want to remove the person from phonebook?")) {
      personService
      .remove(id)
      .then(returnedData =>
        setPersons(persons.filter(person => person.id !== id))
      )
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
      {personsToShow.map(person =>
        <Person 
          key={person.id}
          person={person}
          removePerson={() => removePerson(person.id)}
        />
      )}
    </div>
  )
}

export default App
