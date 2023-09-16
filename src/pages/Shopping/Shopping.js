import { useState, useEffect, useRef } from 'react';
import * as itemsAPI from '../../utilities/items-api';
import * as ordersAPI from '../../utilities/order-api';
import CategoryList from '../../components/CategoryList/CategoryList';
import MenuList from '../../components/MenuList/MenuList';
import styles from './Shopping.module.scss';

export default function Shop({
	user,
	setUser,
	cart,
	setCart,
	handleLikeButton
}) {
	const [menuItems, setMenuItems] = useState([]);
	const [activeCat, setActiveCat] = useState('');
	console.log(user);

	const categoriesRef = useRef([]);

	useEffect(function () {
		async function getItems() {
			const items = await itemsAPI.getAll();
			categoriesRef.current = items.reduce((cats, item) => {
				const cat = item.category.name;
				return cats.includes(cat) ? cats : [...cats, cat];
			}, []);
			categoriesRef.current.unshift();
			setMenuItems(items);
			setActiveCat(categoriesRef.current[0]);
		}
		getItems();
		async function getCart() {
			const cart = await ordersAPI.getCart();
			setCart(cart);
		}
		getCart();
	}, []);

	async function handleAddToOrder(itemId) {
		const updatedCart = await ordersAPI.addItemToCart(itemId);
		setCart(updatedCart);
	}

	return (
		<main className={styles.ShoppingPage}>
			<div className={styles.ShopList}>
				<CategoryList
					categories={categoriesRef.current}
					activeCat={activeCat}
					setActiveCat={setActiveCat}
				/>
			</div>

			<div className={styles.MenuList}>
				<MenuList
					menuItems={menuItems.filter(
						(item) => item.category.name === activeCat
					)}
					handleAddToOrder={handleAddToOrder}
					handleLikeButton={handleLikeButton}
				/>
			</div>
		</main>
	);
}
