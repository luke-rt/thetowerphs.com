import { article } from "@prisma/client";
import Head from "next/head";
import ArticlePreview from "~/components/ArticlePreview";
import { getArticlesBySubcategory } from "~/lib/queries";
import { expandCategorySlug } from "~/lib/utils";
import styles from "~/styles/category.module.scss";

interface Params {
	params: {
		subcategory: string
	}
}

interface Props {
	subcategory: string,
	articles: article[]
}

export async function getServerSideProps({ params }: Params) {
	// runs server side, maybe switch to static props later
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
			{articles.map(article => (
				<ArticlePreview key={article.id} article={article} />
			))}
		</div>
	);
}
