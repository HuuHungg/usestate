import { useReducer, useRef, } from 'react' 
import reducer, {initState} from './reducer'
import {setJob, addJob, delete_job} from './actions'
import logger from './logger'

function App() {  
  
  let [state, dispatch] = useReducer(logger(reducer), initState)
  const {job, jobs} = state

  let inputRef = useRef()

  let handleSubmit = () => {
        dispatch(addJob(job))
        dispatch(setJob(''))
        
        inputRef.current.focus()
  }

  return (
      <div style={{padding: '20px'}}>
          <h3>ボタンを直す</h3>
          <input 
            ref={inputRef}
            value={job}
            placeholder='Enter todo...'
            onChange={e => {
                  dispatch(setJob(e.target.value))
            }}
          />
          
          <button onClick={handleSubmit}>Add</button>
        <ul>
            {jobs.map((job, index) => (
                <li key={index}>
                  {job} 
                  <span onClick={() => dispatch(delete_job(index))}>
                      x
                  </span>
                  
                </li>
            ))}
        </ul>


      </div>
  )
}

export default App

