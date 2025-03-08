import React, { useState, useEffect } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function App() {
  // State for Dark Mode
  const [darkMode, setDarkMode] = useState(false);

  // Load theme from localStorage
  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      document.body.classList.add("dark-mode");
      setDarkMode(true);
    }
  }, []);

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
    setDarkMode(!darkMode);

    // Save user preference
    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <>
      <header>
        <button className="dark-mode-toggle" onClick={toggleDarkMode}>
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </header>
      <TodoInput />
      <TodoList />
    </>
  );
}

export default App;
