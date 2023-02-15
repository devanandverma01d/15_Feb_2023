//1. Import area
// import {}  from something from someLocation/someLocation
// import from something from someLocation/someLocation
import React from 'react'
import R from './R';
//2. Component definition area
let Q = props => {
    // every function return something
    return (
        <>
            <div><h3>Hello from Functional component -Q,{props.data16}</h3></div>
            <R data17={props.data16} ></R>
        </>
    )
}
//3. Export area
//3.1 Default export
export default Q;
//3.2 Named export
