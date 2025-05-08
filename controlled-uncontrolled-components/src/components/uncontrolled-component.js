import { useRef } from "react";

export default function UncontrolledComponent() {
    const nameRef = useRef(null);

    function handleSubmit() {
        alert('Name is ' + nameRef.current.value)
    }

    return (
        <div>
            <h4>Uncontrolled Component</h4>
            <label>Name: <input type="text" name="name" ref={nameRef} /></label>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}