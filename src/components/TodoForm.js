import React,{useState, useEffect, useRef} from 'react'

function TodoForm(props) {
    const [input,setInput] =useState('');
    const handleChange = e=>{
        setInput(e.target.value);
    }
    const handleSubmit =e =>{
        e.preventDefault();

        props.onSubmit({
            id:Math.floor(Math.random()*1000),
            text:input
        });
       setInput('');
    };
    return (
    <form onSubmit={handleSubmit} className="todo-form">
        <input
         type="text"
         placeholder="Add a todo list item"
         value={input} 
         name='text' 
         className='todo-input'
        onChange={handleChange}     
        />
        <button className="to-do-button">
        Add todo List
        </button>
    </form>
    )
}

export default TodoForm
