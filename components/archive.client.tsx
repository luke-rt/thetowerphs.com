/** @format */

import Image from "next/image";

interface Props {
	text: string;
	href: string;
}

export default function VirtualArchive({ text, href }: Props) {
	const img = "/assets/archive.png";

	return (
		<div className="archive">
			<style jsx>{`
				.archive {
					max-width: 16vw;
					display: flexbox;
				}
				h2 {
					text-align: center;
				}
				hr {
					max-width: 16vw;
					margin: 0.5vh;
					height: 1px;
					background-color: gainsboro;
					border: none;
				}
				.thumbnail {
					position: relative;
					width: 16vw;
					height: 26vw;
				}
			`}</style>
			<div className="thumbnail">
				<a href={href} target="_blank" rel="noopener noreferrer">
					<Image src={img} alt="PDF article preview" layout="fill" blurDataURL={img} placeholder="blur" />
				</a>
			</div>
			<hr />
			<h2>{text}</h2>
		</div>
	);
}
