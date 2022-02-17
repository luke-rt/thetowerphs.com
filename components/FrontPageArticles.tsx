import { article } from "@prisma/client";
import ArticlePreview from "~/components/ArticlePreview";

interface Props {
	articles: article[]
}

export default function FrontPageArticles({articles}: Props) {
	return(
		<div id="fp-grid">
			<div>
				<ArticlePreview article ={articles[0]} style="box" size="small" category />
				<ArticlePreview article ={articles[0]} style="box" size="small" category />
				<ArticlePreview article ={articles[0]} style="box" size="small" category />
				<ArticlePreview article ={articles[0]} style="box" size="small" category />
				<ArticlePreview article ={articles[0]} style="box" size="small" category />
			</div>
			<div>
				<ArticlePreview article ={articles[0]} style="box" size="large" category />

				<div className="column">
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
				<ArticlePreview article ={articles[0]} style="row" size="small" category />
				<ArticlePreview article ={articles[0]} style="row" size="small" category />
			</div>
		</div>
	);
}
