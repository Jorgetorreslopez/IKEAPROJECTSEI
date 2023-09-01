import styles from './UserLogOut.module.scss'
import { logOut } from '../../utilities/users-services'

export default function UserLogOut({ user, createGuestUser, /*toggleShowUserSidePanel*/ }) {

    function handleLogOut() {
        logOut()

        // toggleShowUserSidePanel() would go here if we did add a side panel containing the users info

        createGuestUser()// make a new guest user so they can enjoy none of the perks of membership
    }

    return (
        < div className={styles.UserLogOut}>
            <div>{user.name}</div>
            <div className={styles.email}>{user.email}</div>
            <button className='logout-btn' onClick={handleLogOut}>Log Out</button>
        </div>
    )
}