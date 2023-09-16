import styles from './MenuListItem.module.scss';

export default function MenuListItem({ menuItem, handleAddToOrder, handleLikeButton }) {
	console.log('MENUITEM', menuItem);
	return (
		<div className={styles.MenuListItem}>
			<img src={menuItem.emojiURL} className={styles.Image} width="200" height="200" />
			<div className={styles.Name}>{menuItem.name}</div>
			<div className={styles.Price}>
				<span>${menuItem.price.toFixed(2)}</span>
				<button
					className={styles.AddToCartBtn}
					onClick={() => handleAddToOrder(menuItem._id)}
				>
					ADD TO CART
				</button>
				<button onClick={() => handleLikeButton(menuItem._id)}>{"💛"}</button>
			</div>
		</div>
	);
}
