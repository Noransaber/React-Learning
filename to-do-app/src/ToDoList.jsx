import React, { useState } from "react"

export default function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("")


    // Add task btn
    const AddTask = () => {
        if (newTask.trim != "") {
            setTasks(t => [...t, newTask])
            setNewTask("")
        }
    }
    const handleChange = (event) => {
        setNewTask(event.target.value)

    }
    const DeletTask = (index) => {
        const UpdateTasks = tasks.filter((_, i) => i !== index);
        setTasks(UpdateTasks);

    }


    return (
        <>
            <div className=".to-do-list">
                <h1>To Do List</h1>
                <div>
                <input
                        type="text"
                        onChange={handleChange}
                        placeholder='Add Tasks...'
                        value={newTask}
                />
                    <button
                        className='add-button'
                        onClick={AddTask}>
                        Add
                    </button>
                </div>
                <ol>
                    {tasks.map((task, index) =>
                        <li
                            key={index}>
                            <span
                                className='tasks'>
                                {task}
                            </span>
                            <button
                                className='delete-button'
                                onClick={() => DeletTask(index)}>
                                Delete
                            </button>
                        </li>
                    )}
                </ol>
            </div>
        </>
    );


}