import { article } from "@prisma/client";
import Head from "next/head";
import ArticlePreview from "~/components/preview.client";
import { getArticlesBySubcategory } from "~/lib/queries";
import { expandCategorySlug } from "~/lib/utils";
import styles from "~/styles/category.module.scss";

import { subcategories } from "~/lib/constants";

interface Params {
	params: {
		subcategory: string
	}
}

interface Props {
	subcategory: string,
	articles: article[]
}
/*
export async function getStaticPaths() {
	return {
		paths: subcategories.map((subcategory) => ({
			params: {
				category: subcategory[0],
				subcategory: subcategory[1],
			},
		})),
		fallback: "blocking",
	};
}
*/
export async function getServerSideProps({ params }: Params) {
	return {
		props: {
			subcategory: params.subcategory,
			articles: await getArticlesBySubcategory(params.subcategory)
		},
	};
}

export default function Subcategory({subcategory, articles}: Props) {
	return(
		<div className={styles.category}>
			<Head>
				<title>{expandCategorySlug(subcategory)} | The Tower</title>
				<meta
					property="og:title"
					content={expandCategorySlug(subcategory) + " | The Tower"}
				/>
				<meta
					property="og:description"
					content={expandCategorySlug(subcategory) + " at the Tower"}
				/>
			</Head>
			<h1>{expandCategorySlug(subcategory)}</h1>
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
