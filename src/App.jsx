import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskName) => {
    const newTask = {
      id: tasks.length + 1,
      name: taskName,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const filteredTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(filteredTasks);
  };

  return (
    <div className="app">
      <h1>Lista de Tareas</h1>
      <TaskForm addTask={addTask} />
      <div className="list-container">
        <TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
      </div>
      <footer className="footer">
        Lista de tareas realizada por Axel Lourenco para Argentina Programa 4.0 UTN
      </footer>
      <button className="update-button" onClick={() => window.location.reload()}>
        Actualizar
      </button>
    </div>
  );
};

export default App;
