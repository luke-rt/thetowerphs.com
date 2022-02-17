import { article } from "@prisma/client";
import Head from "next/head";
import ArticlePreview from "~/components/ArticlePreview";
import { getArticlesByAuthor, getPublishedArticles } from "~/lib/queries";

interface Params {
	params: {
		slug: string
	}
}

interface Props {
	author: string,
	articles: article[]
}

export async function getServerSideProps({ params }: Params) {
	// runs server side, maybe switch to static props later
	return {
		props: {
			author: decodeURI(params.slug),
			articles: await getArticlesByAuthor(params.slug)
		},
	};
}

export default function Credit({ author, articles }: Props) {
	return(
		<div className="credit">
			<Head>
				<title>{author}&apos;s Work | The Tower</title>
			</Head>
			<h1>{author}&apos;s Work</h1>
			{articles.map(article => (
				<ArticlePreview key={article.id} article={article} category />
			))}
		</div>
	);
}
