

export default function TodoInput(props){
    const {handleAddTodos,todo,setTodo}=props
    function handleChangeInput(event){
        setTodo(event.target.value)
    }
    return (
        <header>
            <input type="text" name="todo" id="todo" value={todo} placeholder="Enter Todo..." onChange={handleChangeInput}/>
            <button onClick={()=>{
                handleAddTodos(todo)
                setTodo("")
            }}>Add</button>
        </header>
    )
        
    
}