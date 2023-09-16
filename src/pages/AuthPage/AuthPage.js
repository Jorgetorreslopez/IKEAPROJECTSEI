import { useState } from 'react';
import styles from './AuthPage.module.scss';
import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';

export default function AuthPage({ setUser, user, cart, setCart }) {
	const [showLogin, setShowLogin] = useState(true);
	const [userLoggedIn, setUserLoggedIn] = useState(false);

	return (
		<div className={styles.AuthPage}>
			<img
				src="https://www.ikea.com/images/a-colorful-living-room-with-a-sofa-and-a-chaise-lounge-in-or-00751d1b036ac33f4730ffbc32c08cc9.jpg?f=xxxl"
				width="750"
				height="424"
				className={styles.OrangePhoto}
			></img>
			<img
				src="https://www.ikea.com/images/an-open-plan-living-and-dining-area-with-two-beige-brown-soe-133a1ded0c1bbe120e42820301753083.jpg?f=xxxl"
				width="720"
				height="424"
			></img>
			{user.isLoggedIn ? (
				<div className={styles.LoggedIn}>
					<h1>Welcome, {user.username}! Not to sound rude but you are already signed in DA. That stands for Doofus Almighty btw.</h1>
				</div>
			) : (
				<div className={styles.GuestUser}>
					<h1>Welcome to our website!</h1>
					<p>You are currently a guest user. Please sign up or log in.</p>
					<main>
						<div>
							<h3
								className={styles.SLBtn}
								onClick={() => setShowLogin(!showLogin)}
							>
								{showLogin ? 'SIGN UP' : 'LOG IN'}
							</h3>
						</div>
						{showLogin ? (
							<LoginForm setUser={setUser} />
						) : (
							<SignUpForm setUserLoggedIn={setUserLoggedIn} setUser={setUser} />
						)}
					</main>
				</div>
			)}
		</div>
	);
}
