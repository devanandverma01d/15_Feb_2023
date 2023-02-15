//1. Import area
// import {}  from something from someLocation/someLocation
// import from something from someLocation/someLocation
import React, { Component } from 'react'
import O from './O'

//2. Component definition area
export class N extends Component {
    //There are 3 memeber of a class-
    //1. Property
    //2. Constructor
    //3. Method
    // A class Component must have a render method
    render() {
        // Evry function return something
        return (
            <React.Fragment>
                <div><h4>This is class component-N , {this.props.data13}</h4></div>
                <O data14={this.props.data13} ></O>
            </React.Fragment>
        )
    }
}
//3. Export area
//3.1 Default export
//3.2 Named export
