//1. Import area
// import {}  from something from someLocation/someLocation
// import from something from someLocation/someLocation
import React, { Component } from 'react'
import U from './U'
//2. Component definition area
export default class T extends Component {
    //There are 3 memeber of a class-
    //1. Property
    //2. Constructor
    //3. Method
    // A class Component must have a render method
    render() {
        //Every method return something
        return (
            <React.Fragment>
                <div><h1>Hello from class component-T, {this.props.data19}</h1></div>
                <U data20={this.props.data19} />
            </React.Fragment>
        )
    }
}
