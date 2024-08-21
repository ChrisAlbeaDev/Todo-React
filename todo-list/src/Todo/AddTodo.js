import React, { useState } from 'react';

function AddTodo({ onAddTodo }) {
    const [newTodoText, setNewTodoText] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const trimmedText = newTodoText.trim();
      if (trimmedText !== '') {
        onAddTodo(trimmedText);
        setNewTodoText('');
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" value={newTodoText} onChange={(e) => setNewTodoText(e.target.value)} />
        <button type="submit">Add Todo</button>
      </form>
    );
}

export default AddTodo;