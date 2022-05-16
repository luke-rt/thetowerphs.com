/** @format */

import { article } from "@prisma/client";
import Head from "next/head";
import ArticlePreview from "~/components/preview.client";
import { getArticlesByCategory } from "~/lib/queries";
import { expandCategorySlug } from "~/lib/utils";
import styles from "~/styles/category.module.scss";

interface Params {
	params: {
		category: string;
	};
}

interface Props {
	category: string;
	articles: article[];
}

export async function getServerSideProps({ params }: Params) {
	return {
		props: {
			category: params.category,
			articles: await getArticlesByCategory(params.category),
		},
	};
}

export default function Category({ category, articles }: Props) {
	return (
		<div className="category">
			<Head>
				<title>{expandCategorySlug(category)} | The Tower</title>
				<meta property="og:title" content={expandCategorySlug(category) + " | The Tower"} />
				<meta property="og:description" content={expandCategorySlug(category) + " at the Tower"} />
			</Head>
			<style jsx>{`
				.category {
					max-width: 85vw;
					min-height: 100vh;
				}
				.category h1 {
					text-align: center;
					border: none;
					border-bottom: 1px solid gainsboro;
				}
				.category .grid {
					display: grid;
					grid-template-columns: 5fr 2fr;
					grid-column-gap: 2vw;
				}
				.category .grid .sidebar {
					margin-top: 2vh;
					padding-left: 1vw;
					padding-right: 1vw;
					border: none;
					border-left: 1px solid gainsboro;
					border-right: 1px solid gainsboro;
				}
			`}</style>
			<h1>{expandCategorySlug(category)}</h1>
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
