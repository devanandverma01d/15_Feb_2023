//1. Import area
// import {}  from something from someLocation/someLocation
// import from something from someLocation/someLocation
import { B } from './B';

//2.component definition area
let A = (props) => {
    //every Function return something
    return (
        <>
            <h1>React Project-9: To pass data from one component to another through all alphabets(A to Z)</h1>
            <br />
            <div><h3>{props.name} {props.surname} {props.children}</h3>
                <div><h3>Child</h3></div>
            </div>
            <B data1={props.children}></B>
        </>
    )

}
//3.Export area
//3.1 Default Export
export default A;
  //3.2 Named export