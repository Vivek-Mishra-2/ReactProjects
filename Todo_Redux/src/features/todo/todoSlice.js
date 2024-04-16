import {createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: {}
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload,
                // isCompleted: false
            }
            // console.log(todo.text);
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
        toggleTodo: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload);
            if (todo) {
              todo.completed = !todo.completed;
            }
          },
          editTodo: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload.id);
            if (todo) {
              todo.text = action.payload.newText;
            }
          }
    }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer