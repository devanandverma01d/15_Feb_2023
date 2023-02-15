//1. Import area
// import {}  from something from someLocation/someLocation
// import from something from someLocation/someLocation
import React, { Component } from 'react'
import S from "./S";
//2. Component definition area
export default class R extends Component {
    //There are 3 memeber of a class-
    //1. Property
    //2. Constructor
    //3. Method
    // A class Component must have a render method
    render() {
        // every function retun something
        return (
            <React.Fragment>
                <div><h4>Hello from class component-R,{this.props.data17}</h4></div>
                <S data18={this.props.data17}></S>
            </React.Fragment>
        )
    }
}
//3. Export area
//3.1 Default export
//3.2 Named export