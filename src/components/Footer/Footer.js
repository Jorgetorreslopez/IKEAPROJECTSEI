//import styles from the module.scss
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';

//export function to have Project Footer Section.
export default function Footer() {
	return (
		<main className={styles.Footer}>
			<section>
				<div className={styles.fsLinks}>
					<ul>
						<li>Help</li>
						<li>
							<Link to="/Customer service">Customer service</Link>
						</li>
						<li>
							<Link to="/FAQ">FAQ</Link>
						</li>
						<li>
							<Link to="My orders">My orders</Link>
						</li>
						<li>
							<Link to="Contact Us">Contact Us</Link>
						</li>
						<li>
							<Link to="Product Recalls">Product Recalls</Link>
						</li>
						<li>
							<Link to="Return Policy">Return Policy</Link>
						</li>
						<li>
							<Link to="Warranties">Warranties</Link>
						</li>
						<li>
							<Link to="Feedback">Feedback</Link>
						</li>
					</ul>
					<ul>
						<li>Shop & Learn</li>
						<li>
							<Link to="Find a Location">Find a Location</Link>
						</li>
						<li>
							<Link to="IKEA Services">IKEA Services</Link>
						</li>
						<li>
							<Link to="IKEA Family">IKEA Family</Link>
						</li>
						<li>
							<Link to="IKEA Planning Tools">IKEA Planning Tools</Link>
						</li>
						<li>
							<Link to="IKEA Brochures">IKEA Brochures</Link>
						</li>
						<li>
							<Link to="IKEA Gift Registry">IKEA Gift Registry</Link>
						</li>
						<li>
							<Link to="Buying Guides">Buying Guides</Link>
						</li>
						<li>
							<Link to="Gift Cards">Gift Cards</Link>
						</li>
						<li>
							<Link to="IKEA Credit Card Management">
								IKEA Credit Card Management
							</Link>
						</li>
						<li>
							<Link to="IKEA Credit Cards">IKEA Credit Cards</Link>
						</li>
						<li>
							<Link to="Explore the New IKEA App">
								Explore the New IKEA Shop
							</Link>
						</li>
						<li>
							<Link to="IKEA for Business">IKEA for Business</Link>
						</li>
					</ul>
					<ul>
						<li>About IKEA</li>
						<li>
							<Link to="This is IKEA">This is IKEA</Link>
						</li>
						<li>
							<Link to="Careers">Careers</Link>
						</li>
						<li>
							<Link to="Newsroom">Newsroom</Link>
						</li>
						<li>
							<Link to="Life at Home">Life at Home</Link>
						</li>
						<li>
							<Link to="A Sustainable Everday">A Sustanable Everday</Link>
						</li>
						<li>
							<Link to="IKEA Foundation">IKEA Foundation</Link>
						</li>
						<li>
							<Link to="Safety at Home">Safety at Home</Link>
						</li>
					</ul>
					<ul>
						<li>Legal</li>
						<li>
							<Link to="Privacy & Security">Privacy & Security</Link>
						</li>
						<li>
							<Link to="Privacy Policy">Privacy Policy</Link>
						</li>
						<li>
							<Link to="Terms & Conditions">Terms & Conditions</Link>
						</li>
						<li>
							<Link to="IKEA Children's Product Registration">
								IKEA Children's Product Registration
							</Link>
						</li>
						<li>
							<Link to="IKEA SMALAND Privacy notice">
								IKEA SMALAND Privacy notice
							</Link>
						</li>
					</ul>
				</div>
				<div>
					<img
						className={styles.photo}
						src="https://i.imgur.com/QXCQIOW.png"
						width="100%"
						height="500px"
					></img>
				</div>
				<div className={styles.payLinks}>
					<img
						className={styles["hnf-payment-logo__img"]}
						src="https://www.ikea.com/global/assets/logos/external-payment-providers/visa.svg"
						alt="Visa"
					></img>
					<img
						className={styles["hnf-payment-logo__img"]}
						src="https://www.ikea.com/global/assets/logos/external-payment-providers/master-card.svg"
						alt="Mastercard"
					></img>
					<img
						className={styles["hnf-payment-logo__img"]}
						src="https://www.ikea.com/global/assets/logos/external-payment-providers/discover.svg"
						alt="Discover"
					></img>
					<img
						className={styles["hnf-payment-logo__img"]}
						src="https://www.ikea.com/global/assets/logos/external-payment-providers/american-express.svg"
						alt="Amex"
					></img>
					<img
						className={styles["hnf-payment-logo__img"]}
						src="https://www.ikea.com/global/assets/logos/external-payment-providers/ikea-credit-card.svg"
						alt="IKEA credit card"
					></img>
					<img
						className={styles["hnf-payment-logo__img"]}
						src="https://www.ikea.com/global/assets/logos/external-payment-providers/paypal.svg"
						alt="Paypal"
					></img>
					<img
						className={styles["hnf-payment-logo__img"]}
						src="https://www.ikea.com/global/assets/logos/external-payment-providers/apple-pay.svg"
						alt="Apple Pay"
					></img>
					<img
						className={styles["hnf-payment-logo__img"]}
						src="https://www.ikea.com/global/assets/logos/external-payment-providers/union-pay.svg"
						alt="Union Pay"
					></img>
					<img
						className={styles["hnf-payment-logo__img"]}
						src="https://www.ikea.com/global/assets/logos/external-payment-providers/jcb.svg"
						alt="JCB"
					></img>
					<img
						className={styles["hnf-payment-logo__img"]}
						src="https://www.ikea.com/global/assets/logos/external-payment-providers/diners-club.svg"
						alt="Diners"
					></img>
					<img
						className={styles["hnf-payment-logo__img"]}
						src="https://www.ikea.com/global/assets/logos/external-payment-providers/ikea-gift-card.svg"
						alt="IKEA gift card"
					></img>
				</div>
				<div className={styles.socials}>
					<a href="https://facebook.com/IKEAUSA" className="fa fa-facebook"></a>

					<a href="https://instagram.com/IKEAUSA" className="fa fa-instagram"></a>

					<a href="https://pinterest.com/IKEAUSA" className="fa fa-pinterest"></a>

					<a href="https://twitter.com/IKEAUSA" className="fa fa-twitter"></a>

					<a href="https://youtube.com/user/IKEAUSA" className="fa fa-youtube"></a>
				</div>
			</section>
		</main>
	);
}
