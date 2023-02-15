//1. Import area
// import {}  from something from someLocation/someLocation
// import from something from someLocation/someLocation
import React, { Component } from 'react'
import G from './G'
//2. Component definition area
export class F extends Component {
    //There are 3 memeber of a class-
    //1. Property
    //2. Constructor
    //3. Method
    // A class Component must have a render method
    render() {
        // Every method return something
        return (
            <React.Fragment>
                <div><h4>Hello from Class Component F-{this.props.data5}</h4></div>
                <G data6={this.props.data5}></G>
            </React.Fragment>
        )
    }
}
