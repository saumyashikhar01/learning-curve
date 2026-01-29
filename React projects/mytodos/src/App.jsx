import React, {useEffect, useState} from 'react'

import "./App.css"
import Taskform from './components/Taskform'
import TaskColumn from './components/TaskColumn'
import todoIcon from './assets/direct-hit.png'
import doingIcon from './assets/star.png'
import doneIcon from './assets/tick.png'

const oldTasks = localStorage.getItem("tasks");
console.log(oldTasks);

const App = () => {
  const [tasks, setTasks] = useState([JSON.parse(oldTasks) || []]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  } , [tasks])

  const handleDelete = (taskIndex) => {
      const newTask = tasks.filter((task, index) => index !== taskIndex)
      setTasks(newTask)
  }
  return (
    <div className='app'>
      <Taskform setTasks={setTasks} />
      <main className='app_main'>
        <TaskColumn 
            title = "To do" 
            icon={todoIcon}
            tasks= {tasks} 
            status="todo"
            handleDelete={handleDelete}
            />
        <TaskColumn 
            title = "Doing" 
            icon={doingIcon} 
            tasks= {tasks} 
            status="doing"
            handleDelete={handleDelete}
            />
        <TaskColumn 
            title = "Done" 
            icon={doneIcon} 
            tasks= {tasks} 
            status="done"
            handleDelete={handleDelete}
            />
        
        </main>
    </div>
  )
}

export default App
