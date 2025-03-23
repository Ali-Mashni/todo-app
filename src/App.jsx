import React, { useState, useEffect } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function App() {
  // State for Todos
  const [todos, setTodos] = useState([
    "Do HW3",
    "Go to the gym",
    "Attend meeting",
  ]);

  // State for Dark Mode (default to dark mode)
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage for a saved theme preference
    const savedTheme = localStorage.getItem("theme");
    // Default to dark mode if no preference found
    return savedTheme ? savedTheme === "dark" : true;
  });

  // State for Todo Input
  const [todo, setTodo] = useState("");

  // Apply the theme on initial load
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
    // Save the theme preference
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  function handleAddTodos(newTodo) {
    setTodos((prevItems) => [...prevItems, newTodo]);
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((_, todoIndex) => todoIndex !== index);
    setTodos(newTodoList);
  }

  function handleEditTodo(index) {
    const valueToBeEdited = todos[index];
    setTodo(valueToBeEdited);
    handleDeleteTodo(index);
  }

  return (
    <>
      <header>
        <button className="dark-mode-toggle" onClick={toggleDarkMode}>
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </header>
      <TodoInput todo={todo} setTodo={setTodo} handleAddTodos={handleAddTodos} />
      <TodoList
        handleEditTodo={handleEditTodo}
        handleDeleteTodo={handleDeleteTodo}
        todos={todos}
      />
    </>
  );
}

export default App;
