import { useSelector, useDispatch } from "react-redux";
import { giveVote } from "../reducers/anecdoteReducer";
import { setNotification } from "../reducers/notificationReducer";

const Anecdote = ({ anecdote, handleClick }) => {
    return(
        <li>
            <div>
                {anecdote.content}
            </div>
            <div>
                has {anecdote.votes}
                <button onClick={handleClick}>vote</button>
            </div>
        </li>
    )
}
 
const Anecdotes = () => {
    const dispatch = useDispatch()
    const anecdotes = useSelector(({ filter, anecdotes }) => {
        if (filter === '') {
            return anecdotes
        }
        return anecdotes.filter(a => a.content.includes(filter))
    })

    const handleClick = (anecdote) => {
        dispatch(giveVote(anecdote))
        dispatch(setNotification(`You liked '${anecdote.content}'`, 5))
    }

    return (
        <ul>
            {anecdotes.map(anecdote => 
                <Anecdote
                    key={anecdote.id}
                    anecdote={anecdote}
                    handleClick={() => handleClick(anecdote)}
                />  
            )}
        </ul>
    )
}

export default Anecdotes