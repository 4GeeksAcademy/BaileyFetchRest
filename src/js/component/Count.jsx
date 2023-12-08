import React from "react";

const Count = ({setInputText, todos, setTodos, inputText}) => {

    return (
        <div className="counting">
            <ul className="counter">
                <li>
                    {todos.length==1 ? `${todos.length} item left` : 
                        todos.length>1 ? `${todos.length} items left` : "Hooray, all tasks completed."}
                </li>
            </ul>
        </div>
    );

};

export default Count