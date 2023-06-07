import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
	const [name, nameupdate] = useState('')
	const [surname, surnameupdate] = useState('')
	const [email, emailupdate] = useState('')
	const [bio, bioupdate] = useState('')
	const [dateofbirth, dateofbirthupdate] = useState('')
	const [position, positionupdate] = useState('')
	const [contact, contactupdate] = useState('')


	const ProceedLogin = (e) => {
		e.preventDefault()
		if (validate()) {

		}

	}
	const validate = () => {
		// let result = true;
		let isproceed = true;
		let errormessage = "Enter the below commands!!! "
		if (name === '' || name === null) {
			isproceed = false;
			errormessage += 'Name'
			// result=false;
			// toast.warning('Name ');
		}
		if (surname === '' || surname === null){
			isproceed = false;
			errormessage += 'Surname, '
			// result=false;
			// toast.warning('Surname ')
		}
		if (bio === '' || bio === null){
			isproceed = false;
			errormessage += 'Bio, ';
			// result=false;
			// toast.warning('Bio ')
		}
		return isproceed;

	}
	return (
		<div className="row">
			<div className="offset-lg-3 col-lg-6">
				<form onSubmit={ProceedLogin} className="container">
					<div className="card">
						<div className="card-header">
							<h2>User Login</h2>
						</div>
						<div className="card-body">
							<label>Name <span className="errmsg ">*</span></label>
							<div className="form-group">
								<input value={name} onChange={e => nameupdate(e.target.value)} className="form-control"></input>
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
