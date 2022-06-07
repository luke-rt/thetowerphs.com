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
					display: grid;
					padding: 1px;
					border: none;
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
				.img-container {
					position: relative;
				}
			`}</style>
			<div className="img-container">
				<Image src="/assets/default.png" alt="Spread preview" objectFit="cover" layout="fill" blurDataURL="/assets/default.png" placeholder="blur" />
			</div>
			<section className="title">
				<Link href={"/spreads/" + spread.year + "/" + spread.month + "/vangaurd/" + encodeURI(spread.title)}>
					<a>{spread.title}</a>
				</Link>
				<span>{displayDate(spread.year, spread.month)}</span>
			</section>
		</div>
	);
}
