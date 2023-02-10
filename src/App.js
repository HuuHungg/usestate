import {useState} from 'react'
let total = [100,200,300,700,600]

function App() {  
  let [course, setCourse] = useState(() => {
    let results = total.reduce((acc,crr) => acc + crr)
    return results
  })

  let handleCourse = () => {
      setCourse( course + 20)
  }
  
  let [info, setInfo] = useState({
    名前: "グエンフフン",
    何歳: "今年は２０歳です",
    場所: "ベトナムに住んでいる"
  })

  let handleUpdate = () => {
    setInfo(
      {
        ...info,
        臭味: "私の臭味はサッカをして本を読んでコーヒーをのみます"
      }
    )
  }

  return (
    <div className="App" style={{padding: 50, color:'red'}}>
        <h1>{course}</h1>
        <button onClick={handleCourse}>Increase</button>
        <h1>{JSON.stringify(info)}</h1>
        <ul style={{color: 'black'}}>
          <li>毎日２時間ぐらいITを勉強してる</li>
          <li>今朝6時に起きました</li>
          <li>毎日本を読んでいます</li>
        </ul>
        <button onClick={handleUpdate}>Update</button>
    </div>
  );
}

export default App;
