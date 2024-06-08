import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.css';

const TodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todo || !date) {
      iziToast.error({
        title: 'Error',
        message: 'Please enter a valid todo and date.',
      });
      return;
    }
    const newTodo = {
      id: uuidv4(),
      text: todo,
      date,
      completed: false,
    };
    addTodo(newTodo);
    setTodo('');
    setDate('');
    iziToast.success({
      title: 'Success',
      message: 'Todo added successfully!',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="new-todo">
      <input
        type="text"
        placeholder="Add your list here.."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button type="submit">
        <i className="bi bi-plus-circle-fill"></i>
      </button>
    </form>
  );
};

export default TodoForm;
