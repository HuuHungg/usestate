import {useState, useReducer } from 'react' 
// use Reducer giải quyết đượcc cái gì thì useState cũng giải quyết được cái đó

// useState
// 1. Init state: 0
// 2. Actions: Up(state + 1) / Down (state -1)

// useReducer
// 1. Init state: 0
// 2. Actions: Up(state + 1) /Down (state -1)
// 3. Reducer
// 4. Dispatch

// Init State
let initState = 0

// Action
const Up_ACTION = 'up'
const DOWN_ACTION = 'down'

// Reducer 
// Dựa vào action để trả ra state mới
// Return ra state mới
let reducer = (state, action) => {
    console.log('reducer running...')
    switch(action) {
        case Up_ACTION:
            return state + 2
        case DOWN_ACTION:
            return state - 2
        default:
            throw new Error('Invalid action')

  }
}



function App() {  
  const [count, dispatch] = useReducer(reducer,initState)

  return (
    <div style={{padding: '0 20px'}}>
         <h1>{count}</h1>
        <button
          onClick={() => dispatch(DOWN_ACTION)}
        >
          Down
        </button>

        <button
          onClick={() => dispatch(Up_ACTION)}
        >
          Up
          </button>
    </div>
  )
    
        
}

export default App

