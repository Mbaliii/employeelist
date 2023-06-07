// import { useEffect, useState } from "react";
// import { Link} from "react-router-dom";

// const Home = () => {
// 	// const usenavigate = useNavigate();
// 	const [employeelist, listupdate] = useState(null);
// 	const [displayname, displaynameupdate] = useState('');
// 	useEffect(() => {


// 		let jwttoken = sessionStorage.getItem('jwttoken');
// 		fetch("https://localhost:44308/Customer", {
// 			headers: {
// 				'Authentication': 'bearer ' + jwttoken
// 			}
// 		}).then((res) => {
// 			return res.json();
// 		}).then((resp) => {
// 			listupdate(resp);
// 		}).catch((err) => {
// 			console.log(err.messsage)
// 		});

// 	}, []);
// 	return (
// 		<div>
// 			<div className="header">
// 				<Link to={'/'}>Home</Link>
// 				<Link style={{ float: 'right' }} to={'/login'}>Login</Link>
// 			</div>
// 			<center><h1 className="text-center">Welcome to AXZ Corp</h1></center>
// 			{/* <table className="table table-bordered">
// 				<thead>
// 					<tr>
// 						<td>ID</td>
// 						<td>Image</td>
// 						<td>Name</td>
// 						<td>Surname</td>
// 						<td>Email</td>
// 						<td>Position</td>
// 						<td>Action</td>
// 					</tr>
// 				</thead>
// 				<tbody>
// 					{employeelist &&
// 						listupdate.map(item => (
// 							<tr key={item.id}>
// 								<td>{item.id}</td>
// 								<td>{item.name}</td>
// 								<td>{item.email}</td>
// 								<td>{item.creditLimit}</td>
// 							</tr>

// 						))
// 					}
// 				</tbody>

// 			</table> */}

// 		</div>
// 	);
// }

// export default Home;



import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
	const [data, setData] = useState([])
	useEffect(() => {
		axios.get(" http://localhost:5000/user") 
		.then(res => setData(res.data))
		.catch(err => console.log(err));

	}, [])
	return (
		<div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
			<h1>
				List of Employees
			</h1>
			<div className='w-75 rounded bg-white boder shadow p-4'>
				<div className="d-flex justify-content-end">
					<Link to="/create" className="btn btn-success">Add +</Link>
				</div>
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
										<button className="  btn btn-sa btn-primary me-2">Edit</button>
										<button className="  btn btn-sm btn-danger">Delete</button>
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