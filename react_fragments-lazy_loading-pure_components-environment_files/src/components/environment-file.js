import { useEffect, useState } from 'react'

export default function ApiFetch() {
    const [todo, setData] = useState('')

    useEffect(() => {
        fetch(process.env.REACT_APP_API_URL + '1').then(response => response.json()).then(data => {
            setData(data)
        })
    })

    return (
        <div>
            <h4>Environmental Files</h4>
            <label>Todo Name: {todo.title}</label>
            <label>Environment Variable: {process.env.REACT_APP_API_URL}</label>
        </div>
    )
}