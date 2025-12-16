import { useState } from "react";

function TodoItem({ todo, toggleTodo, deleteTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const priorityColor = {
    urgent: "red",
    okay: "gold",
    time: "green"
  };

  function saveEdit() {
    editTodo(todo.id, newText);
    setIsEditing(false);
  }

  return (
    <li className="todo-card">
      {/* LEFT : PRIORITY DOT */}
      <span
        className="priority-dot"
        style={{ backgroundColor: priorityColor[todo.priority] }}
      />

      {/* CENTER : TEXT AREA */}
      <div className="todo-content">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />

        {isEditing ? (
          <input
            className="edit-input"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
        ) : (
          <p
            className={`todo-text ${
              todo.completed ? "completed" : ""
            }`}
          >
            {todo.text}
          </p>
        )}
      </div>

      {/* RIGHT : ICONS */}
      <div className="todo-actions">
        {isEditing ? (
          <button onClick={saveEdit} title="Save">✔</button>
        ) : (
          <button onClick={() => setIsEditing(true)} title="Edit">✏️</button>
        )}
        <button onClick={() => deleteTodo(todo.id)} title="Delete">❌</button>
      </div>
    </li>
  );
}

export default TodoItem;
