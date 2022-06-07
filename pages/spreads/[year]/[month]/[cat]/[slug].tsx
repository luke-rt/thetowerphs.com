/** @format */

import { spreads } from "@prisma/client";
import { getSpread } from "~/lib/queries";

interface Props {
	spread: spreads;
}

interface Params {
	params: {
		slug: string;
	};
}

export async function getServerSideProps({ params }: Params) {
	return {
		props: {
			spread: await getSpread(params.slug),
		},
	};
}

export default function SpreadPage({ spread }: Props) {
	return (
		<div className="spread">
			<style jsx>{`
				.spread {
					display: flex;
					flex-direction: column;
					align-items: center;
				}
			`}</style>
			<h1>{spread.title}</h1>
		</div>
	);
}
