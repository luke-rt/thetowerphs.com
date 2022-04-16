import { article } from "@prisma/client";
import Head from "next/head";
import ArticlePreview from "~/components/preview.client";
import { getFrontpageArticles } from "~/lib/queries";
import styles from "~/styles/home.module.scss";


export async function getServerSideProps() {
	const articles: article[] = await getFrontpageArticles();

	return {
		props: {
			articles,
		},
	};
}

interface Props {
	articles: article[]
}

export default function Index({ articles }: Props) {
	return (
		<div>
			<Head>
				<meta
					property="og:title"
					content="Home | The Tower"
				/>
				<meta
					property="og:description"
					content="The Tower is Princeton High School's newspaper club."
				/>
			</Head>
			<FrontPageArticles articles={articles} />
		</div>
	);
}

interface FrontPageProps {
	articles: article[]
}

function FrontPageArticles({articles}: FrontPageProps) {
	// TODO
	return(
		<div className={styles.frontpage}>
			<div>
				<ArticlePreview article ={articles[0]} style="box" size="small" category />
				<ArticlePreview article ={articles[0]} style="box" size="small" category />
				<ArticlePreview article ={articles[0]} style="box" size="small" category />
				<ArticlePreview article ={articles[0]} style="box" size="small" category />
				<ArticlePreview article ={articles[0]} style="box" size="small" category />
			</div>
			<div>
				<ArticlePreview article ={articles[0]} style="box" size="large" category />
				<div className={styles.column}>
					<ArticlePreview article ={articles[0]} style="box" size="medium" category />
					<ArticlePreview article ={articles[0]} style="box" size="medium" category />
				</div>
			</div>
			<div>
				<ArticlePreview article ={articles[0]} style="box" size="medium" category />
				<ArticlePreview article ={articles[0]} style="row" size="small" category />
				<ArticlePreview article ={articles[0]} style="row" size="small" category />
				<ArticlePreview article ={articles[0]} style="row" size="small" category />
				<ArticlePreview article ={articles[0]} style="row" size="small" category />
				<ArticlePreview article ={articles[0]} style="box" size="medium" category />
			</div>
		</div>
	);
}
