import React, { useState, useCallback } from 'react';

function UseCallback() {
    const [count, setCount] = useState(0);

    const increment = useCallback(() => {
        setCount(count + 1);
    }, [count]);

    return (
        <div>
            <h3>Count-{count}</h3>
            <ChildComponent onClick={increment} />
        </div>
    )
}

function ChildComponent({ onClick }) {
    return <button onClick={onClick}>Increment</button>;
}

export default UseCallback