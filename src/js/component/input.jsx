import React from "react";


//create your first component
const Input = ({input, setInput}) => {
	return (
        <input 
            input="text"
            className="something"
            placeholder="somethingElse"
            onChange={(e) => setInput(e.target.value)}
            
        />

    
	);
};

export default Input;