import React, { useState, useReducer } from 'react';
import { initialState, todoReducer } from '../reducers/reducer';
import Todo from './Todo';

const TodoList = () => {
    const [state, dispatch] = useReducer(todoReducer, initialState);
    const [newTodoItem, setNewTodoItem] = useState ('');

    const handleChange = e => {
        setNewTodoItem(e.target.value);
    }
    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: "ADD_TODOITEM", payload: newTodoItem });
        setNewTodoItem('');
    };

    const handleDelete = e => {
        e.preventDefault();
        dispatch({ type: 'CLEAR_DONE' });
    }

    const handleToggle = e =>{
        e.preventDefault();
        dispatch({ type: 'TOGGLE_DONE', payload: e.target.id })
    }

    return(
        <div>
            <form>
                <label> Add Item To Do: </label>
                <input
                id='todo'
                name='todo'
                onChange={handleChange}
                value={newTodoItem}
                />
            </form>

            <button onClick={handleSubmit}>Add Item To Do</button>
            <button onClick={handleDelete}>Clear Completed Items</button>
            <Todo state={state} handleToggle = {handleToggle} />

        </div>
    )
}

export default TodoList;