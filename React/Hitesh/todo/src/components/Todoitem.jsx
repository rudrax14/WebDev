import React, { useContext } from 'react';
import { TodoContext } from "../context/TodoContext";

function Todoitem({ todoItem }) {
    const { completeNote, deleteNote } = useContext(TodoContext);

    const doneHandler = () => {
        completeNote(todoItem.id);
    };

    const deleteHandler = () => {
        deleteNote(todoItem.id);
    };

    return (
        <div className='flex justify-around w-[300px] text-white'>
            <div>{todoItem.id}</div>
            <div>{todoItem.todo}</div>
            <div>{todoItem.completed}</div>
            <button>Edit</button>
            <button onClick={doneHandler}>Done</button>
            <button onClick={deleteHandler}>Delete</button>
        </div>
    );
}

export default Todoitem;
