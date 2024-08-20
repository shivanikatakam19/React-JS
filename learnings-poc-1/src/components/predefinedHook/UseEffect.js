import React, { useEffect } from 'react';

export function UseEffect() {
    useEffect(() => {
        // Perform a side effect
        fetch('https://reqres.in/api/users/2')
            .then(response => response.json())
            .then(data => console.log(data));

        // Cleanup function
        return () => {
            console.log('Cleanup');
        };
    }, []); // Empty dependency array: run once on mount and cleanup on unmount

    return <div>Data fetched, check the console</div>;
}