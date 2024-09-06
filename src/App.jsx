import {useState, useEffect} from "react"
import ToDoInput from "./components/ToDoInput"
import ToDoList from "./components/ToDoList"

function App() {
  const [tasks, setTasks] = useState([])
  const [taskDes, setTaskDes] = useState('')

  function persistData(newList){
    localStorage.setItem('tasks', JSON.stringify({tasks: newList}))
  }

  function handleAddTasks(newTask){
    const newTaskList = [...tasks, newTask]
    persistData(newTaskList)
    setTasks(newTaskList)
  }

  function handleDeleteTasks(index){
    const newTaskList = tasks.filter((task, taskIndex) => {
      return taskIndex !== index
    })
    persistData(newTaskList)
    setTasks(newTaskList)
  }
  function handleEditTasks(index){
    const editTask = tasks[index]
    setTaskDes(editTask)
    handleDeleteTasks(index)
  }

  useEffect(() => {
    if(!localStorage){
    return
    }
    let localTask = localStorage.getItem('tasks')
    if(!localTask){
      return
    }
    console.log(localTask)
    localTask = JSON.parse(localTask).tasks
    setTasks(localTask)
  }, [])

  return (
    <>
      <ToDoInput taskDes ={taskDes} setTaskDes={setTaskDes}
      handleAddTasks={handleAddTasks}/>
      <ToDoList handleDeleteTasks={handleDeleteTasks} handleEditTasks={handleEditTasks}
      tasks={tasks}/>
    </>
  )
}

export default App
