//1. Import area
// import {}  from something from someLocation/someLocation
// import from something from someLocation/someLocation
import React, { Component } from 'react'
import E from './E'
//2. Component definition area
export class D extends Component {
    //there are three member in a class 
    // Every class component must have a render method
    render() {
        return (
            <React.Fragment>
                <div><h1>This is component D- {this.props.data3}</h1></div>
                <E data4={this.props.data3}></E>
            </React.Fragment>
        )
    }
}
