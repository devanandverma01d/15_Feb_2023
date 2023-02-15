//1. Import area
// import {}  from something from someLocation/someLocation
// import from something from someLocation/someLocation
import React, { Component } from 'react'
import Y from './Y'
//2. Componnet definition area
export class X extends Component {
    //There are 3 memeber of a class-
    //1. Property
    //2. Constructor
    //3. Method
    // A class Component must have a render method
    render() {
        //every method return something
        return (
            <React.Fragment>
                <div><h1>Hello from Class component-X, {this.props.data23}</h1></div>
                <Y data24={this.props.data23} />
            </React.Fragment>
        )
    }
}
//3.Export area
//3.1 Default export
//3.2 Named Export
