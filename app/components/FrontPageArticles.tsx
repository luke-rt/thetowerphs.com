import { article } from "@prisma/client";
import ArticlePreview from "./ArticlePreview";

interface Props {
	articles: article[]
}

export default function FrontPageArticles({articles}: Props) {
	return(
		<div id="fp-grid">
			<div id="fp-left">
				<ArticlePreview article ={articles[0]} style="box" size="small" category />

			</div>
			<div id="fp-center">
				<ArticlePreview article ={articles[0]} style="box" size="large" category />
			</div>
			<div id="fp-right">
				<ArticlePreview article ={articles[0]} style="box" size="medium" category />

			</div>
		</div>
	);
}
