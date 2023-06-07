import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
	const [name, namechange] = useState("");
	const [surname, surnamechange] = useState("");
	const [email, emailchange] = useState("");
	const [bio, biochange] = useState("");
	const [dateofbirth, dateofbirthchange] = useState("");
	const [position, positionchange] = useState("");
	const [contact, contactchange] = useState("");
	const [country, countrychange] = useState("");
	const [address, addresschange] = useState("");

	const navigate = useNavigate();

	const IsValidate = () => {
		let isproceed = true;
		let errormessage = "Enter the value below!!  "
		if (name === null || name === '') {
			isproceed = false;
			errormessage += 'Name, ' ;
		}
		if (surname === null || surname === '') {
			isproceed = false;
			errormessage += 'Surname, '
		}
		if (bio === null || bio === '') {
			isproceed = false;
			errormessage += 'Bio, ';

		}
		if (contact === null || contact === ''){
			isproceed = false;
			errormessage += 'Contact, ';
		}
		if (position === null || position === ''){
			isproceed = false;
			errormessage += 'Position, ';
		}

		if (dateofbirth === null || dateofbirth === ''){
			isproceed = false;
			errormessage+= 'DateOfBirth, ';
		}
		if (!isproceed) {
			toast.warning(errormessage);
		}else{
			if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)){

			}else{
				isproceed = false;
				toast.warning('Please enter a valid email ')
			}
		}
		return isproceed
	}



	const handlesubmit = (e) => {
		e.preventDefault();
		let regobj = { name, surname, email, bio, dateofbirth, position, contact, country, address }
		// console.log(regobj);
		if (IsValidate()) {
			
		fetch("http://localhost:5000/user", {
			method: "POST",
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify(regobj)
		}).then((res) => {
			toast.success('Registered succesfully.')
			navigate('/login')

		}).catch((err) => {
			toast.error('Failed :' + err.message);
		});
	}
}
	return (
		<div>
			<div className="offset-lg-3 col-lg-6">
				<form className="container" onSubmit={handlesubmit}>
					<div className="card">
						<div className="card-header">
							<h1> User Information </h1>
						</div>

						<div className="card-body">
							<div className="row">
								<div className="col-lg-6">
									<div className="form-group">
										<label>Name <span className="errmsg">*</span></label>
										<input value={name} onChange={e => namechange(e.target.value)} className="form-control"></input>
									</div>
								</div>


								<div className="col-lg-6">
									<div className="form-group">
										<label>Surname <span className="errmsg">*</span></label>
										<input value={surname} onChange={e => surnamechange(e.target.value)} className="form-control"></input>
									</div>
								</div>

								<div className="col-lg-6">
									<div className="form-group">
										<label>Email address <span className="errmsg">*</span></label>
										<input value={email} onChange={e => emailchange(e.target.value)} className="form-control"></input>
									</div>
								</div>

								<div className="col-lg-6">
									<div className="form-group">
										<label>Bio <span className="errmsg">*</span></label>
										<input value={bio} onChange={e => biochange(e.target.value)} className="form-control"></input>
									</div>
								</div>

								<div className="col-lg-6">
									<div className="form-group">
										<label>Date Of Birth <span className="errmsg">*</span></label>
										<input value={dateofbirth} onChange={e => dateofbirthchange(e.target.value)} className="form-control"></input>
									</div>
								</div>

								<div className="col-lg-6">
									<div className="form-group">
										<label>Employee Position <span className="errmsg">*</span></label>
										<input value={position} onChange={e => positionchange(e.target.value)} className="form-control"></input>
									</div>
								</div>

								<div className="col-lg-6">
									<div className="form-group">
										<label>Contact Info <span className="errmsg">*</span></label>
										<input value={contact} onChange={e => contactchange(e.target.value)} className="form-control"></input>
									</div>
								</div>

								<div className="col-lg-6">
									<div className="form-group">
										<label>Country <span className="errmsg">*</span></label>
										<select value={country} onChange={e => countrychange(e.target.value)} className="form-control">
											<option value='china'>China</option>
											<option value='kenya'>Kenya</option>
											<option value='south africa'>South Africa </option>
										</select>
										{/* <input className="form-control"></input> */}
									</div>
								</div>

								<div className="col-lg-12">
									<div className="form-group">
										<label>Address</label>
										<textarea value={address} onChange={e => addresschange(e.target.value)} className="form-control"></textarea>
									</div>
								</div>


							</div>
							<div className="card-footer">
								<button type="submit" className="btn btn-primary" >Register</button>
								<a className="btn btn-danger">Back</a>


							</div>

						</div>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Register
