import {memo} from 'react'

function Content({count}) {
    console.log('re-render')
    return (
        <div>
            <h1>毎日ITを勉強してる頑張りましょう {count}</h1>
        </div>
    )
}

export default memo(Content)