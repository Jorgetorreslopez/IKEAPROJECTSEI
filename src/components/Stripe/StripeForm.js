import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import * as ordersAPI from '../../utilities/order-api';
import { useNavigate } from 'react-router-dom';
import styles from './StripeForm.module.scss';


function StripeForm({ handlePayment, setCart }) {
	const stripe = useStripe();
	const elements = useElements();
	const [paymentError, setPaymentError] = useState(null);
	const navigate = useNavigate();

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (!stripe || !elements) {
			return;
		}

		const result = await stripe.createToken(elements.getElement(CardElement));

		if (result.error) {
			setPaymentError(result.error.message);
		} else {
			handlePayment(result.token);
		}
		await ordersAPI.checkout();
		setCart(null);
		navigate('/orders');
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label>
					Payment Details
					<CardElement className={styles.StripeElement} />
				</label>
			</div>
			<div>
				<button type="submit">Place Order</button>
			</div>
			{paymentError && <div>{paymentError}</div>}
		</form>
	);
}

export default StripeForm;
