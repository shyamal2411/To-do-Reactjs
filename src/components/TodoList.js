import React,{useState} from 'react'
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {
    const [todos,setTodos]=useState([]);
    
    const addTodo = todo=>{
    //   the purpose of this function is If user types nothing but the space then it enters nothing in the list
        if(!todo.text || /^\s*$/.test(todo.text))
        {
            return 
        }
        const newTodos =[todo, ...todos]
        setTodos(newTodos);
    };

    return (
        <div>
            <h1>What's the plan for today?</h1>
            <TodoForm onSubmit={addTodo}/>
            <Todo
            // todos={todos} complete={completeTodo}
            />

        </div>
    );
}

export default TodoList
