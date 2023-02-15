//1. Import area
// import {}  from something from someLocation/someLocation
// import from something from someLocation/someLocation
import React from 'react'
import { N } from './N';
//2. Component definition area
let M = (props) => {
    // every function return something
    return (
        <>
            <div><h3>Hello from component-M, {props.data12} </h3></div>
            <N data13={props.data12} />
        </>
    )
}
//3. Export area
//3.1 Default export
//3.2 Named export
export default M;
