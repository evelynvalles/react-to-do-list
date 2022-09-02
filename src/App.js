import './App.css';
import { useState } from 'react';
import ToDoListForm from './components/ToDoListForm';
import ToDoDisplay from './components/ToDoDisplay';

function App() {
  const [toDoList, setToDoList] = useState([]);

  const addToDo = ( newToDo ) => {
    setToDoList([...toDoList, newToDo])
  }

  const completeToDo = (completeToDo) => {
        setToDoList(completeToDo)
  }

  return (
    <div className="App">
      <ToDoListForm onNewToDo={addToDo}/>
      <ToDoDisplay toDoList={toDoList} onComplete={completeToDo}/>
    </div>
  );
}

export default App;
