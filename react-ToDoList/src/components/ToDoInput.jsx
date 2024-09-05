import React from 'react'
import {useState} from "react"

export default function ToDoInput(props) {
  const {taskDes, setTaskDes, handleAddTasks} = props
  

  return (
    <header>
      <input value={taskDes} onChange={(e) =>{
        setTaskDes(e.target.value)
      }} placeholder="Enter task..." />
      <button onClick={() => {
        handleAddTasks(taskDes)
        setTaskDes('')
      }}>Add Task</button>
    </header>
  )
}
