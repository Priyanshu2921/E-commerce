import { useState } from "react";

export function Todo() {
    let [Todos, setTodos] = useState(["Sample Text"]);
    let [NewTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        setTodos ( [...Todos, NewTodo]);
        setNewTodo("");
    };

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };

    return (
        <div>
            <input placeholder="Add yoyur task"
                value={newtodo}
                onChange={updateTodoValue} ></input>
            <br></br>
            <button onClick={addNewTask}>Add Task</button>
            <br></br>
            <br></br>
            <hr></hr>
            <ul>
                {todos.map((todo) => (<li>{todo}</li>))}
            </ul>
        </div>
    );
}