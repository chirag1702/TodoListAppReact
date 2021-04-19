import React from 'react'
import Todo from './Todo'

export default function TodoList(props) {
    let minHeightStyle = {
        minHeight: "100vh",
        margin: "40px auto"
    };

    return (
        <div className="container" style={minHeightStyle}>
            <h3 className="text-center my-3">Todo List</h3>
            {props.todos.length === 0 ? "No todos to show" :
                props.todos.map((todo) => {
                    return (
                        <Todo todo={todo} key={todo.sno} onDelete={props.onDelete} />
                    )
                })
            }
        </div>
    )
}
