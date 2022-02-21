import Header from './components/Header';
import { useState } from 'react';
import Tasks from './components/Tasks';


const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1, 
      text: "Apptk",
      day: "Feb 5",
      reminder: true,
    },
    {
      id: 2, 
      text: "Appt2",
      day: "Feb 6",
      reminder: true,
    },
    {
      id: 3, 
      text: "Appt3",
      day: "Feb 7",
      reminder: false,
    },
  ])

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : "No Tasks to Show"}
    </div>
  );
}

export default App;
