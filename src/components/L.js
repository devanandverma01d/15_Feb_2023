//1. Import area
// import {}  from something from someLocation/someLocation
// import from something from someLocation/someLocation
import React, { Component } from 'react'
import M from './M'
//2. Component definition area
export default class L extends Component {
    //There are 3 memeber of a class-
    //1. Property
    //2. Constructor
    //3. Method
    // A class Component must have a render method
    render() {
        // every function return something
        return (
            <React.Fragment>
                <div><h2>Hello from Class Component -L,{this.props.data11}</h2></div>
                <M data12={this.props.data11}></M>
            </React.Fragment>
        )
    }
}
