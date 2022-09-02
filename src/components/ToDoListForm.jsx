import React, { useState } from  'react';

const ToDoListForm = (props) => {
    const [toDo, setToDo] = useState("");

    const handleChange = (e) => {
        setToDo(e.target.value)
    }

    const createToDo = (e) => {
        e.preventDefault();
        props.onNewToDo({
            toDo: toDo,
            completed: false
        });
    }

    return (
        <form onSubmit={createToDo} className="top">
            <div>
                <label>To-do List Form</label>
            </div>
            <div>
                <input type="text" name="to-do" value={toDo} onChange={handleChange}></input>
            </div>
            <div>
                <button>Add</button>
            </div>
        </form>
    )
}

export default ToDoListForm;