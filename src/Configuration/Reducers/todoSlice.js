import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: 'Todos',
    initialState: {
        todo: []
    },
    reducers: {
        addtodo: (state, action) => {
            state.todo.push({
                title: action.payload.title,
                id: nanoid()
            });
        },
        deleteTodo: (state, action) => {
            state.todo = state.todo.filter(todo => todo.id !== action.payload.id);
        },
        editTodo: (state, action) => {
            const { id, title } = action.payload;
            const existingTodo = state.todo.find(todo => todo.id === id);
            if (existingTodo) {
                existingTodo.title = title;
            }
        }
    }
});

export const { addtodo, deleteTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;