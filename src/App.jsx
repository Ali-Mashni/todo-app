import React, { useState, useEffect } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function App() {
  // define the list of to todos using useState
  const [todos,setTodos]=useState([
    'Do HW3',
    'Go to the gym',
    'Attend meeting'])
  // State for Dark Mode
  const [darkMode, setDarkMode] = useState(false);

  const [todo, setTodo] = useState("");

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

  function handleAddTodos(newTodo){
    setTodos(previtems=>{
      return [...previtems,newTodo]
    })
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    })
    
    setTodos(newTodoList)
  }

  function handleEditTodo(index) {
    const valueToBeEdited = todos[index]
    setTodo(valueToBeEdited)
    handleDeleteTodo(index)
  }

  return (
    <>
      <header>
        <button className="dark-mode-toggle" onClick={toggleDarkMode}>
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </header>
      <TodoInput todo={todo} setTodo ={setTodo} handleAddTodos={handleAddTodos}/>
      <TodoList handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo} todos={todos}/>
    </>
  );
}

export default App;
