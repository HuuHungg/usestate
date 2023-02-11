import {useState} from 'react'

// Response from API

let courses = [
  {
    id:1,
    name: 'html,css'
  },
  {
    id:2,
    name: 'Javascript'
  },
  {
    id:3,
    name: 'ReactJS'
  }
]



function App() {

    let [job, setJob] = useState('') 
    let [jobs, setJobs] = useState(() => {
       let storageJobs = JSON.parse(localStorage.getItem('jobs'))
       return storageJobs
    })

  let handleSubmit = () => {
      setJobs(prev => {
        let newJobs = [...prev,job]

        // Save to local storage
        let jsonJobs = JSON.stringify(newJobs)
        localStorage.setItem('jobs',jsonJobs)
          
        return newJobs
      })
      setJob('')
  }

  return (
      <div style={{padding: 50}}>
        <input 
          value={job}
          onChange={e => setJob(e.target.value)}
        />
           <button onClick={handleSubmit}>Add</button>

        <ul>
            
            {jobs.map((job,index) => (
                <li key={index}>{job}</li>
            ))}
        </ul>
      </div>
   )
}

export default App;
  




