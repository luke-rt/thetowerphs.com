import { article } from "@prisma/client";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { getArticle, getPublishedArticles } from "~/lib/queries";
import { displayDate } from "~/lib/utils";
import styles from "~/styles/article.module.scss";

interface Props {
	article: article
}

interface Params {
	params: {
		year: string,
		month: string,
		cat: string,
		slug: string,
	},
}

export async function getStaticPaths() {
	const articles: article[] = await getPublishedArticles();

	return {
		paths: articles.map((article) => ({
			params: {
				year: article.year.toString(),
				month: article.month.toString(),
				cat: article.category,
				slug: encodeURI(article.title),
			},
		})),
		fallback: "blocking",
	};
}


export async function getStaticProps({ params }: Params) {
	return {
		props: {
			article: await getArticle(params.year, params.month, params.cat, params.slug)
		},
	};
}

export default function Article({article}: Props) {
	const paragraphs = article.content.split("\n");

	return (
		<div className={styles.article}>
			<Head>
				<title>{ article.title } | The Tower</title>
				<meta
					property="og:title"
					content={article.title + " | The Tower"}
				/>
				<meta
					property="og:description"
					content="Read more about this article!"
				/>
			</Head>
			<h1>{ article.title }</h1>
			<span>{ displayDate(article.year, article.month) }</span>
			<div className={styles.authors}>
				{article.authors.map((author, index) => (
					<Link key={index} href={ "/credit/" + encodeURI(author) } >{author}</Link>
				))}
			</div>
			<div className={styles.img}>
				<Image src={article.img} alt="Article image" objectFit="contain" layout="fill" blurDataURL={article.img} placeholder="blur" />
			</div>
			<div className={styles.content}>
				{paragraphs.map((paragraph, index) => (
					<p key={index}>{paragraph}</p>
				))}
			</div>
		</div>
	);
}
