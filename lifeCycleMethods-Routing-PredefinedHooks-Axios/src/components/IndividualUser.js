import { useEffect, useState } from "react"
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom'

export function UserDetails() {

    const { id } = useParams()

    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://reqres.in/api/users/${id}`);
                setData(response.data.data);
                console.log(response.data.data)
            } catch (err) {
                setError(err);
            }
        };
        fetchData();
    }, [])

    function navigateToUsers() {
        navigate('/users')
    }

    return (
        <div className="text-center user-profile">
            <img src={data.avatar} />
            <div className="row w-100 justify-content-center ">
                <div className="col-md-1 offset-1">
                    <p>Name:</p>
                    <p>Email:</p>
                </div>
                <div className="col-md-2 d-grid text-start">
                    <p>{data.first_name + ' ' + data.last_name}</p>
                    <p>{data.email}</p>
                </div>
            </div>
            <button onClick={navigateToUsers} className="btn btn-primary">Back</button>
        </div>
    )
}