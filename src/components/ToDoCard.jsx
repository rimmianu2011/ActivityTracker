import React from 'react'

export default function ToDoCard(props) {
  const {children, handleDeleteTasks, index, handleEditTasks} = props
  return (
    <li className='todoItem'>
      {children}
      <div className='actionsContainer'>
        <button onClick={() => {
          handleEditTasks(index)
        }}>
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button onClick={() => {
          handleDeleteTasks(index)
        }}>
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </li>
  )
}
