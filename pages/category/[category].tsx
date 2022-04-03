import { article } from "@prisma/client";
import Head from "next/head";
import ArticlePreview from "~/components/preview.client";
import { getArticlesByCategory } from "~/lib/queries";
import { expandCategorySlug } from "~/lib/utils";
import styles from "~/styles/category.module.scss";

import { categories } from "~/lib/constants";

interface Params {
	params: {
		category: string
	}
}

interface Props {
	category: string,
	articles: article[]
}

/*
export async function getStaticPaths() {
	return {
		paths: categories.map((category) => ({
			params: {
				category: category,
			},
		})),
		fallback: "blocking",
	};
}
*/

export async function getServerSideProps({ params }: Params) {
	// runs server side, maybe switch to static props later
	return {
		props: {
			category: params.category,
			articles: await getArticlesByCategory(params.category)
		},
	};
}

export default function Category({category, articles}: Props) {
	return(
		<div className={styles.category}>
			<Head>
				<title>{expandCategorySlug(category)} | The Tower</title>
				<meta
					property="og:title"
					content={expandCategorySlug(category) + " | The Tower"}
				/>
				<meta
					property="og:description"
					content={expandCategorySlug(category) + " at the Tower"}
				/>
			</Head>
			<h1>{expandCategorySlug(category)}</h1>
			<hr />
			<div className={styles.grid}>
				<div>
					{articles.map(article => (
						<ArticlePreview key={article.id} article={article} />
					))}
				</div>
				<div className={styles.sidebar}>
					<SidebarArticles articles={articles} />
				</div>
			</div>
		</div>
	);
}

interface SidebarProps {
	articles: article[],
}

function SidebarArticles({ articles }: SidebarProps) {
	return(
		<>
			<ArticlePreview article ={articles[0]} style="row" size="small" category />
			<ArticlePreview article ={articles[0]} style="row" size="small" category />
			<ArticlePreview article ={articles[0]} style="row" size="small" category />
			<ArticlePreview article ={articles[0]} style="row" size="small" category />
			<ArticlePreview article ={articles[0]} style="row" size="small" category />
			<ArticlePreview article ={articles[0]} style="row" size="small" category />
		</>
	);
}
