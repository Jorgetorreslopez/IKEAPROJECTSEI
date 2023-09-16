//import styles from the module.scss
import styles from './Logo.module.scss'
import { useState } from 'react';
import { Link } from 'react-router-dom';
//export function to have Project title
export default function Logo() {
    const [animation, setAnimation] = useState('')
    return (
        <div className={animation}>
            <div className={styles.Logo}
                onMouseEnter={
                    e => {
                        setAnimation('animate__animated animate__tada animate__infinite')
                    }
                }
                onMouseLeave={
                    e => {
                        setAnimation('')
                    }
                }
            >
                <div>
                 <Link className={styles.logoText} to="/"> IKEA </Link>
                </div>
            </div>
        </div>
    );
}
