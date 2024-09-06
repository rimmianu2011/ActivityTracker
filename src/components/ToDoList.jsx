import React from 'react'
import ToDoCard from './ToDoCard'

export default function ToDoList(props) {
  const{tasks} = props
  return (
    <ul className='main'>
      {tasks.map((task, taskIndex) => {
        return(
          <ToDoCard {...props} key={taskIndex} 
          index={taskIndex}>
            <p>{task}</p>
          </ToDoCard>
        )
      })}
    </ul>
  )
}
