import { article } from "@prisma/client";
import ArticlePreview from "~/components/ArticlePreview";

import styles from "~/styles/frontpage.module.scss";

interface Props {
	articles: article[]
}

export default function FrontPageArticles({articles}: Props) {
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
