//1. Import area
// import {}  from something from someLocation/someLocation
// import from something from someLocation/someLocation
import Q from "./Q";
import React, { Component } from 'react'
//2. Component definition area
export class P extends Component {
    //There are 3 memeber of a class-
    //1. Property
    //2. Constructor
    //3. Method
    // A class Component must have a render method
    render() {
        //Evry method return something
        return (
            <React.Fragment>
                <div><h1>Hello from class component-P, {this.props.data15}</h1></div>
                <Q data16={this.props.data15} />
            </React.Fragment>
        )
    }
}
//3. Export area
//3.1 Default export
//3.2 Named export
