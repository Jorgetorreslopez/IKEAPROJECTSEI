import styles from './OrderListItem.module.scss';

export default function OrderListItem({
  order,
  isSelected,
  handleSelectOrder,
  isExpanded,
}) {
  return (
    <div
      className={`${styles.OrderListItem} ${
        isSelected ? styles.selected : ''
      } `}
      onClick={() => handleSelectOrder(order)}
    >
      <div className={styles.orderInfo}>
        <div onClick={() => handleSelectOrder(order)}>
          Order Id: <span className={styles.orderId}>{order.orderId}</span>
        </div>
        <div className={styles.orderDate}>
          {new Date(order.updatedAt).toLocaleDateString()}
        </div>
      </div>
      {isExpanded && (
        <div className={styles.orderDetails}>
          <div className={styles.orderTotal}>${order.orderTotal.toFixed(2)}</div>
          <div className={styles.orderQty}>
            {order.totalQty} item{order.totalQty > 1 ? 's' : ''}
          </div>
        </div>
      )}
    </div>
  );
}
