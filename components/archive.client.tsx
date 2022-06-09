/** @format */

import Image from "next/image";
import Link from "next/link";
import { months } from "~/lib/constants";

interface Props {
	month: number;
	year: number;
}

export default function VirtualArchive({ month, year }: Props) {
	const img = "/assets/default.png";

	return (
		<div className="archive">
			<style jsx>{`
				.archive {
					max-width: 26vw;
					display: flexbox;
					cursor: pointer;
				}
				h2 {
					text-align: center;
				}
				hr {
					max-width: 26vw;
					margin: 0.5vh;
					height: 1px;
					background-color: gainsboro;
					border: none;
				}
				.thumbnail {
					position: relative;
					width: 25vw;
					height: 20vw;
				}
			`}</style>
			<div className="thumbnail">
				<Link href={`/archives/${year}/${month}`}>
					<Image src={img} alt="PDF article preview" layout="fill" blurDataURL={img} placeholder="blur" />
				</Link>
			</div>
			<hr />
			<h2>{`${months[month]} ${year}`}</h2>
		</div>
	);
}
