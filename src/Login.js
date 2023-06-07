import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
	const [name, nameupdate] = useState('')
	const [surname, surnameupdate] = useState('')
	const [email, emailupdate] = useState('')
	const [bio, bioupdate] = useState('')
	const [dateofbirth, dateofbirthupdate] = useState('')
	const [position, positionupdate] = useState('')
	const [contact, contactupdate] = useState('')


	const navigate = useNavigate();


	const Isvalidate = () => {
		// let result = true;
		let isproceed = true;
		let errormessage = "Enter the commands below!!! "
		if (name === '' || name === null) {
			isproceed = false;
			errormessage += 'Name'
			// result = false;
			// toast.warning('Name ');
		}
		if (surname === '' || surname === null) {
			isproceed = false;
			errormessage += 'Surname, '
			// result = false;
			// toast.warning('Surname ')
		}
		if (bio === '' || bio === null) {
			isproceed = false;
			errormessage += 'Bio, ';
			// result = false;
			// toast.warning('Bio ')
		}
		if (dateofbirth === '' || dateofbirth === null) {
			isproceed = false;
			errormessage += 'DateOfBirth, ';
			// result = false;
			// toast.warning('Date of birth')
		}
		// if (email === '' || email === null) {
		// 	isproceed = false;
		// 	errormessage+= 'email, ';
		// 	// result = false;
		// 	// toast.warning('Email')
		// }

		if (position === '' || position === null) {
			isproceed = false;
			errormessage += 'Position, ';
			// result = false;
			// toast.warning('Position')
		}

		if (contact === '' || contact === null) {
			isproceed = false;
			errormessage += 'Contact, ';
			// result = false;
			// toast.warning('Contact')
		}

		if (!isproceed) {
			toast.warning(errormessage);
		} else {
			if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {

			} else {
				isproceed = false;
				toast.warning('Please enter a valid email ')
			}
		}
		return isproceed;

	}

	const handlesubmit = (e) => {
		e.preventDefault();
		let regobj = { name, surname, email, bio, dateofbirth, position, contact }
		if (Isvalidate()) {
			fetch("http://localhost:5000/user", {
				method: "POST",
				headers: { 'content-type': 'application/json' },
				body: JSON.stringify(regobj)
			}).then((res) => {
				toast.success('Logged In Succesfully.')
				navigate('/login')
			}).catch((err) => {
				toast.error('Failed : ' + err.message);
			});

		}

	}	// const ProceedLogin = (e) => {
	// 	e.preventDefault()
	// 	let regobj = { name, surname, email, bio, dateofbirth, position, contact}
	// 	if (validate()) {
	// 		fetch('http://localhost:5000/user/' + name).the((res)=>{
	// 			return res.json();
	// 		}).then((resp)=>{
	// 			console.log(resp)
	// 		}).catch((err)=>{
	// 			toast.error('Login')

	// 		});
	// 		// console.log('success')

	// 	}

	// }
	return (
		<div className="row">
			<div className="offset-lg-3 col-lg-6">
				<form className="container" onSubmit={handlesubmit}>
					<div className="card">
						<div className="card-header">
							<h2>User Login</h2>
						</div>
						<div className="card-body">
							<label>Name <span className="errmsg ">*</span></label>
							<div className="form-group">
								<input type="name" value={name} onChange={e => nameupdate(e.target.value)} className="form-control"></input>
							</div>
							<div className="form-group">
								<label>Surname<span className="errmsg "> *</span></label>
								<input value={surname} onChange={e => surnameupdate(e.target.value)} className="form-control"></input>
							</div>
							<div className="form-group">
								<label>Bio<span className="errmsg "> *</span></label>
								<input value={bio} onChange={e => bioupdate(e.target.value)} className="form-control"></input>
							</div>
							<div className="form-group">
								<label>Date Of Birth<span className="errmsg "> *</span></label>
								<input value={dateofbirth} onChange={e => dateofbirthupdate(e.target.value)} className="form-control"></input>
							</div>
							<div className="form-group">
								<label>Email<span className="errmsg "> *</span></label>
								<input value={email} onChange={e => emailupdate(e.target.value)} className="form-control"></input>
							</div>
							<div className="form-group">
								<label>Position<span className="errmsg "> *</span></label>
								<input value={position} onChange={e => positionupdate(e.target.value)} className="form-control"></input>
							</div>
							<div className="form-group">
								<label>Contact<span className="errmsg "> *</span></label>
								<input value={contact} onChange={e => contactupdate(e.target.value)} className="form-control"></input>
							</div>
						</div>
						<div className="card-footer">
							<button type="submit" className="btn-btn-primary">Login</button> |
							<Link className="btn bn-sucess" to={'/register'}>New User</Link>

						</div>
					</div>

				</form>
			</div>
		</div>
	);
}

export default Login;
