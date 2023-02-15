//1. Import area
// import {}  from something from someLocation/someLocation
// import from something from someLocation/someLocation
import React from 'react'
import { J } from './J'
//2. Component definition area
export default function I(props) {
    return (
        // every function return something
        <>
            <div><h3>Hello from functional component I- {props.data8}</h3></div>
            <J data9={props.data8}></J>
        </>
    )
}
