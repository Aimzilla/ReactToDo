import React from 'react';
import TextField from '@material-ui/core/TextField';
import { useState } from 'react';
import { useInputState } from './useInputState';


const TodoForm = ({ saveTodo }) => {
    const { value, reset, onChange } = useInputState('');


    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();

                saveTodo(value);
                reset();
            }}
        >
            <TextField 
                variant="outlined" 
                placeholder="Create item to do" 
                margin="normal"
                onChange={onChange}
                value={value}
            />
        </form>
    );
};

export default TodoForm;