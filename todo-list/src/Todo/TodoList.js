import TodoItem from "./TodoItem";

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

export default TodoList;