import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './ChatBot.module.scss';
import Music from '../Music/Music'

function Chatbot() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleChat = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className={styles.chatbotWrapper}>
			<div
				className={`${styles.chatbot} ${isOpen ? styles.open : styles.closed}`}
			>
				<div className={styles.chatboxContainer}>
					<div className={styles.chatHeader}>
						<p>Relax, How Can I Help You?:</p>
						<Music videoId="7nMsw5twDLs" />
					</div>
					<div className="chatLinks">
		
						<ul>
							<li>
								<Link to="/ikea">Take Me Home</Link>
							</li>
							<li>
								<Link to="/shop">Take Me Shopping</Link>
							</li>
							<li>
								<Link to="/checkout">Take My Money</Link>
							</li>
							<li>
								<Link to="/guestSignUp">Sign Me In</Link>
							</li>
							<li>
								<Link to="/cart">View My Cart</Link>
							</li>
							<li>
								<Link to="/AboutUs">What Is IKEA</Link>
							</li>
							<li>
								<Link to="/orders">View Order History</Link>
							</li>
							<li>
								<Link to="/Jobs">Explore Job Opportunities</Link>
							</li>
							<li>
								<a href="https://www.youtube.com/watch?v=oHg5SJYRHA0">
									Get Rewards
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<button className={styles.toggleButton} onClick={toggleChat}>
				🎧Help🎧
			</button>
		</div>
	);
}

export default Chatbot;
