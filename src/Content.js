import {memo} from 'react'

function Content({onIncrease}) {
    console.log('re-render')
    return (
        <div>
            <h1>毎日ITを勉強してる頑張りましょう</h1>
            <button onClick={onIncrease}>Click me!</button>

        </div>
    )
}

export default memo(Content)