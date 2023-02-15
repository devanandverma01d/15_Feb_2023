//1. Import area
// import {}  from something from someLocation/someLocation
// import from something from someLocation/someLocation

import React, { Component } from 'react'
import W from './W'
//2. component definition area
export default class V extends Component {
    //There are 3 memeber of a class-
    //1. Property
    //2. Constructor
    //3. Method
    // A class Component must have a render method
    render() {
        // Every function return something
        return (
            <React.Fragment>
                <div><h3>Hello from class component-V, {this.props.data21}</h3></div>
                <W data22={this.props.data21}></W>
            </React.Fragment>
        )
    }
}
//3.Export area
//3.1 Default export
//3.2 Named Export
