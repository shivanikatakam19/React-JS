import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuid } from 'uuid'

export const habitSlice = createSlice({
    name: 'habits',
    initialState: {
        habits: []
    },
    reducers: {
        addHabit: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes.
            // Also, no return statement is required from these functions.
            const uniqueId = uuid();
            const newHabit = {
                id: uniqueId,
                name: action.payload.name.replace(/^./, action.payload.name[0].toUpperCase()),
                frequency: action.payload.frequency.replace(/^./, action.payload.frequency[0].toUpperCase()),
                completedDates: [],
                createdAt: new Date().toISOString()
            }
            // pushing the habit into a habits array
            state.habits.push(newHabit)
        },
        completeHabit: (state, action) => {
            const habit = state.habits.find((habit) => habit.id === action.payload.id)
            if (habit) {
                const index = habit.completedDates.indexOf(action.payload.date)
                if (index > -1)
                    habit.completedDates.splice(index, 1)
                else
                    habit.completedDates.push(action.payload.date)
            }
        },
        deleteHabit: (state, action) => {
            const index = state.habits.findIndex((habit) => habit.id === action.payload.id)
            if (index > -1) {
                state.habits.splice(index, 1)
            }
        }
    },
})

// Action creators are generated for each case reducer function
export const { addHabit, deleteHabit, completeHabit } = habitSlice.actions

export default habitSlice.reducer