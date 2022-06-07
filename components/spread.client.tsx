/** @format */

import { spreads } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { displayDate } from "~/lib/utils";

interface Props {
	spread: spreads;
}

export default function Spread({ spread }: Props) {
	return (
		<div className="spread">
			<style jsx>{`
				.spread {
					max-height: 50vh;
					padding: 1px;
					border: none;
					display: grid;
					grid-template-rows: 2fr 0.25fr;
				}
				a:hover {
					text-decoration: underline;
				}
				span {
					margin-left: 1vw;
					font-size: smaller;
				}
				.title {
					font-weight: bolder;
					font-size: x-large;
				}
				.img {
					position: relative;
				}
			`}</style>
			<section className="img">
				<Image
					src="/assets/default.png"
					alt="Spread preview"
					objectFit="contain"
					layout="fill"
					blurDataURL="/assets/default.png"
					placeholder="blur"
				/>
			</section>
			<section className="title">
				<Link href={"/spreads/" + spread.year + "/" + spread.month + "/vanguard/" + encodeURI(spread.title)}>
					<a>{spread.title}</a>
				</Link>
				<span>{displayDate(spread.year, spread.month)}</span>
			</section>
		</div>
	);
}
