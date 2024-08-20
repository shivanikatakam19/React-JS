import React, { useMemo } from 'react';

function UseMemo({ a, b }) {
    const result = useMemo(() => {
        return a + b;
    }, [a, b]);

    return <div>Result: {result}</div>;
}

export default UseMemo