import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleComplete, editTodo, deleteTodo }) => {
  return (
    <div>
      {todos.length === 0 ? (
        <p className="empty-message">Your List is empty. Would you like to add a new item?</p>
      ) : (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            editTodo={editTodo}
            deleteTodo={deleteTodo}
          />
        ))
      )}
    </div>
  );
};

export default TodoList;
