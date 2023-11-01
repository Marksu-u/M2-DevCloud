import React, { useState } from 'react';
import useTasks from '../../hooks/UseTasks';
import {
  Container,
  Title,
  TasksList,
  TaskItem,
  DeleteButton,
  Form,
  Input,
  AddButton,
} from './styles'; // Update the import path

const TaskList = () => {
  const { tasks, addTask, deleteTask, toggleTaskCompletion } = useTasks();
  const [taskText, setTaskText] = useState('');

  const handleTaskInputChange = (e) => {
    setTaskText(e.target.value);
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    addTask(taskText);
    setTaskText('');
  };

  return (
    <Container>
      <Title>TO DO List</Title>
      <TasksList>
        {tasks.map((task) => (
          <TaskItem key={task.id}>
            {task.text}
            <button onClick={() => toggleTaskCompletion(task.id)}>
              {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
            </button>
            <DeleteButton onClick={() => deleteTask(task.id)}>Delete</DeleteButton>
          </TaskItem>
        ))}
      </TasksList>
      <Form onSubmit={handleAddTask}>
        <Input
          type="text"
          value={taskText}
          onChange={handleTaskInputChange}
          placeholder="Enter a new task"
        />
        <AddButton type="submit">Add Task</AddButton>
      </Form>
    </Container>
  );
};

export default TaskList;
