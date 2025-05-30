// hooks are resuale java script functions. we can use them for the code which is reusable
// they can be used in other components
// cleaner and maintainable code

import { useEffect, useState } from "react";

export default function GetWindowSize() {
    const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight })

    useEffect(() => {
        const handleResize = () => setSize({ width: window.innerWidth, height: window.innerHeight });
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    })

    return size;
}