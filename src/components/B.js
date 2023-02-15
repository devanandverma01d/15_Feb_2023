//1. Import area
// import {}  from something from someLocation/someLocation
// import from something from someLocation/someLocation
import React, { Component } from "react";
import C from "./C";


export class B extends Component {
    // there are 3 member of a class-
    //1. Property
    //2. Constructor
    //3. method
    // Every Class component must have a render method
    render() {
        // Every method return something
        return (
            <React.Fragment>
                <div><h2>Hello from B component {this.props.data1}</h2></div>
                <C data2={this.props.data1} />
            </React.Fragment>
        )

    }
}