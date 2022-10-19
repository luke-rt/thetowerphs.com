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

	if (!article.img?.includes(".")) article.img = "/assets/default.png";

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
					grid-template-rows: 2.5fr 0.5fr;
				}
				.article-preview.row {
					display: grid;
					padding-bottom: 2vh;
					margin-bottom: 2vh;
					border: none;
					border-bottom: 1px solid gainsboro;
					grid-template-columns: 1fr 5fr;
					grid-gap: 1vw;
				}
				.article-preview.row.small {
					grid-template-columns: 1fr 4fr;
				}
				.img-container {
					position: relative;
					max-width: 100%;
					max-height: 100%;
				}
				.img-container.box.large {
					height: 70vh;
				}
				.img-container.row.large {
					width: 32vw;
				}
				.img-container.row.medium {
					width: 12vw;
				}
				.img-container.row.small {
					width: 10vw;
				}
				span {
					margin-left: 1vw;
					font-size: smaller;
				}
				.title {
					font-weight: bolder;
				}
				.title .large {
					font-size: xx-large;
				}
				.title .medium {
					font-size: large;
				}
				.title .small {
					font-size: medium;
				}
				.category {
					font-size: small;
				}
				.preview-text {
					font-family: ${styles.font.text}, ${styles.font.stack};
					margin-top: 1vh;
					margin-bottom: 2vh;
				}
			`}</style>
			<div className={"img-container " + style + " " + size}>
				<Image src={article.img} alt="Article preview" objectFit="contain" layout="fill" blurDataURL={article.img} placeholder="blur" />
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
					{article.authors?.map((author, index) => (
						<CreditLink key={index} author={author} small />
					))}
				</section>

				<section className="preview-text">{shortenText(article.content, charlen)}</section>
			</div>
		</div>
	);
}
