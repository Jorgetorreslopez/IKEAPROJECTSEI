import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Jobs.module.scss'

export default function Jobs() {

    return (
        <main className={styles.pic}>
            <div className={styles.job1}>
                <p>
                    After going through your browser history, we dont think you'd be a good fit at this time. Please find help.
                </p>
            </div>
        </main>
    )
}