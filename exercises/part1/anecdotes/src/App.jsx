import { useState } from 'react'

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const App = () => {
  // items
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const votesList = Array(anecdotes.length).fill(0)

  // set states
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(votesList)

  const handleNextAnecdote = () => {
    // get one anecdote for the next one by random
    const nextAnecdote = Math.floor(Math.random() * anecdotes.length)

    // set it as next anecdote
    setSelected(nextAnecdote)
  }

  const handleVotes = () => {
    // copy new array of votes first
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)
  }

  // store top voted anecdote
  const topVotedAnecdote = votes.indexOf(Math.max(...votes))

  return (
    <div>
      <div>
        <h1>Anecdote of the day</h1>
        <p>{anecdotes[selected]}</p>
        <p>has {votes[selected]} votes</p>
        <Button onClick={handleNextAnecdote} text='next anecdote'/>
        <Button onClick={handleVotes} text='vote' />
      </div>
      <div>
        <h1>Anecdote with most votes</h1>
        <p>{anecdotes[topVotedAnecdote]}</p>
        <p>has {votes[topVotedAnecdote]} votes</p>
      </div>
    </div>
  )
}

export default App