import './App.css';
import { useState } from 'react';

function App() {
  const [tasks,setTasks]= useState([
  {
    id: 1,
    title: "Reading books",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, minus.",
  },
  {
    id: 2,
    title: "Cleaning rooms",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, minus.",
  },
  {
    id: 3,
    title: "Playing CS2",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, minus.",
  },

  ]);
  const deleteTask =(id)=>{
    const filteredTask=tasks.filter((task)=>{
      return task.id !== id;
    });
     setTasks(filteredTask);
  };
  

  return (
    <div className="App">
      <ul>
      {tasks.map((task)=>{
        return(
          <li key={task.id}>
            <h3 className='title'>{task.title}</h3>
            <p className='text'>{task.body}</p>
            <button className='btn' onClick={()=>deleteTask(task.id)}>Delete</button>
         </li>
        ); 
      })}
      </ul>
    </div>
  );

};
export default App;
