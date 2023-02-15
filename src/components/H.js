//1. Import area
// import {}  from something from someLocation/someLocation
// import from something from someLocation/someLocation
import React, { Component } from 'react'
import I from './I'
//2. Component definition area
export default class H extends Component {
    //There are 3 memeber of a class-
    //1. Property
    //2. Constructor
    //3. Method
    // A class Component must have a render method
    render() {
        // every function return something
        return (
            <React.Fragment>
                <div><h3>This is class component H- {this.props.data7}</h3></div>
                <I data8={this.props.data7}></I>
            </React.Fragment>
        )
    }
}
