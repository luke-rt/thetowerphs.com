import { Link } from "remix";
import { article } from "@prisma/client";
import { expandCategorySlug, displayDate, shortenText } from "~/lib/utils";

// box: large has 150/125 chars, medium has 100, small has only title
// row: large has 300 chars, medium has 150. small has only title
interface Props {
  article: article,
  category?: boolean,
	style?: "box" | "row", // box image on top, row image on left/right
	size?: "small" | "medium" | "large",
}

export default function Preview({article, category, style="row", size="medium"}: Props) {
	var charlen = 0;

	if(style === "box") { // BOX STYLE
		switch(size) {
			case "large":
				charlen = 200;
				break;
			case "medium":
				charlen = 100;
				break;
			case "small":
				break;
		}
	} else { // ROW STYLE
		switch(size) {
			case "large":
				charlen = 400;
				break;
			case "medium":
				charlen = 300;
				break;
			case "small":
				break;
		}
	}

	if(!article.img) article.img = "/assets/default.png";

	return(
		<div className={"article-preview " + style + " " + size}>
			<div>
				<img src={article.img} className={style + " " + size} alt="Article preview"/>
			</div>
			<div>
				<div className="category">
					{category &&
						<Link to={ "/category/" + article.category }>{expandCategorySlug(article.category)}</Link>
					}
				</div>
				<div>
					<Link to={ "/articles/" + article.year + "/" + article.month + "/" + article.category + "/" + encodeURI(article.title) } className={"title " + size}>{article.title}</Link>
					{!(size === "small") &&
						<span>{ displayDate(article.year, article.month) }</span>
					}
				</div>
				<div className="authors">
					{article.authors.map((author, index) => (
						<Link key={index} to={ "/credit/" + encodeURI(author) } >{author}</Link>
					))}
				</div>
				<div className="preview-text">
					{shortenText(article.content, charlen)}
				</div>
			</div>
		</div>
	);
}
