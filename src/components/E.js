//1. Import area
// import {}  from something from someLocation/someLocation
// import from something from someLocation/someLocation
import { F } from "./F";
import React from 'react'
//2. Component definition area
function E(props) {
    //every function return something
    return (
        <>
            <div> Hello from Component E- {props.data4}</div>
            <F data5={props.data4} ></F>
        </>
    )
}
//3. Export area
//3.1 Export 
export default E;
