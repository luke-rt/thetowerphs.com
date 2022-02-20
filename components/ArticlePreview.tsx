import { article } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { displayDate, expandCategorySlug, shortenText } from "~/lib/utils";

interface Props {
  article: article,
  category?: boolean,
	style?: "box" | "row",
	size?: "small" | "medium" | "large",
}

export default function ArticlePreview({article, category, style="row", size="medium"}: Props) {
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
			<div className={"img-container " + style + " " + size}>
				<Image src={article.img} alt="Article preview" objectFit="cover" layout="fill"/>
			</div>
			<div>
				<div className="category">
					{category &&
						<Link href={ "/category/" + article.category }>{expandCategorySlug(article.category)}</Link>
					}
				</div>
				<div>
					<Link href={ "/articles/" + article.year + "/" + article.month + "/" + article.category + "/" + encodeURI(article.title)}>
						<a className={"title " + size}>{article.title}</a>
					</Link>
					{!(size === "small") &&
						<span>{ displayDate(article.year, article.month) }</span>
					}
				</div>
				<div className="authors">
					{article.authors.map((author, index) => (
						<Link key={index} href={ "/credit/" + encodeURI(author) } >{author}</Link>
					))}
				</div>
				<div className="preview-text">
					{shortenText(article.content, charlen)}
				</div>
			</div>
		</div>
	);
}
