import { article } from "@prisma/client";
import ArticlePreview from "~/components/ArticlePreview";
import { getFrontpageArticles } from "~/lib/queries";
import styles from "~/styles/home.module.scss";


export async function getStaticProps() {
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
		<FrontPageArticles articles={articles} />
	);
}

interface FrontPageProps {
	articles: article[]
}

function FrontPageArticles({articles}: FrontPageProps) {
	return(
		<div className={styles.frontpage}>
			<div>
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
				<ArticlePreview article ={articles[0]} style="row" size="small" category />
				<ArticlePreview article ={articles[0]} style="row" size="small" category />
			</div>
		</div>
	);
}
