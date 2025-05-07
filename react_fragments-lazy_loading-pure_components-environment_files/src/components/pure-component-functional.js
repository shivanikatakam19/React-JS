import { memo } from "react"

export const GreetingMemo = memo(function GreetingMemo({ name }) {
    console.log('pure functional component', new Date().toLocaleString())
    return <div>Hello {name}!</div>
})
