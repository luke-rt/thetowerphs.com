/** @format */

import { article } from "@prisma/client";
import Head from "next/head";
import ArticlePreview from "~/components/preview.client";
import { getFrontpageArticles } from "~/lib/queries";

export async function getServerSideProps() {
	const articles = await getFrontpageArticles();

	return {
		props: {
			articles,
		},
	};
}

interface Props {
	articles: { [name: string]: article[] };
}

export default function FrontPage({ articles }: Props) {
	return (
		<div>
			<style jsx>{`
				.mosaic {
					display: grid;
					grid-gap: 10px;
				}
				.double {
					display: grid;
					grid-gap: 10px;
					grid-template-columns: 1fr 1fr;
				}
			`}</style>
			<Head>
				<meta property="og:title" content="Home | The Tower" />
				<meta property="og:description" content="The Tower is Princeton High School's newspaper club." />
			</Head>
			<div className="mosaic">
				<div className="one double">
					<NewsFeatures {...articles["news-features"]} />
					<Opinions {...articles["opinions"]} />
				</div>
				<div className="three double">
					<ArtsEntertainment {...articles["arts-entertainment"]} />
					<Sports {...articles["sports"]} />
				</div>
			</div>
		</div>
	);
}

export function NewsFeatures(articles: article[]) {
	return (
		<div className="newfe">
			<style jsx>{`
				.double {
					display: grid;
					grid-gap: 10px;
					grid-template-columns: 1fr 1fr;
				}
			`}</style>
			<ArticlePreview article={articles[0]} style="box" size="large" category />
			<div className="double">
				<ArticlePreview article={articles[1]} style="box" size="small" category />
				<ArticlePreview article={articles[2]} style="box" size="small" category />
			</div>
		</div>
	);
}

export function Opinions(articles: article[]) {
	return (
		<div className="opinions">
			<style jsx>{``}</style>
			<div className="opinons">
				<ArticlePreview article={articles[0]} style="box" size="medium" category />
				<div>
					<ArticlePreview article={articles[1]} style="row" size="medium" category />
					<ArticlePreview article={articles[2]} style="row" size="medium" category />
					<ArticlePreview article={articles[3]} style="row" size="medium" category />
				</div>
			</div>
		</div>
	);
}

export function ArtsEntertainment(articles: article[]) {
	return (
		<div className="ane">
			<style jsx>{``}</style>
			<div className="ane">
				<ArticlePreview article={articles[0]} style="box" size="large" category />
				<div>
					<ArticlePreview article={articles[1]} style="row" size="medium" category />
				</div>
			</div>
		</div>
	);
}

export function Sports(articles: article[]) {
	return (
		<div className="ane">
			<style jsx>{`
				.double {
					display: grid;
					grid-gap: 10px;
					grid-template-columns: 1fr 1fr;
				}
			`}</style>
			<div className="sports">
				<ArticlePreview article={articles[0]} style="box" size="large" category />
				<div className="double">
					<ArticlePreview article={articles[1]} style="box" size="small" category />
					<ArticlePreview article={articles[2]} style="box" size="small" category />
					<ArticlePreview article={articles[3]} style="box" size="small" category />
					<ArticlePreview article={articles[4]} style="box" size="small" category />
				</div>
			</div>
		</div>
	);
}
