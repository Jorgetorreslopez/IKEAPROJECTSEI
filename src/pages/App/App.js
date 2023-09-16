import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';

import styles from './App.module.scss';
import { getUser, signUp } from '../../utilities/users-services';
import * as ordersAPI from '../../utilities/order-api';
import * as ItemsAPI from '../../utilities/items-api';

import Footer from '../../components/Footer/Footer';
import UserPortal from '../../components/UserPortal/UserPortal';
import NavBar from '../../components/NavBar/NavBar';
import ChatBot from '../../components/ChatBot/ChatBot';

import HomeScreen from '../HomeScreen/HomeScreen';
import Shop from '../Shopping/Shopping';
import Cart from '../Cart/Cart';
import AuthPage from '../../pages/AuthPage/AuthPage';
import Favorites from '../../pages/Favorites/Favorites';
import Checkout from '../../pages/Checkout/Checkout';
import AboutUs from '../../pages/AboutUs/AboutUs';
import Profile from '../../pages/Profile/profile';
import Jobs from '../../pages/Jobs/Jobs';
import OrderHistory from '../../pages/OrderHistoryPage/OrderHistoryPage';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe(process.env.STRIPESPUB);

export default function App() {
	const [pexelsData, setPexelsData] = useState([]);
	const [user, setUser] = useState(getUser());
	const [cart, setCart] = useState(null);
	const [favorites, setFavorites] = useState([]);

	// useEffect(() => {
	// 	if (!user) {
	// 		createGuestUser();
	// 	}
	// }, []);

	async function createGuestUser() {
		const guestUserData = {
			username: 'guestuser',
			email: Math.round(Math.random() * 1000000000000) + '@guest.com',
			password: 'guestpassword'
		};
		localStorage.setItem('guestuser', guestUserData.email);
		const guestUser = await signUp(guestUserData);
		setUser(guestUser);
		console.log('Guest user created', guestUser);
	}

	useEffect(() => {
		async function getCartItems() {
			const cart = await ordersAPI.getCart();
			setCart(cart);
		}
		getCartItems();
	}, []);

	useEffect(function () {
        async function fetchFavoriteItems() {
            const favorites = await ItemsAPI.getFavorites();
            setFavorites(favorites);
        }
        fetchFavoriteItems();
    }, []);

	async function handleChangeQty(itemId, newQty) {
		const updatedCart = await ordersAPI.setItemQtyInCart(itemId, newQty);
		setCart(updatedCart);
	}

	async function handleLikeButton(itemId) {
		const currentURL = window.location.href;
		console.log('HANDLELIKEBUTTON', itemId);
		if (currentURL.includes('/favorites')) {
			async function removeFavorite(itemId) {
				const updatedFavorites = await ItemsAPI.removeFromFavorites(itemId);
				setFavorites(updatedFavorites);
				const favorites = await ItemsAPI.getFavorites();
            setFavorites(favorites);
				
			}
			removeFavorite(itemId);
		} else {
			if (currentURL.includes('/shop')) {
				async function addFavorite(itemId) {
					console.log('ITEMID ITEMID!', itemId);
					const updatedFavorites = await ItemsAPI.addToFavorites(itemId);
					setFavorites(updatedFavorites);
				}
				addFavorite(itemId);
			}
		}
	}

	return (
		<Elements stripe={stripePromise}>
			<main className={styles.App}>
				<NavBar />
				<UserPortal
					user={user}
					setUser={setUser}
					setCart={setCart}
					cart={cart}
					createGuestUser={createGuestUser}
				/>
				<Routes>
					<Route
						path="/ikea"
						element={
							<HomeScreen
								user={user}
								setUser={setUser}
								pexelsData={pexelsData}
								setPexelsData={setPexelsData}
							/>
						}
					/>
					<Route
						path="/favorites"
						element={
							<Favorites
								user={user}
								handleLikeButton={handleLikeButton}
								favorites={favorites}
								setFavorites={setFavorites}
								setCart={setCart}
							/>
						}
					/>
					<Route
						path="/shop"
						element={<Shop cart={cart} setCart={setCart} handleLikeButton={handleLikeButton} />}
					/>
					<Route
						path="/checkout"
						element={
							<Checkout
								user={user}
								cart={cart}
								order={cart}
								setCart={setCart}
							/>
						}
					/>
					<Route
						path="/guestSignUp"
						element={
							<AuthPage
								user={user}
								setUser={setUser}
								cart={cart}
								setCart={setCart}
							/>
						}
					/>
					<Route
						path="/cart"
						element={
							<Cart
								handleChangeQty={handleChangeQty}
								user={user}
								setUser={setUser}
								cart={cart}
								setCart={setCart}
							/>
						}
					/>
					<Route
						path="/profile"
						element={<Profile user={user} setUser={setUser} />}
					/>
					<Route path="/orders" element={<OrderHistory />} />
					<Route path="/AboutUs" element={<AboutUs  />} />
					<Route path="/Jobs" element={<Jobs />} />
					<Route path="/*" element={<Navigate to="/ikea" />} />
				</Routes>
				<ChatBot />
				<Footer />
			</main>
		</Elements>
	);
}
