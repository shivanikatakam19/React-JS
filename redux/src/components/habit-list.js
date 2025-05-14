import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { completeHabit, deleteHabit } from '../store/habit.slice'

export default function HabitList() {
    const { habits } = useSelector((state) => state.habits);
    const today = new Date().toISOString().split('T')[0];
    const dispatch = useDispatch();

    function getStreak(habit) {
        return habit.completedDates.length
    }

    return (
        <div>
            {habits.map((habit) => {
                return <div className='habit-card' key={habit.id}>
                    <div>
                        <div className='habit-card-title'>{habit.name}</div>
                        <span className='habit-card-frequency'>{habit.frequency}</span>
                        <div className='habit-card-streak'>Current Streak: {getStreak(habit)} days</div>
                    </div>
                    <div>
                        <button className={habit.completedDates.includes(today) ? 'habit-completed' : 'mark-complete-button'}
                            onClick={() => dispatch(completeHabit({ id: habit.id, date: today }))}>
                            {habit.completedDates.includes(today) ? "Completed" : "Mark Complete"}</button>
                        <button className='remove-button' onClick={() => dispatch(deleteHabit({ id: habit.id }))}>Remove</button>
                    </div>
                </div>
            })}
        </div>
    )
}
