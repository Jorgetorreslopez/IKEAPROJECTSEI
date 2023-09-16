import { Link } from 'react-router-dom';
import styles from './NavBar.module.scss';
import Logo from '../Logo/Logo';

export default function NavBar({ AboutUs, Shop, Jobs }) {
	return (
		<main>
			<section className={styles.Links}>
				<div className={styles.logo}>
					<Logo />
				</div>
				<ul>
					<li>
						<a href="/AboutUs">About Us</a>
					</li>
					<li>
						<a href="/shop">Shop</a>
					</li>
					<li>
						<a href="/Jobs">Jobs</a>
					</li>
				</ul>
			</section>
		</main>
	);
}
