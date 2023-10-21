import React from 'react';
import useTasks from '../../hooks/UseTasks';

const TaskList = () => {
  const { tasks, addTask, deleteTask, toggleTaskCompletion } = useTasks();

  return (
    <div>
      <h1>TO DO List</h1>
    </div>
  );
}

export default TaskList;
