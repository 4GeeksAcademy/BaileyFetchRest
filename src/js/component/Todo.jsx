import React from "react";

const Todo = ({text, todo, todos, setTodos}) => {
    //Events to modify state/pass from home to TodoList to Todo
    //Can only pass props downwards from home to components
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
    }
    const completeHandler = () => {
        setTodos(todos.map(item => {
            //Array of objects/switch completed from false to true & vice versa
            if(item.id === todo.id) {
                return {
                   ...item , completed: !item.completed
                };
            }
            //return whatever did not match 
            return item;  
        })
        );
    }
    return (
        <div className="todo">
            {/* ternary if true add class to it, if not add nothing */}
            <li className={`todo-item ${todo.completed ? "completed" : ''}`}>{text}</li>
            <button onClick={completeHandler} className="complete-btn"><i className="fas fa-check"></i></button>
            <button onClick={deleteHandler} className="trash-btn"><i className="fas fa-trash"></i></button>
        </div>
    );
}

export default Todo;