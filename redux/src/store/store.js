import { configureStore } from '@reduxjs/toolkit'
import habitRecucer from './habit.slice'
import todoReducer from './todo.slice'

export const HabitStore = configureStore({
    reducer: {
        habits: habitRecucer,
        todos: todoReducer
    },
})