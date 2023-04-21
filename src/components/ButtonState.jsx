import { useState } from "react";

const ButtonState = () => {
    const [counter, setCount] = useState(0);
    
    const handleClick = () => {        
        setCount(counter + 1);
    };

    return (
        <button onClick={handleClick}> Counter: {counter} </button>
    )
}

export default ButtonState;