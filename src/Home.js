
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Home() {
	const [data, setData] = useState([])
	const navigate = useNavigate();
	useEffect(() => {
		axios.get(" http://localhost:5000/user/")
			.then(res => setData(res.data)) 
			.catch(err => console.log(err));

	}, []) 


	const handleDelete = (id) => {
		const confirm = window.confirm("Would you wish to delete? ");
		if (confirm) { 
			axios.delete('http://localhost:5000/user/' + id)
				.then(res => {
					navigate('/'); 
				}).catch(err => console.log(err));
		}

	}
	return (
		<div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
			<h1>
				List of Employees
			</h1>
			<div className='w-75 rounded bg-white boder shadow p-4'>
				<div className="d-flex justify-content-end">
					<Link to="/create" className="btn btn-success">Add +</Link>
				</div>
				<div className="flex-shrink-0 h-10 w-10">
					<img src="${profile}" class="h-10 w-10 rounded-full" alt=""></img>
				</div>
				{/* <div class="flex-shrink-0 h-10 w-10">
                    <img src="${profile}" class="h-10 w-10 rounded-full" alt="">
                </div> */}
				<table className="table table-striped ">
					<thead>
						<tr>
							<th>ID</th>
							<th>Name</th>
							<th>Surname</th>
							<th>Position</th>
							<th>Contact</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{
							data.map((d, i) => (
								<tr key={i}>
									<td>{d.id}</td>
									<td>{d.name}</td>
									<td>{d.surname}</td>
									<td>{d.position}</td>
									<td>{d.contact}</td>
									<td>
										<Link to={'/read/{$d.id}'} className="  btn btn-sa btn-info me-2">Read</Link>
										<Link to={'/update/{$d.id}'} className="  btn btn-sa btn-primary me-2">Edit</Link>
										<button onClick={e => handleDelete(d.id)} className="  btn btn-sm btn-danger">Delete</button>
									</td>
								</tr>
							))
						}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default Home;