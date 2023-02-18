import {useState, useReducer, useRef, startTransition } from 'react' 
// use Reducer giải quyết đượcc cái gì thì useState cũng giải quyết được cái đó

// useState
// 1. Init state: 0
// 2. Actions: Up(state + 1) / Down (state -1)

// useReducer
// 1. Init state: 0
// 2. Actions: Up(state + 1) /Down (state -1)
// 3. Reducer
// 4. Dispatch


let initState = {
  job: '',
  jobs: [],
}

// Actions
let SET_JOB = 'set_job'
let ADD_JOB = 'add_job'
let DELETE_JOB = 'delete_iob'

let setJob = payload => {
    return {
      type: SET_JOB,
      payload
    }
}

let addJob = payload => {
    return {
        type: ADD_JOB,
        payload
    }
}

let delete_job = payload => {
    return {
      type: DELETE_JOB,
      payload
    }
}

// Reducer 
let reducer = (state, action) => {

    console.log('Action: ', action)
    console.log('Prev state', state)

    let newState 

    switch(action.type) {
       case SET_JOB:
          newState = {
            ...state,
            job: action.payload
        }   
        break
        case ADD_JOB:
          newState = {  
              ...state,
              jobs: [...state.jobs, action.payload]
          } 
        break
        case DELETE_JOB:
            const newJobs = [...state.jobs]
            
            newJobs.splice(action.payload, 1)
            newState = {
                ...state,
                jobs: newJobs
            }
          break
        default:
          throw new Error('Invalid action')
    }

    console.log('New state: ', newState)

    return newState

}






function App() {  
  
  let [state, dispatch] = useReducer(reducer, initState)
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

