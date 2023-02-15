//1. Import area
// import {}  from something from someLocation/someLocation
// import from something from someLocation/someLocation
import React from 'react'
import L from './L'
//2. Component definition area
export default function K(props) {
    return (
        // every function return something
        <>
            <div><h1>Hello From Functional Componenet -K {props.data10} </h1></div>
            <L data11={props.data10} />
        </>
    )
}
