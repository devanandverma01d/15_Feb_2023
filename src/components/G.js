//1. Import area
// import {}  from something from someLocation/someLocation
// import from something from someLocation/someLocation
import React from 'react'
import H from './H';
//2. Component definition area
let G = (props) => {
    // every function return something
    return (
        <>
            <div><h2>Hello from functional component G-{props.data6} </h2></div>
            <H data7={props.data6} />
        </>
    )
}
//3. Export area
//3.1 Default Export
export default G;
//3.2 Named Export
