import React, { useContext } from 'react';
const ThemeContext = React.createContext('light');

function UseContext() {
    const theme = useContext(ThemeContext);
    return <div className={`theme-${theme}`}>Current theme: {theme}</div>;
}

export default UseContext