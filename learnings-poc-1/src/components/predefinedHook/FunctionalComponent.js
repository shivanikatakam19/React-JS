import { useEffect, useState } from "react"

export function FunctionalComponent() {
    const [count, setCount] = useState(0)
    const [userData, setUserData] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(data => {
            setUserData(data)
        })
    })

    function increment() {
        setCount(count + 1)
    }

    function decrement() {
        setCount(count - 1)
    }

    return (
        <>
            <h2>Functional Component</h2>
            <h3>Count is: {count}</h3>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Company</th>
                    </tr>
                </thead>
                <tbody>
                    {userData.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.phone}</td>
                            <td>{user.email}</td>
                            <td>{`${user.address.suite}, ${user.address.street}, ${user.address.city}, ${user.address.zipcode}`}</td>
                            <td>{user.company.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}