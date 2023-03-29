/** @format */

interface Props {
	link: string;
	title: string;
}

export default function Video({ link, title }: Props) {
	let fullLink = "https://www.youtube.com/embed/" + link + "?color=white&modestbranding=1&rel=0";
	return (
		<div className="video_embed">
			<style jsx>{`
				.video_embed {
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					margin-bottom: 2vh;
				}
				.video_container {
					width: 100%;
					height: 0;
					padding-bottom: 56.25%;
					position: relative;
				}
				.video_container iframe {
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
				}
			`}</style>
			<div className="video_container">
				<iframe
					width="100%"
					src={fullLink}
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowFullScreen
					frameBorder={0}
				></iframe>
			</div>
			<h3>{title}</h3>
		</div>
	);
}
