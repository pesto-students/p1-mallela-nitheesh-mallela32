import React from 'react'
import "../styles/todo.css"

const Todo = ({text,setTasks,task,tasks}) => {
  function editTask (task) {
            console.log(task)
    }

   function deleteTask (){
       setTasks(tasks.filter((el)=>el.id !== task.id))
   }

   function completeTask(event){
        console.log(event.target.checked)
        
            setTasks(tasks.map(item=>{
                if(item.id === task.id){
                    return{...item, condition:!item.condition}
                }
                return item;
            }))
        }

  return (
    <div className='todo-div mb-2'>
        <div className='d-flex  align-items-center '>
        <input className='mr-2 check ' onChange={completeTask} type="checkbox"></input>
        <h5 className={`m-0 ${task.condition ? 'completed' : ""} text-wrap text-div`} >{text}</h5>
        </div>
        <div className='btn-div ml-2'>
        <i className='fa fa-edit edit-icon' onClick={editTask} ></i>
        <i className="fa fa-trash delete-icon" onClick={deleteTask} ></i>
        </div>
    </div>
  )
}

export default Todo;