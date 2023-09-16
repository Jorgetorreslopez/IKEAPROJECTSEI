import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as usersServices from '../../utilities/users-services';
import styles from './LoginForm.module.scss'

export default function LoginForm({ setUser }) {
	const navigate = useNavigate();

	const [credentials, setCredentials] = useState({
		email: '',
		password: ''
	});
	const [error, setError] = useState('');

	const [showPassword, setShowPassword] = useState(false);

	function handleChange(e) {
		setCredentials({ ...credentials, [e.target.name]: e.target.value });
		setError('');
	}

	async function handleSubmit(e) {
		e.preventDefault();
		try {
			const user = await usersServices.login(credentials);
			setUser(user);
			navigate('/ikea');
		} catch (error) {
			setError('Login Failed - Try Again');
		}
	}

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	return (
		<main className={styles.FormContainer}>
			<div >
				<form className={styles.Form} autoComplete="off" onSubmit={handleSubmit}>
					<label>Email: </label>
					<input className={styles.Placeholder}
						placeholder='email'
						type="text"
						name="email"
						value={credentials.email}
						onChange={handleChange}
						required
					/>
					<label>Password: </label>
					<div >
						<input className={styles.Placeholder}
							placeholder='password'
							type={showPassword ? 'text' : 'password'}
							name="password"
							value={credentials.password}
							onChange={handleChange}
							required
						/>
						<button className={styles.PeekABoo}
							type="button"
							onClick={togglePasswordVisibility}
						>
							{showPassword ? '👁️' : '👁️‍🗨️'}
						</button>
					</div>
					<button className={styles.LogInBtn} type="submit">LOG IN</button>
				</form>
			</div>
			<p className={styles.errorMessage}>{error}</p>
		</main>
	);
}
