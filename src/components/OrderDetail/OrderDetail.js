import LineItem from '../LineItem/LineItem';
import styles from "./OrderDetail.module.scss";

export default function OrderDetail({ order, handleChangeQty }) {
	console.log(order);
	if (!order) return null;

	const lineItems = order.lineItems.map((item) => (
		<LineItem
			lineItem={item}
			isPaid={order.isPaid}
			handleChangeQty={handleChangeQty}
			key={item._id}
		/>
	));

	return (
		<div>
			<div>{lineItems}</div>
		</div>
	);
}
