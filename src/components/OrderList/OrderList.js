import styles from './OrderList.module.scss';
import OrderListItem from '../OrderListItem/OrderListItem';
import { useState } from 'react';

export default function OrderList({ orders, activeOrder, handleSelectOrder }) {
  const [expandedOrders, setExpandedOrders] = useState({});

  const toggleOrderDetails = (orderId) => {
    setExpandedOrders((prevState) => ({
      ...prevState,
      [orderId]: !prevState[orderId],
    }));
  };

  const orderItems = orders.map((o) => (
    <OrderListItem
      key={o._id}
      order={o}
      isSelected={o === activeOrder}
      handleSelectOrder={handleSelectOrder}
      isExpanded={expandedOrders[o.orderId]} 
    />
  ));

  return (
    <main className={styles.OrderList}>
      {orderItems.length ? (
        orderItems
      ) : (
        <span className={styles.noOrders}>No Previous Orders</span>
      )}
    </main>
  );
}
