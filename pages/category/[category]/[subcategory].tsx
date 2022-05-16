/** @format */

import { article } from "@prisma/client";
import Head from "next/head";
import ArticlePreview from "~/components/preview.client";
import { getArticlesBySubcategory } from "~/lib/queries";
import { expandCategorySlug } from "~/lib/utils";
import styles from "~/styles/category.module.scss";

interface Params {
	params: {
		subcategory: string;
	};
}

interface Props {
	subcategory: string;
	articles: article[];
}

export async function getServerSideProps({ params }: Params) {
	return {
		props: {
			subcategory: params.subcategory,
			articles: await getArticlesBySubcategory(params.subcategory),
		},
	};
}

export default function Subcategory({ subcategory, articles }: Props) {
	return (
		<div className="subcategory">
			<Head>
				<title>{expandCategorySlug(subcategory)} | The Tower</title>
				<meta property="og:title" content={expandCategorySlug(subcategory) + " | The Tower"} />
				<meta
					property="og:description"
					content={expandCategorySlug(subcategory) + " at the Tower"}
				/>
			</Head>
			<style jsx>{`
				.subcategory {
					max-width: 85vw;
					min-height: 100vh;
				}
				.subcategory h1 {
					text-align: center;
					border: none;
					border-bottom: 1px solid gainsboro;
				}
				.subcategory .grid {
					display: grid;
					grid-template-columns: 5fr 2fr;
					grid-column-gap: 2vw;
				}
				.subcategory .grid .sidebar {
					margin-top: 2vh;
					padding-left: 1vw;
					padding-right: 1vw;
					border: none;
					border-left: 1px solid gainsboro;
					border-right: 1px solid gainsboro;
				}
			`}</style>
			<h1>{expandCategorySlug(subcategory)}</h1>
			<hr />
			<div className="grid">
				<div>
					{articles.map(article => (
						<ArticlePreview key={article.id} article={article} />
					))}
				</div>
				<div className="sidebar">
					<SidebarArticles articles={articles} />
				</div>
			</div>
		</div>
	);
}

interface SidebarProps {
	articles: article[];
}

function SidebarArticles({ articles }: SidebarProps) {
	return (
		<>
			<ArticlePreview article={articles[0]} style="row" size="small" category />
			<ArticlePreview article={articles[0]} style="row" size="small" category />
			<ArticlePreview article={articles[0]} style="row" size="small" category />
			<ArticlePreview article={articles[0]} style="row" size="small" category />
			<ArticlePreview article={articles[0]} style="row" size="small" category />
			<ArticlePreview article={articles[0]} style="row" size="small" category />
		</>
	);
}
