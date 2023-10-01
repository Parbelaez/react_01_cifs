import React, { Component } from 'react'

export class EventsClass extends Component {

    // As it is a class, no functions keyword is needed, just the definition of the method
    clickHandler(){
        console.log("Clicked the class button")
    }

    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>
                    Click me - Class Component
                </button>
            </div>
        )
    }
}

export default EventsClass