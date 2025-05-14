// features/users/userSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk for fetching data
export const fetchTodos = createAsyncThunk('todos/getTodos', async () => {
    const res = await fetch('https://dummyjson.com/todos?limit=10&skip=10');
    if (!res.ok) throw new Error('Failed to fetch todos');
    return await res.json();
});

export const addTodo = createAsyncThunk('todo/addTodo', async () => {
    const res = await fetch('https://dummyjson.com/todos?limit=10&skip=10', {
        method: "POST",
        headers: "application/json",
        body: JSON.stringify({
            todo: 'Complete Redux',
            complted: false,
            userId: 5
        })
    });
    if (!res.ok) throw new Error('Failed to add todo');
    return await res.json();
});

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchTodos.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.loading = false;
                state.todos = action.payload.todos;
            })
            .addCase(fetchTodos.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            }).addCase(addTodo.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addTodo.fulfilled, (state, action) => {
                state.loading = false;
                state.todos.push(action.payload);
            })
            .addCase(addTodo.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export default todoSlice.reducer;
