//1. Import area
// import {} from someLocation/someLibrary
// import from someLocation/someLibrary
import React, { Component } from "react";
//2. Component definition area
export class Z extends Component {
    //there are three member of a class-
    //1. Property
    //2. Constructor
    //3. Method
    // Every class component must have a render method
    render() {
        // every method return somethig
        return (
            <React.Fragment>
                <div><h3>This is Last Component-Z,{this.props.data25}</h3></div>
            </React.Fragment>
        )
    }
}
//3.Export area
//3.1 Default export
//3.2 Named Export
