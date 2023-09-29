// This line is not needed in newer versions of React
// But it makes our code also backwards compatible with previous releases.
import React from "react";


const FunctionalGreetingWithProps = (props) => {
    console.log(props);
    return <h1>Hello, {props.name}! I see you're {props.age} years old; {props.greeting}</h1>
};

export default FunctionalGreetingWithProps;