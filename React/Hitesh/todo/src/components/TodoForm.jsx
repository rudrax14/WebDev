import React, { useState, useContext } from 'react'
import { TodoContext } from "../context/TodoContext";
function TodoForm() {
    const [todo, setTodo] = useState("")
    const { addNote } = useContext(TodoContext);

    const add = (e) => {
        e.preventDefault()

        if (!todo) return

        addNote({ todo, completed: false })
        setTodo("")
    }

    return (
        <div>
            <form onSubmit={add}>
                <span>Todo</span>
                <input className=' bg-slate-600' type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default TodoForm