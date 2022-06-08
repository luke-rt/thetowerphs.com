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
					min-width: 50vh;
					justify-content: left;
					padding: 1px;
					border: none;
				}
				a:hover {
					text-decoration: underline;
				}
				.title {
					font-weight: bolder;
					font-size: large;
				}
				span {
					font-size: smaller;
				}
			`}</style>
			<section className="img">
				<Image src="/assets/default.png" alt="Spread preview" width={800} height={500} blurDataURL="/assets/default.png" placeholder="blur" />
			</section>
			<section className="title">
				<Link href={"/spreads/" + spread.year + "/" + spread.month + "/vanguard/" + encodeURI(spread.title)}>
					<a>{spread.title}</a>
				</Link>
			</section>
			<span>{displayDate(spread.year, spread.month)}</span>
		</div>
	);
}
