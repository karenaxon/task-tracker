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

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
