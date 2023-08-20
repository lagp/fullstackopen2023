import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const handleVoteClick = () => {
    const newVotes = [...votes]

    newVotes[selected] += 1
    
    setVotes(newVotes)
  }

  const handleNextAnecdotesClick = () => {
    const index = Math.floor(Math.random() * anecdotes.length);
    setSelected(index)
  }

  let max = votes[0]
  let index = 0
  for (let i = 0; i < votes.length; i++) {
    if (votes[i] > max) {
      max = votes[i]
      index = i
    }
  }

  let mostVotedAnecdote = <></>;

  if (max > 0) {
    mostVotedAnecdote = <>
      <h1>Anecdote with most votes</h1>
      {anecdotes[index]}
      <br />
      hash {max} votes
    </>
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {props.anecdotes[selected]}
      <br />
      has {votes[selected]} votes
      <p>
        <button onClick={handleVoteClick}>vote</button>
        <button onClick={handleNextAnecdotesClick}>next anecdotes</button>
      </p>
      {mostVotedAnecdote}
    </div>
  )

}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the [first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App anecdotes={anecdotes} />);

