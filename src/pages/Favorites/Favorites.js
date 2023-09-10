import styles from './OrderHistoryPage.module.scss';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import MenuListItem from '../../components/MenuListItem/MenuListItem';

export default function FavoritesPage({ user, setUser }) {
	/*--- State --- */
	const [favorites, setFavorites] = useState([]);
	const [activeFavorites, setActiveFavorites] = useState(null);

	/*--- Side Effects --- */
	useEffect(function () {
		// Load favorites (Boolean === true)
		async function fetchFavoriteItems() {
			const favorites = await FavoriteItem.getFavoriteItems();
			setFavorites(favorites);
			// If no favorites, return null
			setActiveFavorites(favorites[0] || null);
		}
		fetchFavoriteItems();
	}, []);

	/*--- Event Handlers --- */
	function handleSelectFavorite(favorite) {
		setActiveFavorites(favorite);
	}

	/*--- Rendered UI --- */
	return (
		<main className={styles.FavoriteItem}>
			<aside>
				<NavBar />
				<Logo />
				<Footer />
				<Link to="/items/favorites">Favorites</Link>
				<UserLogOut user={user} setUser={setUser} />
			</aside>
		</main>
	);
}
