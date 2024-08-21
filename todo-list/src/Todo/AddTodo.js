import React, { useState } from 'react';
import validator from 'validator'
import { FaPlus } from 'react-icons/fa';

function AddTodo({ onAddTodo }) {
    const [newTodoText, setNewTodoText] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const trimmedText = newTodoText.trim();
      if (trimmedText !== '' && validator.escape(trimmedText)) { 
        onAddTodo(trimmedText);
        setNewTodoText('');
      }
    };
  
    return (
      <form onSubmit={handleSubmit} className="flex">
        <input 
          type="text" 
          value={newTodoText} 
          onChange={(e) => setNewTodoText(e.target.value)} 
          className="border rounded-md p-2 w-full"
        />
        <button 
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md ml-2"
        >
          <FaPlus />
        </button>
      </form>
    );
}

export default AddTodo;