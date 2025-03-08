import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList() {
    let todos =[
        'Do SWE326-HW3',
        'Go to the gym',
        'Attend SWE363 meeting'
    ]
  return (
    <ul className='main'>
        {todos.map((todo,index)=>{
            return (
            <TodoCard key={index}>
                <p>{todo}</p>
            </TodoCard>
            )
        })}
    </ul>
  )
}
