import { useRef } from "react";
import WithOutForwardRef, { MyInput } from './forwardRef'

export default function Form() {
    const inputRef = useRef(null);
    const inputRef2 = useRef(null)

    function handleClick() {
        inputRef.current.focus();
    }

    function handleClick2() {
        inputRef2.current.focus();
    }

    return (
        <div style={{ display: "grid", justifyItems: "center" }}>
            <MyInput label="With using forwardRef: " ref={inputRef} />
            <button onClick={handleClick}>Edit</button>
            <WithOutForwardRef label="Without using forwardRef: " ref={inputRef2} />
            <button onClick={handleClick2}>Edit</button>
        </div>
    )
}