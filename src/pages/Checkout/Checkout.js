import React, { useState } from 'react';
import styles from './Checkout.module.scss';
import * as ordersAPI from '../../utilities/order-api';
import { useNavigate } from 'react-router-dom';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import StripeForm from '../../components/Stripe/StripeForm';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.STRIPESPUB);

export default function Checkout({ user, order, cart, setCart }) {
	const navigate = useNavigate();

	const randomTaxRate = Math.random() * (0.1 - 0.05) + 0.05;
	const randomTaxAmount = cart ? cart.orderTotal * randomTaxRate : 0;
	const totalIncludingTax = cart ? cart.orderTotal + randomTaxAmount : 0;

	async function handleCheckout() {
		await ordersAPI.checkout();
		setCart(null);
		navigate('/orders');
	}

	function handleUserButtonClick() {
		navigate('/cart');
	}

	async function handlePayment(token) {
		try {
			const response = await ordersAPI.processPayment(token);
			if (response.ok) {
				const data = await response.json();
				console.log(data);
				setCart(null);
				navigate('/orders');
			} else {
				console.error('Payment failed');
			}
		} catch (error) {
			console.error('Error:', error);
		}
	}

	return (
		<Elements stripe={stripePromise}>
			<div className={styles.checkoutContainer}>
				<OrderDetail
					className={styles.orderDetail}
					order={cart}
					handleCheckout={handleCheckout}
				/>
				<div className={styles.orderSummary}>
					{order && (
						<section className={styles.total}>
							<span className={styles.totalQty}>
								{`${order.totalQty} item${order.totalQty !== 1 ? 's' : ''}`}
							</span>
							<span className={styles.totalPrice}>
								Order Total: ${order.orderTotal.toFixed(2)}
							</span>
							<span className={styles.taxPrice}>
								Tax: ${randomTaxAmount.toFixed(2)} (
								{(randomTaxRate * 100).toFixed(2)}%)
							</span>
							<span className={styles.totalIncludingTax}>
								Total (Including Tax): ${totalIncludingTax.toFixed(2)}
							</span>
						</section>
					)}
					<div className={styles.userAction}>
						<button
							className={styles.loginButton}
							onClick={handleUserButtonClick}
						>
							Back to cart
						</button>
					</div>
					<div className={styles.paymentSection}>
						<StripeForm
							setCart={setCart}
							handlePayment={handlePayment}
							className={styles.stripeForm}
						/>
					</div>
				</div>
			</div>
		</Elements>
	);
}
