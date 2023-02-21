/**
 * eslint-disable react/jsx-key
 *
 * @format
 */

/** @format */

import { article } from "@prisma/client";
import Head from "next/head";
import Image from "next/image";
import { getArticle } from "~/lib/queries";
import { displayDate } from "~/lib/utils";
import styles from "~/lib/styles";
import CreditLink from "~/components/credit.client";

interface Props {
	article: article;
}

interface Params {
	params: {
		year: string;
		month: string;
		cat: string;
		slug: string;
	};
}

export async function getServerSideProps({ params }: Params) {
	return {
		props: {
			article: await getArticle(params.year, params.month, params.cat, params.slug),
		},
	};
}

export default function Article({ article }: Props) {
	const paragraphs = article.content.split("\n");

	return (
		<div className="article">
			<Head>
				<title>{article.title} | The Tower</title>
				<meta property="og:title" content={article.title + " | The Tower"} />
				<meta property="og:description" content="Read more about this article!" />
			</Head>
			<style jsx>{`
				.article {
					display: flex;
					flex-direction: column;
					align-items: center;
				}
				.article .main-img {
					width: 55vw;
					height: 70vh;
					position: relative;
				}
				.article .img {
					width: 48vw;
					height: 60vh;
					position: relative;
				}
				.article .content {
					margin-top: 5vh;
					max-width: 50vw;
				}
				.article .content p {
					font-family: ${styles.font.text}, ${styles.font.stack};
				}
				.article p {
					margin-top: 3vh;
				}
			`}</style>

			<h1>{article.title}</h1>

			<span>{displayDate(article.year, article.month)}</span>

			{article.authors.length > 0 && (
				<section className="authors">
					{article.authors.map((author, index) => (
						<CreditLink key={index} author={author} />
					))}
				</section>
			)}

			{article.img && (
				<section className="main-img">
					<Image src={article.img} alt="Article image" objectFit="contain" layout="fill" blurDataURL={article.img} placeholder="blur" />
				</section>
			)}

			<section className="content">
				{paragraphs.map((paragraph, index) =>
					paragraph.startsWith("@img=") ? (
						<div className="img" key={index}>
							<Image
								src={paragraph.substring(5)}
								alt="Article image"
								objectFit="contain"
								layout="fill"
								blurDataURL={article.img}
								placeholder="blur"
								key={index}
							/>
						</div>
					) : (
						<p key={index}>{paragraph}</p>
					)
				)}
			</section>
		</div>
	);
}
