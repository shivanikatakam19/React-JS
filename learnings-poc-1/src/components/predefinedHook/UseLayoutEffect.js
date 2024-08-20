import React, { useLayoutEffect, useRef, useEffect } from 'react';

export function LayoutEffectExample() {
    const divRef = useRef(null);

    useEffect(() => {
        console.log('hi');
    });

    useLayoutEffect(() => {
        console.log(divRef.current.getBoundingClientRect());
    });

    return (
        <>
            <div ref={divRef} className='bg-dark'>Layout Effect Example</div>
            <h4>Dimensions</h4><hr />
            height - {divRef?.current?.getBoundingClientRect().height}<br />
            width - {divRef?.current?.getBoundingClientRect().width}
        </>
    );
}
