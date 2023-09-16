import React, { useState } from 'react';
import { signUp, login } from '../../utilities/users-services';
import { useNavigate } from 'react-router-dom';
import styles from './SignUpForm.module.scss'

function SignUpForm({ setUserLoggedIn, setUser }) {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		username: '',
		email: '',
		password: '',
		confirm: '',
		error: ''
	});

	const handleChange = (evt) => {
		setFormData({
			...formData,
			[evt.target.name]: evt.target.value,
			error: ''
		});
	};

	const handleSubmit = async (evt) => {
		evt.preventDefault();
		try {
			const credentials = {
				email: formData.email,
				password: formData.password
			};

			const usernameInUppercase = formData.username.toUpperCase();
			setFormData({
				...formData,
				username: usernameInUppercase
			  });

			const newUser = await signUp(formData);
			setUser(newUser);

			const loggedInUser = await login(credentials);
			setUser(loggedInUser);

			setUserLoggedIn(true);

			navigate('/');
		} catch (error) {
			console.error('Sign Up and Login Failed:', error);
			setFormData({
				...formData,
				error: 'Sign Up and Login Failed - Please try again.'
			});
		}
	};

	const disable = formData.password !== formData.confirm;

	return (
		<main className={styles.SignUpForm}>
			<form className={styles.SForm} autoComplete="off" onSubmit={handleSubmit}>
				<label>Username: </label>
				<input className={styles.Placeholder}
					placeholder='Username'
					type="text"
					name="username"
					value={formData.username}
					onChange={handleChange}
					required
				/>
				<label>Email: </label>
				<input className={styles.Placeholder}
					placeholder='Email'
					type="email"
					name="email"
					value={formData.email}
					onChange={handleChange}
					required
				/>
				<label>Password: </label>
				<input className={styles.Placeholder}
					placeholder='Password'
					type="password"
					name="password"
					value={formData.password}
					onChange={handleChange}
					required
				/>
				<label>Confirm Password: </label>
				<input className={styles.Placeholder}
					placeholder='Confirm Password'
					type="password"
					name="confirm"
					value={formData.confirm}
					onChange={handleChange}
					required
				/>
				<button className={styles.SignUpBtn} type="submit" disabled={disable}>
					SIGN UP
				</button>
			</form>

			<p className={styles.errorMessage}>&nbsp;{formData.error}</p>
		</main>
	);
}

export default SignUpForm;
