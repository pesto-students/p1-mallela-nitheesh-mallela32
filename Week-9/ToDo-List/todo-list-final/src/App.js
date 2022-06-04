import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"
function App() {
  const [taskInput , setTaskInput] = useState("");
  const [importance , setImportance] = useState("");
  const [ tasks , setTasks] = useState([]);
  return (<>
  
        <div className='main-container' >
          <div className='todo-list' >
            <h3 >Todo List</h3>
            <TodoForm taskInput={taskInput}  setTaskInput={setTaskInput} tasks={tasks} setTasks={setTasks}
          importance={importance} setImportance={setImportance} />
          <TodoList tasks={tasks} setTasks={setTasks} />
          </div >
      </div>
  </>
    
  );
}

export default App;
