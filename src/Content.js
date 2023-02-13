
import {useEffect, useState} from 'react'

// 1. useEffect (callback)
// - Gọi callback mỗi khi re-render
// - Gọi callback sau khi component thêm elment vào DOM
// 2. useEffect (callback, [])
// - Chỉ gọi callback 1 lần sau khi component mouse
// 3. useEffect (callback, [deps]) 
// - Callback sẽ được gọi lại mỗi khi deps thay đổi
// ---------------
// 1. Callback luôn được gọi sau khi component re-render
// 2. Cleanup function luôn được gọi trước khi component unmountd

let tabs = ['posts', 'comments', 'albums', 'todos', 'photos' ]

function Content() {
    
    let [title, setTitle] = useState('')
    let [posts, setPots] = useState([])
    let [type, setType] = useState('posts')
    let [showGoToTop, setShowGoToTop] = useState(false)
    
    // useEffect (callback, [deps])
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(posts => {
                setPots(posts)
        })
    }, [type])

    useEffect(() => {

        let handleScroll = () => {
            if(window.scrollY >=200) {
                setShowGoToTop(true)
            }else {
                setShowGoToTop(false)
            }

                // setShowGoToTop(window.scrollY >= 200)
        }

        window.addEventListener('scroll', handleScroll )
        console.log('addEventListener')

        // Cleanup function 
        return () => {
            window.removeEventListener('scroll', handleScroll)
            console.log('removeEventListener')
        }
    }, [])

    return (
       <div>

            {tabs.map( tab => (
                <button
                    key={tab}
                    style = {type === tab ? {
                        color: 'white',
                        backgroundColor: 'black'
                    } : {} }
                    onClick= {() => setType(tab)}
                >
                    {tab}
                </button>
            ))}
        
            <ul>
                {posts.map(post => (
                    <li key={post.id}> {post.title || post.name} </li>
                ))}
            </ul>

               {showGoToTop && (
                    <button 
                        style={{
                            position: 'fixed',
                            right: 20,
                            bottom: 20,
                        }}
                    >
                        ボタンを直す
                    </button>
               )}
       </div>
    

    )
    
}




export default Content