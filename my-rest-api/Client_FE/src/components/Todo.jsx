import React, { useState } from "react";

const Todo = ({ todo, deleteTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);
  const [newTime, setNewTime] = useState(todo.time);

  const handleSave = async () => {
    try {
      await editTodo(todo._id, { text: newText, time: newTime });
      setIsEditing(false);
    } catch (err) {
      console.error("Edit failed:", err);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteTodo(todo._id);
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  return (
    <div className="todo-item-box">
      {isEditing ? (
        <div className="todo-item">
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <input
            type="time"
            value={newTime}
            onChange={(e) => setNewTime(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div className="todo-item">
          <div className="task-text">
            <div className="task-title">{todo.text}</div>
            <div className="task-time">{todo.time}</div>
          </div>
          <div>
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Todo;
