
import { article } from "@prisma/client";
import Head from "next/head";
import ArticlePreview from "~/components/ArticlePreview";
import { getArticlesBySubcategory } from "~/lib/queries";
import { expandCategorySlug } from "~/lib/utils";

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
		<div className="category">
			<Head>
				<title>{expandCategorySlug(subcategory)} | The Tower</title>
			</Head>
			<h1>{expandCategorySlug(subcategory)}</h1>
			{articles.map(article => (
				<ArticlePreview key={article.id} article={article} />
			))}
		</div>
	);
}
