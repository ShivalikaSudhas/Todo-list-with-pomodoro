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
        <option value="urgent">High</option>
        <option value="okay">Medium</option>
        <option value="time">Low</option>
      </select>

      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default TodoInput;
