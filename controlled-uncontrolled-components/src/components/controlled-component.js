import { useState } from 'react'

export default function ControlledComponent() {
    const [name, setName] = useState('');

    function onSubmit() {
        alert('Name:' + name);
        setName('')
    }

    return (
        <div>
            <h4>Controlled Component</h4>
            <label>Name:<input value={name} onChange={(e) => setName(e.target.value)} /></label>
            <button onClick={onSubmit}>Submit</button>
        </div>
    )
}