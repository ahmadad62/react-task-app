import { useState, useEffect } from "react";
import {BrowserRouter as Router,Route} from 'react-router-dom';
import AddTask from "./componnents/AddTask";
import Header from "./componnents/Header";
import Tasks from "./componnents/Tasks";
import Footer from './componnents/Footer'
import About from "./componnents/About";

function App() {
  const [showAddForm, setshowAddForm] = useState(false)
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const taskFromServer = await fetchTasks();
      setTasks(taskFromServer)
    }
    getTasks()
  }, [])
  const fetchTasks = async () => {
    const result = await fetch("http://localhost:8000/task")
    const data = await result.json();
    return data

  }
  //Delete Tasks

  const deletTask = async (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    await fetch(`http://localhost:8000/task/${id}`, { method: 'DELETE' })

    console.log("delete", id);
  };


  //Taggel Reminder Bar

  const toggleReminder = async (task) => {
    const updatedTask = { ...task, reminder: !task.reminder };
    const result = await fetch(`http://localhost:8000/task/${task.id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updatedTask)
    })
    const data = await result.json()
    setTasks(tasks.map((item) => item.id === task.id ? { ...item, reminder: data.reminder } : item))
  }

  //Add Task

  const addTask = async (task) => {
    const result = await fetch('http://localhost:8000/task', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })
    const data = await result.json()
    setTasks([...tasks, data])
    // const id = Math.floor(Math.random() * 10000) + 1;
    // const newTask = { id, ...task };
    // setTasks([...tasks, newTask])

  };


  return (
    <Router>
    <div className="container">

      <Header showAddForm={showAddForm} onAdd={() => setshowAddForm(!showAddForm)} title="Task Manager" />
      {showAddForm && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (<Tasks onDelete={deletTask} tasks={tasks} onToggle={toggleReminder} />) : ('No task to show')}
      <Route path='/about' component={About}/>
      <Footer />
    </div>
    </Router>
  );
}
export default App;
