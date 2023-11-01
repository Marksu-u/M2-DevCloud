import React from 'react';
import './App.css';
import TaskList from './components/TaskList';

const App = () => {
  return (
    <div className="App">
      <h1>Gestion de Tâches Pour Le Fun...</h1>
      <TaskList />
    </div>
  );
}

export default App;
