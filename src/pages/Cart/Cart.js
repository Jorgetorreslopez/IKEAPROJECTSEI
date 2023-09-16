import LineItem from '../../components/LineItem/LineItem';
import { useNavigate } from 'react-router-dom';
import styles from './Cart.module.scss';

export default function Cart({ cart, handleChangeQty, user }) {
	if (!cart) return null;
	const navigate = useNavigate();

	const lineItems = cart.lineItems.map((item) => (
		<LineItem
			lineItem={item}
			isPaid={cart.isPaid}
			handleChangeQty={handleChangeQty}
			key={item._id}
		/>
	));

	function handleCheckoutClick() {
		navigate('/checkout');
	}

	function handleUserButtonClick() {
		navigate('/guestSignUp');
	}

	return (
		<div className={styles['cart-container']}>
			<div>
				<div className={styles['cart-header']}>
					<span className={styles['item-count']}>{`${cart.totalQty} item${
						cart.totalQty !== 1 ? 's' : ''
					}`}</span>
				</div>
				<div className={`${styles['line-items']} scroll-y`}>
					{lineItems.length ? (
						<>
							{lineItems}
							<section className={styles['total-section']}>
								<span>Total: ${cart.orderTotal.toFixed(2)}</span>
								{user.username === 'guestuser' ? (
									<>
										<button
											className={styles['checkout-btn']}
											onClick={handleCheckoutClick}
											disabled={!lineItems.length}
										>
											Checkout as guest
										</button>
										<button
											className={styles['checkout-btn']}
											onClick={handleUserButtonClick}
										>
											Log In/Sign Up
										</button>
									</>
								) : (
									<button
										className={styles['checkout-btn']}
										onClick={handleCheckoutClick}
									>
										Proceed to Checkout
									</button>
								)}
							</section>
						</>
					) : (
						<div className={styles['emptyCart']}>Cart Is Empty.</div>
					)}
				</div>
			</div>
		</div>
	);
}
