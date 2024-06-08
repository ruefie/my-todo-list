import React, { useState } from 'react';

const TodoItem = ({ todo, toggleComplete, editTodo, deleteTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedText, setUpdatedText] = useState(todo.text);
  const [updatedDate, setUpdatedDate] = useState(todo.date);

  const handleToggle = () => {
    toggleComplete(todo.id);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editTodo(todo.id, updatedText, updatedDate);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setUpdatedText(todo.text);
    setUpdatedDate(todo.date);
  };

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  return (
    <div className={`todo ${todo.completed ? 'checked' : ''}`}>
      <i
        className={`bi ${todo.completed ? 'bi-check-circle-fill' : 'bi-circle'}`}
        onClick={handleToggle}
      ></i>
      {isEditing ? (
        <>
          <input
            type="text"
            value={updatedText}
            onChange={(e) => setUpdatedText(e.target.value)}
          />
          <input
            type="date"
            value={updatedDate}
            onChange={(e) => setUpdatedDate(e.target.value)}
          />
          <i className="bi bi-check-lg" onClick={handleSave}></i>
          <i className="bi bi-x-lg" onClick={handleCancel}></i>
        </>
      ) : (
        <>
          <p onClick={handleToggle}>{todo.text}</p>
          <span>{new Date(todo.date).toLocaleDateString('en-GB')}</span>
          <i className="bi bi-pencil-square" onClick={handleEdit}></i>
          <i className="bi bi-trash" onClick={handleDelete}></i>
        </>
      )}
    </div>
  );
};

export default TodoItem;
