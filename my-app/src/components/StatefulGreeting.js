import React from "react";

class StatefulGreeting extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            introduction: "Hello!",
            buttonText: "Exit",
            count: 0
        };
    }

    handleClick(){
        this.setState((prevState, prevProps) => {
            console.log('Previous State: ', prevState)
            console.log('Previous Props: ', prevProps)
            return {
                introduction: prevState.introduction === "Hello!" ? "Goodbye!" : "Hello!",
                buttonText: prevState.buttonText === "Exit" ? "Enter" : "Exit"
            }
        });
    }

    render() {
        return(
            <div>
                <h1>{this.state.introduction}, don {this.props.name}, {this.props.greeting}</h1>
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
            </div>
        )
    }
}

export default StatefulGreeting;