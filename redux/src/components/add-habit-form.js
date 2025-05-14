import { useState } from "react"
import { useDispatch } from 'react-redux'
import { addHabit } from "../store/habit.slice";

export default function AddHabit() {
    const [name, setName] = useState("");
    const [frequency, setFrequency] = useState("daily");

    const dispatch = useDispatch()

    function addNewHabit(e) {
        e.preventDefault();
        if (name.trim()) {
            dispatch(addHabit({ name, frequency }));
        }
        setName("");
    }

    return (
        <form onSubmit={(e) => addNewHabit(e)}>
            <label>Habit Name</label>
            <input className="input-text" type="text" value={name} onChange={(e) => setName(e.target.value)} /><br />
            <label>Frequency</label>
            <select value={frequency} onChange={(e) => setFrequency(e.target.value)}>
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
            </select><br />
            <button type="submit" className="submit-button">Add Habit</button>
        </form>
    )
}