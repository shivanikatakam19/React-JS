import { useState, useDebugValue, useEffect } from 'react';

export function UseDebugValue(friendID) {
    const [isOnline, setIsOnline] = useState(null);

    // Show a label in React DevTools
    useDebugValue(isOnline ? 'Online' : 'Offline');

    // Mock logic for setting online status
    // In a real app, this would be an API call or similar
    // For now, we'll just use a timeout to simulate an async operation
    useEffect(() => {
        setTimeout(() => {
            setIsOnline(Math.random() > 0.5);
        }, 2000)
    }, [Math.random()]);

    return isOnline
}

export function IsFriendOnline() {
    const isOnline = UseDebugValue();
    return (
        <div>
            <h1>{isOnline ? 'You are online' : 'You are offline'}</h1>
        </div>
    );
}