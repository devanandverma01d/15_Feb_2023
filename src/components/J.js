//1. Import area
// import {}  from something from someLocation/someLocation
// import from something from someLocation/someLocation
import React, { Component } from 'react'
import K from './K'
//2. Component definition area
export class J extends Component {
    //There are 3 memeber of a class-
    //1. Property
    //2. Constructor
    //3. Method
    // A class Component must have a render method
    render() {
        // every function return something
        return (
            <React.Fragment>
                <div><h4>This is Class component- J {this.props.data9} </h4></div>
                <K data10={this.props.data9} />
            </React.Fragment>
        )
    }
}
