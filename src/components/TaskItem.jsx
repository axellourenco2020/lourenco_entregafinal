import React from 'react';
import './TaskItem.css';

const TaskItem = ({ task, toggleTask, deleteTask }) => {
  const handleToggle = () => {
    toggleTask(task.id);
  };

  const handleDelete = () => {
    deleteTask(task.id);
  };

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <span>{task.name}</span>
      <div className="actions">
        <button onClick={handleToggle}>Completar</button>
        <button onClick={handleDelete}>Eliminar</button>
      </div>
    </div>
  );
};

export default TaskItem;
