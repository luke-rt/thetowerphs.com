/** @format */

import { article } from "@prisma/client";
import Head from "next/head";
import ArticlePreview from "~/components/preview.client";
import { getFrontpageArticles } from "~/lib/queries";

export async function getServerSideProps() {
	const articles: article[] = await getFrontpageArticles();

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
				<meta property="og:title" content="Home | The Tower" />
				<meta property="og:description" content="The Tower is Princeton High School's newspaper club." />
			</Head>
			<FrontPageArticles articles={articles} />
		</div>
	);
}

interface FrontPageProps {
	articles: article[];
}

function FrontPageArticles({ articles }: FrontPageProps) {
	// TODO
	return (
		<div className="front-page">
			<style jsx>{`
				.front-page {
					min-height: 100vh;
					display: grid;
					grid-template-columns: 1fr 4fr 2fr;
					grid-column-gap: 2vw;
				}
				.column {
					display: grid;
					grid-template-columns: 1fr 1fr;
					grid-column-gap: 2vw;
				}
			`}</style>
			<div>
				<ArticlePreview article={articles[0]} style="box" size="small" category />
				<ArticlePreview article={articles[0]} style="box" size="small" category />
				<ArticlePreview article={articles[0]} style="box" size="small" category />
				<ArticlePreview article={articles[0]} style="box" size="small" category />
				<ArticlePreview article={articles[0]} style="box" size="small" category />
			</div>
			<div>
				<ArticlePreview article={articles[0]} style="box" size="large" category />
				<div className="column">
					<ArticlePreview article={articles[0]} style="box" size="medium" category />
					<ArticlePreview article={articles[0]} style="box" size="medium" category />
				</div>
			</div>
			<div>
				<ArticlePreview article={articles[0]} style="box" size="medium" category />
				<ArticlePreview article={articles[0]} style="row" size="small" category />
				<ArticlePreview article={articles[0]} style="row" size="small" category />
				<ArticlePreview article={articles[0]} style="row" size="small" category />
				<ArticlePreview article={articles[0]} style="row" size="small" category />
				<ArticlePreview article={articles[0]} style="box" size="medium" category />
			</div>
		</div>
	);
}
