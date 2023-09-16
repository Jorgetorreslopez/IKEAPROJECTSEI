import styles from './LineItem.module.scss';

export default function LineItem({ lineItem, isPaid, handleChangeQty }) {
  const currentURL = window.location.pathname;
  const shouldShowButtons = currentURL !== '/checkout';

  return (
    <div className={styles.LineItem}>
      <div>
        <img
          src={lineItem.item.emojiURL}
          alt={lineItem.item.name}
          width="200"
          height="200"
        />
      </div>
      <div>
        <span className={styles.itemName}>{lineItem.item.name}</span>
        <span className={styles.itemPrice}>
          {lineItem.item.price.toFixed(2)}
        </span>
      </div>
      <div
        className={styles.qty}
        style={{ justifyContent: isPaid && 'center' }}
      >
        {!isPaid && shouldShowButtons && (
          <button
            className={styles.btnXS}
            onClick={() =>
              handleChangeQty(lineItem.item._id, lineItem.quantity - 1)
            }
          >
            −
          </button>
        )}
        <span className={styles.quantityLabel}>Quantity: </span>
        <span className={styles.quantity}>{lineItem.quantity}</span>
        {!isPaid && shouldShowButtons && (
          <button
            className={styles.btnXS}
            onClick={() =>
              handleChangeQty(lineItem.item._id, lineItem.quantity + 1)
            }
          >
            +
          </button>
        )}
      </div>
      <div className={styles.extPrice}>${lineItem.extPrice.toFixed(2)}</div>
    </div>
  );
}
