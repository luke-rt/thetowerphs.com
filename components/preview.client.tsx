/** @format */

import { article } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { displayDate, expandCategorySlug, shortenText } from "~/lib/utils";
import CreditLink from "./credit.client";
import styles from "~/lib/styles";

interface Props {
	article: article;
	category?: boolean;
	style?: "box" | "row";
	size?: "small" | "medium" | "large";
}

export default function ArticlePreview({ article, category, style = "row", size = "medium" }: Props) {
	if (!article) return <></>;

	let charlen = 0;
	if (style === "box") {
		// BOX STYLE
		switch (size) {
			case "large":
				charlen = 200;
				break;
			case "medium":
				charlen = 100;
				break;
			case "small":
				break;
		}
	} else {
		// ROW STYLE
		switch (size) {
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

	if (!article.img) article.img = "/assets/default.png";

	return (
		<div className={"article-preview " + style + " " + size}>
			<style jsx>{`
				.article-preview a:hover {
					text-decoration: underline;
				}
				.article-preview.box {
					display: grid;
					padding: 1px;
					border: none;
					grid-template-rows: 2fr 0.25fr;
				}
				.article-preview.box.small {
					display: grid;
					padding: 1px;
					border: none;
					grid-template-rows: 2fr 0.25fr;
				}
				.article-preview.row {
					display: grid;
					padding-bottom: 1vh;
					margin-bottom: 1vh;
					border: none;
					border-bottom: 1px solid gainsboro;
					grid-template-columns: 1fr 5fr;
					grid-gap: 1vw;
				}
				.article-preview.row.small {
					grid-template-columns: 1fr 4fr;
				}
				.article-preview .img-container {
					position: relative;
					max-width: 100%;
					max-height: 100%;
				}
				.article-preview .img-container.box.large {
					height: 90vh;
				}
				.article-preview .img-container.row.large {
					width: 32vw;
				}
				.article-preview .img-container.row.medium {
					width: 12vw;
				}
				.article-preview .img-container.row.small {
					width: 10vw;
				}
				.article-preview span {
					margin-left: 1vw;
					font-size: smaller;
				}
				.article-preview .title {
					font-weight: bolder;
				}
				.article-preview .title .large {
					font-size: xx-large;
				}
				.article-preview .title .medium {
					font-size: large;
				}
				.article-preview .title .small {
					font-size: medium;
				}
				.article-preview .category {
					font-size: small;
				}
				.article-preview .preview-text {
					font-family: ${styles.font.text}, ${styles.font.stack};
					margin-top: 1vh;
					margin-bottom: 2vh;
				}
			`}</style>
			<div className={"img-container " + style + " " + size}>
				<Image src={article.img} alt="Article preview" objectFit="cover" layout="fill" blurDataURL={article.img} placeholder="blur" />
			</div>

			<div>
				<section className="category">
					{category && <Link href={"/category/" + article.category}>{expandCategorySlug(article.category)}</Link>}
				</section>

				<section className="title">
					<Link href={"/articles/" + article.year + "/" + article.month + "/" + article.category + "/" + encodeURI(article.title)}>
						<a className={size}>{article.title}</a>
					</Link>
					{!(size === "small") && <span>{displayDate(article.year, article.month)}</span>}
				</section>

				<section className="authors">
					{article.authors.map((author, index) => (
						<CreditLink key={index} author={author} small />
					))}
				</section>

				<section className="preview-text">{shortenText(article.content, charlen)}</section>
			</div>
		</div>
	);
}
