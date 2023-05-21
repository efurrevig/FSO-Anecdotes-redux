import { useEffect } from 'react'
import Anecdotes from './components/AnecdoteList'
import NewAnecdote from './components/NewAnecdote'
import AnecdoteFilter from './components/AnecdoteFilter'
import Notification from './components/Notification'
import { initializeAnecdotes } from './reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeAnecdotes())
  }, [dispatch])

  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <AnecdoteFilter />
      <Anecdotes />
      <NewAnecdote />
    </div>
  )
}

export default App