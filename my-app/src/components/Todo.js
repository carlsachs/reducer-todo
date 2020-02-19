import React from 'react';

const Todo = ({ state, handleToggle }) => {

    return(
        <div>
            {state.map(todo =>{
                return <p id={todo.id} onClick={handleToggle}> 
                To Do: {todo.item} Completed: {String(todo.completed)}</p>
            })}
        </div>
    )
};

export default Todo;