import React, { useEffect, useState } from 'react';
import PexelsContent from '../../components/Pexels/PexelsContent';
import styles from './HomeScreen.module.scss';

export default function HomeScreen({ user, pexelsData, setPexelsData }) {
	console.log(user);

	return (
		<div className={styles.home}>
			<h1 className={styles.homeMessage}>What's Your Style?</h1>
			<div className={styles.pexelsContent}>
				<PexelsContent pexelsData={pexelsData} setPexelsData={setPexelsData} />
			</div>
		</div>
	);
}
