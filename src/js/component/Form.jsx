import React from "react";

const Form = ({setInputText, todos, setTodos, inputText}) => {

    const inputTextHandler = (e) => {
        console.log(e.target.value);
        //Passing info into here
        setInputText(e.target.value);
    };
    const submitTodoHandler = (e) => {
        e.preventDefault();
        //submit/create object with the data
        setTodos([
            //if something in there already just pass it/add any new ones/
            ...todos, {text: inputText, completed: false, id: Math.random() * 1000},
        ])
        setInputText("");
    }
    return (
        <form>
            <input placeholder="What needs to be done?" value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
            <button onClick={submitTodoHandler} className="todo-button"></button>                  
        </form>
    )
};

export default Form