import React, { useEffect, useRef } from 'react';

const YouTubeVideo = ({ videoId }) => {
	const playerRef = useRef(null);

	useEffect(() => {
		window.onYouTubeIframeAPIReady = () => {
			playerRef.current = new window.YT.Player('youtube-player', {
				videoId: videoId,
                width: 200,
                height: 60,
				events: {
					onReady: onPlayerReady
				}
			});
		};

		if (!window.YT) {
			const script = document.createElement('script');
			script.src = 'https://www.youtube.com/iframe_api';
			script.async = true;
			document.body.appendChild(script);
		}

		return () => {
			if (playerRef.current) {
				playerRef.current.destroy();
			}
		};
	}, [videoId]);

	const onPlayerReady = (event) => {
		event.target.playVideo();
	};

	return (
		<div className="youtube-video-container">
			<div className='youtubePlayer' id="youtube-player"></div>
		</div>
	);
};

export default YouTubeVideo;
