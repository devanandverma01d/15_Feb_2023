//1. Import area
// import {}  from something from someLocation/someLocation
// import from something from someLocation/someLocation
import React from 'react'
import { X } from "./X";
//2. Component Definition area
function W(props) {
    //every funcrion return something
    return (
        <>
            <div><h4>This is functional component-W,{props.data22}</h4></div>
            <X data23={props.data22} />
        </>
    )
}
//3.Export area
//3.1 Default export
//3.2 Named Export
export default W;
