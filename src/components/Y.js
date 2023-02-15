//1. Import area
// import {}  from something from someLocation/someLocation
// import from something from someLocation/someLocation

import { Z } from "./Z";

//2. component definition area
let Y = props => {
    //every function return something
    return (
        <>
            <div><h2>Hello from Functional component-Y, {props.data24}</h2></div>
            <Z data25={props.data24} />
        </>
    )
}
//3.Export area
//3.1 Default export
//3.2 Named Export
export default Y;