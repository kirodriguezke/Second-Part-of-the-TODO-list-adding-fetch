import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store";


//include images into your bundle

import { checkPropTypes } from "prop-types";

export function Home() {
	const [todo, setTodo] = useState([]);
	const [inputValue, setInputValue] = useState("");

	function handleChange(event) {
		setInputValue(event.target.value);
	}

	const handleKeyPress = event => {
		if (event.key === "Enter" && inputValue != "") {
			setTodo([...todo, inputValue]);
			console.log("handleKeyPress");
			setInputValue("");
		}
	};

	function deleteRow(index, event) {
		let newTodo = [...todo];
		let removed = newTodo.splice(index, 1);
		setTodo(newTodo);
    }

	return (
		<div className="text-center mt-5">
			<div className="row w-100">
				<div className="col-md-12">
					<h1 className="display-2">Tareas para hacer:</h1>

					<div className="input container input-group mt-5">
						<input
							onChange={handleChange}
							onKeyPress={handleKeyPress}
							value={inputValue}
							placeholder="¿Qué tengo que hacer hoy?"
							type="text"
							className="form-control w-100"
						/>
					</div>
					<div className="list container">
						<ul>
							{todo.map((value, index) => (
								<li
									className="list-group-item font-weight-bold"
									key={index}>
									{value}

									<button
										type="button"
										onClick={event =>
                                            deleteRow(index, event)
                                        }>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                        </svg>
									</button>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
