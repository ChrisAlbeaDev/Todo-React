import React, { useState, useEffect } from 'react';
import TodoList from './Todo/TodoList';
import AddTodo from './Todo/AddTodo';


function App() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem('todos')) || []
  );

  useEffect(() => {
    try {
      const parsedTodos = JSON.parse(localStorage.getItem('todos')) || [];
      setTodos(parsedTodos);
    } catch (error) {
      console.error('Error parsing todos from localStorage:', error);
    }
  }, []);

  const handleAddTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const handleToggleComplete = (todoId) => {
    setTodos(
      todos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDelete = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  return (
    <div className="container mx-auto max-w-md p-4">
      <h1 className="text-3xl font-bold text-center mb-4">To-Do List</h1>
      <AddTodo onAddTodo={handleAddTodo} />
      <TodoList todos={todos} onToggleComplete={handleToggleComplete} onDelete={handleDelete} />
    </div>
  );
}

export default App;