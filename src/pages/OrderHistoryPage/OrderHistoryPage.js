import styles from './OrderHistoryPage.module.scss';
import { useState, useEffect } from 'react';
import * as ordersAPI from '../../utilities/order-api';
import OrderList from '../../components/OrderList/OrderList';
import OrderDetail from '../../components/OrderDetail/OrderDetail';

export default function OrderHistoryPage({ user, setUser }) {
	const [orders, setOrders] = useState([]);
	const [activeOrder, setActiveOrder] = useState(null);
	const [showOrderDetail, setShowOrderDetail] = useState(false);

	useEffect(function () {
		async function fetchOrderHistory() {
			const orders = await ordersAPI.getOrderHistory();
			setOrders(orders);
			setActiveOrder(orders[0] || null);
		}
		fetchOrderHistory();
	}, []);

	function handleSelectOrder(order) {
		if (activeOrder === order) {
			setShowOrderDetail(false);
			setActiveOrder(null); 
		} else {
			setActiveOrder(order);
			setShowOrderDetail(true);
		}
	}

	return (
		<main className={styles.OrderHistoryPage}>
			<aside>
				<OrderList
					orders={orders}
					activeOrder={activeOrder}
					handleSelectOrder={handleSelectOrder}
				/>
			</aside>
			<div
				className={`${styles.OrderDetail} ${
					showOrderDetail ? styles.show : ''
				}`}
			>
				<OrderDetail order={activeOrder} />
			</div>
		</main>
	);
}
