import { article } from "@prisma/client";
import Head from "next/head";
import ArticlePreview from "~/components/preview.client";
import { getArticlesByAuthor } from "~/lib/queries";
import styles from "~/styles/credit.module.scss";

interface Params {
	params: {
		author: string
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
			author: decodeURI(params.author),
			articles: await getArticlesByAuthor(params.author)
		},
	};
}

export default function Credit({ author, articles }: Props) {
	return(
		<div className={styles.credit}>
			<Head>
				<title>{author}&apos;s Work | The Tower</title>
				<meta
					property="og:title"
					content={author + "&apos;s Work | The Tower"}
				/>
				<meta
					property="og:description"
					content={author + "&apos;s Work at the Tower"}
				/>
			</Head>
			<h1>{author}&apos;s Work</h1>
			{articles.map(article => (
				<ArticlePreview key={article.id} article={article} category />
			))}
		</div>
	);
}
