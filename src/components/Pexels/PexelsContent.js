import React, { useEffect } from 'react';
import styles from './PexelsContent.module.scss';

function PexelsContent({ pexelsData, setPexelsData }) {
	useEffect(() => {
		fetch('http://localhost:3000/pexels')
			.then((response) => {
				if (!response.ok) {
					throw new Error(`HTTP error! Status: ${response.status}`);
				}
				return response.json();
			})
			.then((data) => {
				setPexelsData(data);
			})
			.catch((error) => {
				console.error('Error fetching Pexels data:', error);
			});
	}, []);

	const customVideoData = [
		{
			title: 'Artistic',
			description: 'Elegant environments to spark creativity.'
		},
		{ title: 'Comfy', description: 'Soothing ambience to calm the mind.' },
		{
			title: 'Bachelor/Bachelorette',
			description: 'Gotta show them you live good when you take them home.'
		},
		{
			title: 'Spacious',
			description:
				'Enough room for the entire family in case you are accident prone in bed.'
		},
		{
			title: 'What People Think Software Engineers Live Like',
			description: 'We were able to sneak inside Kanyes House to take this.'
		},
		{
			title: 'We Are Cool With America',
			description:
				'Look at the white family dance because they want to and not because we payed them to.'
		}
	];

	return (
		<div className={styles.videosContainer}>
			{pexelsData.length === 0 ? (
				<p>Loading...</p>
			) : (
				pexelsData.map(
					(
						item,
						index // Use the 'index' parameter
					) => (
						<div key={item.id}>
							<section className={styles.videoSection}>
								{item.duration && (
									<video controls autoPlay loop className={styles.video}>
										<source src={item.video_files[2].link} type="video/mp4" />{' '}
										Your browser does not support the video tag.
									</video>
								)}
								<h1 className={styles.h1}>{customVideoData[index].title}</h1>{' '}
								{/* Use 'index' to access the corresponding custom data */}
								<p className={styles.p}>
									{customVideoData[index].description}
								</p>{' '}
								{/* Use 'index' to access the corresponding custom data */}
							</section>
						</div>
					)
				)
			)}
		</div>
	);
}

export default PexelsContent;
