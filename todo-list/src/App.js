import React, { useState, useEffect } from 'react';

function TodoCheckbox({ checked, onChange }) {
  return (
    <input type="checkbox" checked={checked} onChange={onChange} />
  );
}

function TodoItem({ todo, onToggleComplete, onDelete }) {
  const handleToggle = () => onToggleComplete(todo.id);

  return (
    <li key={todo.id}>
      <TodoCheckbox checked={todo.completed} onChange={handleToggle} />
      <span className={todo.completed ? 'completed' : ''}>{todo.text}</span>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </li>
  );
}

function TodoList({ todos, onToggleComplete, onDelete }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggleComplete={onToggleComplete}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

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

function App() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem('todos')) || []
  );

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

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
    <div>
      <h1>To-Do List</h1>
      <AddTodo onAddTodo={handleAddTodo} />
      <TodoList todos={todos} onToggleComplete={handleToggleComplete} onDelete={handleDelete} />
    </div>
  );
}

export default App;