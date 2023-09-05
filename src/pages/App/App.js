import React, { useState, useEffect } from 'react';
import {
	Routes,
	Route,
	Navigate,
	useNavigate,
	useLocation
} from 'react-router-dom';
import styles from './App.module.scss';
import { getUser, signUp } from '../../utilities/users-services';
import * as ordersAPI from '../../utilities/order-api';
import HomeScreen from '../HomeScreen/HomeScreen';

export default function App() {
	const [user, setUser] = useState(getUser());
	const [showCart, setShowCart] = useState(false);
	const [showUserPanel, setShowUserPanel] = useState(false);
	const [cart, setCart] = useState(null);
	const navigate = useNavigate();

	let location = useLocation();

	useEffect(() => {
		if (!user) {
		  createGuestUser()
		}
	  }, [])

	  async function createGuestUser() {
		const guestUserData = {
			username: 'guestuser',
			email: Math.floor(Math.random() * 100000) + '@guest.com',
			password: 'guestpassword'
		} 
		localStorage.setItem('guestuser', guestUserData.email);
		const guestUser = await signUp(guestUserData)
		setUser(guestUser)
	  }

	  useEffect(() => {
		async function getCartItems() {
			const cart = await ordersAPI.getCart()
			setCart(cart)
		}
		getCartItems()
	  }, [])

	return (
		<main>
			<HomeScreen />
		</main>
	);
}
