import React, { useState } from "react";
import Heading from "./Heading";
import Form from "./Form";
import TodoList from "./TodoList";
import Count from "./Count";

const Home = () => {
	const [inputText, setInputText] = useState("");
	const [todos, setTodos] = useState([]);
	return (
		<div className="heading">
			<Heading />
			<div className="body">
				<Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} />
				<TodoList setTodos={setTodos} todos={todos} />
				{/* <Count setTodos={setTodos} todos={todos}/> */}
			</div>
		</div>
	)
};

export default Home;