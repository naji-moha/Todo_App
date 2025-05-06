import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import axios from "axios";

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);
  const [isSorted, setIsSorted] = useState(false); // Renamed for clarity

  // Fetch todos
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/todos");
        setTodos(res.data);
      } catch (err) {
        console.error("Fetch error:", err);
      }
    };
    fetchTodos();
  }, []);

  // Add todo
  const addTodo = async (todo) => {
    try {
      const res = await axios.post("http://localhost:5000/api/todos", todo);
      setTodos([...todos, res.data]);
    } catch (err) {
      console.error("Add error:", err);
    }
  };

  // Edit todo
  const editTodo = async (id, updatedTodo) => {
    try {
      const res = await axios.put(
        `http://localhost:5000/api/todos/${id}`,
        { text: updatedTodo.text, time: updatedTodo.time }
      );
      setTodos(todos.map(todo => (todo._id === id ? res.data : todo)));
    } catch (err) {
      console.error("Edit error:", err);
    }
  };

  // Delete todo
  const deleteTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/todos/${id}`);
      setTodos(todos.filter(todo => todo._id !== id));
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  // Sort todos by time
  const sortedTodos = [...todos].sort((a, b) => {
    if (!isSorted) return 0;
    return a.time.localeCompare(b.time);
  });

  return (
    <div className="todo-wrapper">
      <h1>Todo List</h1>
      <button 
        onClick={() => setIsSorted(!isSorted)}
        className={isSorted ? "sorted" : "unsorted"}
      >
        {isSorted ? "✓ Sorted by Time" : "Unsorted"}
      </button>
      <TodoForm addTodo={addTodo} />
      <div className="tasks-container">
        {sortedTodos.map(todo => (
          <Todo
            key={todo._id}
            todo={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoWrapper;