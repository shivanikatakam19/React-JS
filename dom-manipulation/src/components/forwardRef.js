// but in react version above 19 we need not to use the forwardRef we can directly pass the input ref to the child as props

import { forwardRef } from 'react';

// using forwardRef
export const MyInput = forwardRef(function MyInput(props, ref) {
    const { label } = props;
    return (
        <label>
            {label}
            <input ref={ref} />
        </label>
    );
});

// without using forwardRef
export default function WithOutForwardRef({ ref, label }) {
    return (
        <label>
            {label}
            <input ref={ref} />
        </label>
    )
}