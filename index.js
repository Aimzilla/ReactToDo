import React from 'react';
import ReactDOM from 'react-dom';
import Typography from '@material-ui/core/Typography';
import './styles.css';
import TodoForm from './TodoForm';
//import { useState } from 'react';
import TodoList from './TodoList';
import useTodoState from './useTodoState';


const App = () => {
  const [ todos, addTodo, deleteTodo ] = useTodoState([]);

  return (
    <div className="App">
      <Typography component="h1" variant="h2">
        To-Do Items
      </Typography>

      <TodoForm 
        saveTodo={(todoText) => {
          const trimmedText = todoText.trim();

          if (trimmedText.length > 0) {
            addTodo(trimmedText);
          }
        }} 
      />
      
      <TodoList 
        todos={todos} 
        deleteTodo={deleteTodo} 
      />
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
