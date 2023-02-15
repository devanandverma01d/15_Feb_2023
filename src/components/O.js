//1. Import area
// import {}  from something from someLocation/someLocation
// import from something from someLocation/someLocation
import { P } from "./P";
import React from 'react'
//2. Component definition area
export default function O(props) {
    // every function return something
    return (
        <>
            <div><h2>Hello from Functional component -O, {props.data14}</h2></div>
            <P data15={props.data14}></P>
        </>
    )
}
//3. Export area
//3.1 Default export
//3.2 Named export
