import TodoCheckbox from "./TodoCheckbox";
import { FaTimes } from 'react-icons/fa';

function TodoItem({ todo, onToggleComplete, onDelete }) {
    const handleToggle = () => onToggleComplete(todo.id);
  
    return (
      <li key={todo.id}>
        <TodoCheckbox checked={todo.completed} onChange={handleToggle} />
        <span className={todo.completed ? 'completed' : ''}>{todo.text}</span>
        <button onClick={() => onDelete(todo.id)}>
          <FaTimes className="text-red-500" />
        </button>
      </li>
    );
}

export default TodoItem;