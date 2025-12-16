import { useState } from "react";

function TodoInput({ addTodo }) {
  const [text, setText] = useState("");
  const [priority, setPriority] = useState("time");

  function handleAdd() {
    if (text.trim() === "") return;
    addTodo(text, priority);
    setText("");
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a task bbg"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option value="urgent">High Priority Task</option>
        <option value="okay">Medium Priority Task</option>
        <option value="time">Low Priority Task</option>
      </select>

      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default TodoInput;
