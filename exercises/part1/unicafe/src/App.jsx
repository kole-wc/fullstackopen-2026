import { useState } from 'react'

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const StatisticLine = ({ text, result }) => {
  return (
    <>
      <td>{text}</td>
      <td>{result}</td>
    </>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad
 
  if (total === 0) {
    return <p>No feedback given</p>
  }

  return (
    <table>
      <tbody>
        <tr><StatisticLine text='good' result={good} /></tr>
        <tr><StatisticLine text='neutral' result={neutral} /></tr>
        <tr><StatisticLine text='bad' result={bad} /></tr>
        <tr><StatisticLine text='all' result={total} /></tr>
        <tr><StatisticLine text='average' result={total === 0 ? 0 : (good - bad) / total} /></tr>
        <tr><StatisticLine text='positive' result={total === 0 ? 0 + ' %' : (good / total) * 100 + ' %'} /></tr>
      </tbody>
    </table>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // functions to handle feedback clicks
  const handleGoodClick = () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <Button onClick={handleGoodClick} text='good' />
        <Button onClick={handleNeutralClick} text='neutral' />
        <Button onClick={handleBadClick} text='bad' />
      </div>
      <h1>statistics</h1>
      <div>
        <Statistics good={good} neutral={neutral} bad={bad} />
      </div>
    </div>
  )
}

export default App