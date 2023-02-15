//1. Import area
// import {}  from something from someLocation/someLocation
// import from something from someLocation/someLocation
import React from 'react'
import T from './T';
//2. Component definition area
function S(props) {
    // every function return something
    return (
        <>
            <div><h4>Hello from functional component-S, {props.data18}</h4></div>
            <T data19={props.data18} ></T>
        </>
    )
}
//3.Export area
//3.1 Default export
//3.2 Named Export
export default S;
