import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { createClient } from 'contentful';

// Initialize Contentful client
const client = createClient({
  space: import.meta.env.VITE_SPACE_ID,
  environment: 'master',
  accessToken: import.meta.env.VITE_ACCESS_TOKEN
});

function App() {
  const [todos, setTodos] = useState([]);

  // Function to fetch todos from Contentful
  const fetchTodos = async () => {
    try {
      const response = await client.getEntries({
        content_type: 'todolist'
      });
      const todoItems = response.items.map(item => ({
        id: item.sys.id,
        text: item.fields.title,
        date: item.fields.date,
        completed: item.fields.completed || false
      }));
      setTodos(todoItems);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (id, updatedText, updatedDate) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: updatedText, date: updatedDate } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <Header />
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        editTodo={editTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;
