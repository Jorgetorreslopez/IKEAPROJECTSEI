import styles from './UserPortal.module.scss';
import { useState } from 'react';
import { Link, Navigate, useNavigate} from 'react-router-dom';
import { logOut } from '../../utilities/users-services';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';
export default function UserPortal({
    user,
    setUser,
    cart,
    setCart,
    createGuestUser
}) {
    const navigate = useNavigate()
    function handleLogOut() {
        logOut();
        setCart(null);
        createGuestUser();
        navigate('/ikea')
    }
    return (
        <div className={styles.PortalContainer}>
            {!user ? (
                createGuestUser()
            ) : user.username !== 'guestuser' ? (
                <div className={styles.UserPortal}>
                    <Link to="/profile" className={styles.LSBtn}>
                        Hey, {user.username}
                    </Link>
                    <Link to="/favorites" className={styles.LSBtn}>
                        <FontAwesomeIcon icon={faHeart} />
                    </Link>
                    <Link to="/cart" className={styles.CBtn}>
                        <FontAwesomeIcon icon={faShoppingCart} />
                        {cart ? `(${cart.totalQty})` : '(0)'}
                    </Link>
                    <button
                        className={styles.LOBtn}
                        // element={<Navigate to="/ikea" />}
                        onClick={handleLogOut}
                    >
                        Log Out
                    </button>
                </div>
            ) : (
                <div className={styles.UserPortal}>
                    <Link to="/guestSignUp" className={styles.LSBtn}>
                        Login / Signup
                    </Link>
                    <Link to="/cart" className={styles.CBtn}>
                        <FontAwesomeIcon icon={faShoppingCart} />
                        {cart ? `(${cart.totalQty})` : '(0)'}
                    </Link>
                </div>
            )}
        </div>
    );
}
