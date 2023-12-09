import React, { useEffect } from "react";

//create your first component
const Bulk = ({input, setInput}) => {
    const userURL = "https://playground.4geeks.com/apis/fake/todos/user/klbailey";

    //Get todos
    const getTodos = () => {
        fetch(userURL)
        //validate reponse
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                // Read the response as JSON
                return response.json();
            })            
            .then(response => console.log('Success:', response))
            .catch(error => console.error(error));
    };

    //deleted task update/put on API
    const remTask = (index) => {
		let remItem = todoList.filter((item, i) => i != index);
		setTodoList(removeItem);
		updateAPI(remItem);
	};

    //Add new task/update API
    function updateAPI(newList) {
		fetch(userURL, {
			method: 'PUT', // or 'POST'
            body: JSON.stringify(data), // data can be a 'string' or an {object} which comes from somewhere further above in our application
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            if (!res.ok) throw Error(res.statusText);
            return res.json();
        })
        .then(response => console.log('Success:', response))
        .catch(error => console.error(error));
	}
    
    useEffect(() => {
        getTodos();
    }, []);

    //****************************I need to map it?

    return (
		<div>
			<div>
				<input
					type="text"
					className="item userInput"
					onKeyDown={handleKeyPress}
					value={listItem.label}
					onChange={(e) =>
						setListItem({ ...listItem, label: e.target.value })
					}
					placeholder="What needs to be done?"
				/>
			</div>
			<div>
				<ul>{todo}</ul>
			</div>
			<div> {todo.length} items left</div>
		</div>
	);
};

export default Bulk;