import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios  from "axios";

function Create() {
    const [values, setValues] = useState({
        name: "",
        surname: "",
        bio: "",
        dateofbirth: "",
        position: "",
        contact: "",
        email: ""

    })
    const navigate = useNavigate();


    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:5000/user', values)
            .then(res => {
                console.log(res);
                navigate('/')
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <div className="d-flex w-100 justify-content-center align-items-center bg-light">
                <div className="w-50 border bg-white chadow px-5 pt-3 pb-5 rounded">
                    <h1>User Employee</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-2">
                            <label htmlFor="name">Name:</label>
                            <input type="text" name="name" className="form-control" placeholder="Enter you name"
                                onChange={e => setValues({ ...values, name: e.target.value })} />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="surname">Surname:</label>
                            <input type="text" name="Surname" className="form-control" placeholder="Enter you surname"
                                onChange={e => setValues({ ...values, surname: e.target.value })} />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="bio">Bio:</label>
                            <input type="text" name="bio" className="form-control" placeholder="Enter you bio"
                                onChange={e => setValues({ ...values, bio: e.target.value })} />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="dob">Date of birth:</label>
                            <input type="text" name="dob" className="form-control" placeholder="Enter you DOB"
                                onChange={e => setValues({ ...values, dob: e.target.value })} />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="position">Position:</label>
                            <input type="text" name="position" className="form-control" placeholder="Enter you position"
                                onChange={e => setValues({ ...values, position: e.target.value })} />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="email">Email:</label>
                            <input type="text" name="email" className="form-control" placeholder="Enter Email"
                                onChange={e => setValues({ ...values, email: e.target.value })} />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="email">Phone:</label>
                            <input type="texy" name="phone" className="form-control" placeholder="Enter phone number"
                                onChange={e => setValues({ ...values, phone: e.target.value })} />
                        </div>
                        <button className="btn btn-success">Submit</button>
                        <Link to="/" className="btn btn-primary ms-3">Back</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Create;