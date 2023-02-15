//1. Import area
// import {}  from something from someLocation/someLocation
// import from something from someLocation/someLocation
import React from 'react'
import V from './V';
//2. Component definition area
let U = props => {
    //every function return something
    return (
        <>
            <div><h2>This is functional component-U,{props.data20}</h2></div>
            <V data21={props.data20} />
        </>
    )
}
//3.Export area
//3.1 Default export
//3.2 Named Export
export default U;
