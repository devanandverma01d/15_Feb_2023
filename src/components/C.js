//1. Import area
// import {}  from something from someLocation/someLocation

import { D } from "./D";

// import from something from someLocation/someLocation
let C = (props) => {
    // Every function return something
    return (
        <>
            <div><h3>Hello From C component  {props.data2}</h3></div>
            <D data3={props.data2}></D>
        </>
    )

}
export default C;
