import React from 'react'
import Todo from "./Todo"
import "../styles/todo-list.css"

const TodoList = ({tasks,setTasks}) => {
  return (
    <div className='overflow-auto todo-list-container' >
        {tasks.map((task)=>(
            <Todo  text={task.task} key ={task.id} tasks={tasks} task={task} setTasks={setTasks} />
        ))}
    </div>
  )
}

export default TodoList
