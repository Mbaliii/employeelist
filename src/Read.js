
import React, { useEffect, useState } from "react";

import axios from "axios";
import { Link, useParams } from "react-router-dom";


function Read() {
    const [data, setData] = useState([])
    const { id } = useParams();
    useEffect(() => {
        axios.get(" http://localhost:5000/user/" + id)
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, [])
    return (
        <div className="d-flex w-100 vh-100 justify-conyent-center aligh-items-center bg-light">
            <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
                <h3>Details of the users</h3>
                <div className="mb-2">
                    <strong>Name: {data.name}</strong>
                </div>
                <div className="mb-2">
                    <strong>Surname: {data.surname}</strong>
                </div>
                <div className="mb-2">
                    <strong>email: {data.emaol}</strong>
                </div>
                <div className="mb-2">
                    <strong>Contact: {data.contact}</strong>
                </div>
                <div className="mb-2">
                    <strong>Bio: {data.bio}</strong>
                </div>
                <div className="mb-2">
                    <strong>Dateofbirth: {data.dateofbirth}</strong>
                </div>
                <div className="mb-2">
                    <strong>Position: {data.position  }</strong>
                </div>
                <Link to={"/update/${id }"} className="btn btn-sa btn-primary ms-3">Edit</Link>
                <Link to="/" className="btn btn-primary ms-3">Back</Link>
                


            </div>

        </div>
    )
}

export default Read;