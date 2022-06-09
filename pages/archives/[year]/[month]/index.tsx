/** @format */

import { article } from "@prisma/client";
import Head from "next/head";
import Mosaic from "~/components/mosaic.client";
import { getArticlesByDate } from "~/lib/queries";

interface Params {
	params: {
		year: string;
		month: string;
	};
}

export async function getServerSideProps({ params }: Params) {
	const articles: article[] = await getArticlesByDate(params.year, params.month);

	return {
		props: {
			articles,
		},
	};
}

interface Props {
	articles: article[];
}

export default function Index({ articles }: Props) {
	return (
		<div>
			<Head>
				<meta property="og:title" content="Archives | The Tower" />
				<meta property="og:description" content="The Tower is Princeton High School's newspaper club." />
			</Head>
			<Mosaic articles={articles} />
		</div>
	);
}
