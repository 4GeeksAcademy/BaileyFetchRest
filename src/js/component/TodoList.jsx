import React, { useState } from "react";
import Todo from "./Todo";

const TodoList = ({todos, setTodos}) => {
    console.log(todos);
    return (
        <div className="todo-container">
            <ul className="todo-list ps-0">
                {todos.map(todo => (
                //for each todo from state render a todo component/comes from home
                    <Todo 
                    setTodos={setTodos} 
                    todos={todos} 
                    key={todo.id}
                    todo={todo}
                    text={todo.text}/>
                ))}
                {todos.length==1 ? `${todos.length} item left` : 
                        todos.length>1 ? `${todos.length} items left` : "Hooray, all tasks completed."}
            </ul>
            
        </div>
    );
};

export default TodoList;
