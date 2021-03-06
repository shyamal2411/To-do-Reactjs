import React,{useState} from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {
    const [todos,setTodos]=useState([]);
    
    const addTodo = todo=>{
    //   the purpose of this function is If user types nothing but the space then it enters nothing in the list
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return ;
        }

        const newTodos =[todo, ...todos]
        setTodos(newTodos);
        console.log(...todos);
    };

    //!Updating list Function.
    const updateTodo =(todoId,newValue) =>{
          if(!newValue.text || /^\s*$/.test(newValue.text)) {
            return ;
        };
        setTodos(prev => prev.map(item=>(item.id===todoId ? newValue : item)));
    
};

    const removeTodo =id=>{
        const removedArr =[...todos].filter(todo=>todo.id !==id);

        setTodos(removedArr);
    };


    const completeTodo = id=>{
        let updatedTodos = todos.map(todo => {
            if(todo.id === id){
                todo.isComplete=!todo.isComplete;
            }
            return todo;
            });
            setTodos(updatedTodos); 
    };

    return (
        <div>
            <h1>What are we doing today?</h1>
            <TodoForm onSubmit={addTodo}/>
            <Todo
            todos={todos} 
            complete={completeTodo}
            removeTodo={removeTodo}
            updateTodo={updateTodo}
            />
        </div>
    );
}

export default TodoList;
