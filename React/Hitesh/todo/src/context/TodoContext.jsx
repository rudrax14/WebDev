// TodoContextProvidor.js
import React, { useState, createContext, useEffect } from "react";

export const TodoContext = createContext();

function TodoContextProvidor({ children }) {
    const [first, setFirst] = useState('context');
    const [todo, setTodo] = useState([
        // {
        //     id: 1,
        //     todo: " Todo msg",
        //     completed: false,
        // },
        // {
        //     id: 2,
        //     todo: " Todo msg2",
        //     completed: false,
        // }
    ]);

    const addNote = (newTodo) => {
        setTodo((prev) => [{ id: Date.now(), ...newTodo }, ...prev])
    }

    const deleteNote = (id) => {
        setTodo((prev) => prev.filter((todo) => todo.id !== id));
    }

    const editNote = (id, updatedTodo) => {
        setTodo((prev) =>
            prev.map((todo) =>
                todo.id === id ?
                    {
                        ...todo,
                        ...updatedTodo
                    } : todo)

        );
    }

    // get item
    useEffect(() => {
        const todo = JSON.parse(localStorage.getItem("todo"))

        if (todo && todo.length > 0) {
            setTodo(todo)
        }
    }, [todo])

    // set item
    useEffect(() => {
        localStorage.setItem("todo", JSON.stringify(todo))
    }, [todo])

    const completeNote = (id) => {
        console.log("Complete");
        console.log(id);
        console.log(todo);

        // todo.map((todo) => {
        //     console.log("Map");
        //     console.log(todo);
        // });

        // setTodo((prev) => {
        //     console.log("Previous State:", prev);
        //     return prev;
        // });


        setTodo((prev) =>
            prev.map((prevTodo) =>
                prevTodo.id === id ?
                    {
                        ...prevTodo,
                        completed: !prevTodo.completed
                    } : prevTodo)
        )
    };


    const value = {
        todo,
        setTodo,
        first,
        addNote,
        deleteNote,
        editNote,
        completeNote
    };

    return (
        <TodoContext.Provider value={value}>
            {children}
        </TodoContext.Provider>
    );
}

export default TodoContextProvidor;
