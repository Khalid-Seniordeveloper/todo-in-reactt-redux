import React, { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addtodo, deleteTodo, editTodo } from './Configuration/Reducers/todoSlice';

function App() {
    const inputRef = useRef();
    const dispatch = useDispatch();
    const todoList = useSelector(state => state.todos.todo);



    const addTodoInRedux = (event) => {
          event.preventDefault()
          console.log("todo added", inputRef.current.value)
          dispatch(addtodo({
            title: inputRef.current.value
          }))
        }



    const removeTodo = (id) => {
        dispatch(deleteTodo({ id }));
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>My Todo List</h1>
            <form onSubmit={addTodoInRedux} style={{ marginBottom: '20px' }}>
                <input
                    type="text"
                    placeholder='add todo'
                    ref={inputRef}
                    style={{ marginRight: '10px' }}
                />
                <button type='submit'>ADD</button>
            </form>

            <ul>
                {todoList.map(item => (
                    <li key={item.id} style={{ marginBottom: '10px' }}>
                        <span style={{ marginRight: '10px' }}>{item.title}</span>
                        
                        <button onClick={() => removeTodo(item.id)} style={{ marginLeft: '10px' }}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
