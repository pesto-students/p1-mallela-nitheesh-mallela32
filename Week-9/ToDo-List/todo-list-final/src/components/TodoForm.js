import React from 'react'
import "../styles/todo-form.css"

export const TodoForm = ({taskInput,setTaskInput,tasks,setTasks,setImportance,importance}) => {

    function taskValue (event) {
        setTaskInput(event.target.value);
    }
 
    function addTask (event) {
        event.preventDefault();
        console.log(taskInput)
        if(taskInput!==""){
         setTasks([...tasks,{task:taskInput,condition:false,importance:importance,id:parseInt(Math.random()*100)}]);
         setTaskInput('');
        }else{
            return
        }
         
    }
  return (
    <div className='todo-form'>
        <form name='task-form'>
        <input type="text" value={taskInput} onChange={taskValue} placeholder="Enter Your Task" ></input>
        <button  htmlFor="task-form" onClick={addTask} type="submit" ><i className='fa fa-plus' ></i></button>
        </form>
        
    </div>
  )
}
export default TodoForm;
