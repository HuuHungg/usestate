import {useState} from 'react'
let gifts = [
  '毎日８時間ぐらいITを勉強してる',
  '毎日２時間ぐらい英語を勉強してる',
  '毎日２時間ぐらい日本語を勉強してる'
  
]

function App() {  
  let [gift, setGift] = useState()

  let handlerSetgid = () => {
    let ranDom = Math.floor(Math.random() * gifts.length)
    setGift(gifts[ranDom])
  }

  return (
    <div className="App" style={{padding: 50, color:'red'}} >
        <h1>{gift || '毎日勉強して頑張りましょう'}</h1>
        <button onClick={handlerSetgid} >ボタン</button>
    </div>
  );
}

export default App;
  




