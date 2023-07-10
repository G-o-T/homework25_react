import React from "react";
import { useState } from "react";

function Counter({count}) {

    const [state, setState] = useState(+count);

    function handleClick() {
        setState(state + 1)
    }

    return (
        <button onClick={handleClick}>press {state}</button>
    )
}

export default Counter;


// class Counter extends Component {
//     state = {
//       count: 0
//     };
//     handleClick = () => {
//       this.setState(({ count }) => ({
//         count: count + 1
//       }));
//     };
//     render() {
//       return <button onClick={this.handleClick}>{this.state.count}</button>;
//     }
//   }