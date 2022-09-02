import React from 'react';

const ToDoDisplay = (props) => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const toDoListDelete = (delIndex) => {
        const filteredToDos = props.toDoList.filter((eachToDo, index) => index !== delIndex)
        props.onComplete(filteredToDos)
    }

    const handleCheckBox = (e, completeToDo) => {
        const toDoListCopy = [...props.toDoList]
        toDoListCopy[completeToDo].completed = e.target.checked
        props.onComplete(toDoListCopy)
    }

    return (
        <form onSubmit={handleSubmit}>
            {props.toDoList.map((item, i) => 
            <div key={i} className='to_do_form'>
                <p style={item.completed? {textDecoration: "line-through"}: {textDecoration: "none"}}>{item.toDo}</p>
                <input type="checkbox" checked={item.completed} onChange={e => handleCheckBox(e, i)}></input>
                <button onClick={() => toDoListDelete(i)}>Delete</button>
            </div>)}
        </form>
    )
}

export default ToDoDisplay;