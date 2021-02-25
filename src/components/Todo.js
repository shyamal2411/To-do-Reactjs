import React, {useState} from 'react'
import TodoFromList from './TodoForm'
import {RiCloseCircle} from  'react-icons/ri';
import {TiEdit} from  'react-icons/ti';


function Todo({todos,completeTodo}) {
    const [edit, setEdit] =useState({
        id:null,
        value: ''
    })


    return todos.map((todo,index)=>(
    <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
        <div key={todo.id} onClick={()=> complete(todo.id)}>
        {todo.text}
        </div>
        <div className="icons">
            <RiCloseCircle/>
            <TiEdit/>
        </div>
    </div>
    ))
}

export default Todo
