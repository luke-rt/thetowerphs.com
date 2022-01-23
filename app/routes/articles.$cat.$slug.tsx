import { Link, LoaderFunction, MetaFunction, useLoaderData } from "remix";
import { article } from "@prisma/client";
import invariant from "tiny-invariant";

import { getArticle } from "~/lib/queries";

export const meta: MetaFunction = ({data}) => {
	return {
		title: data.title + " | The Tower",
		description: "Read this article on thetowerphs.com",
		keywords: "newspaper, PHS, Tower"
	};
};

export const loader: LoaderFunction = async({params}) => {
	invariant(params.cat, "expected params.cat");
	invariant(params.slug, "expected params.slug");

	return getArticle(params.cat, params.slug);
};

export default function Article() {
	const article: article = useLoaderData();
	const paragraphs = article.content.split("\n");

	return (
		<div className="article">
			<h1 className="title">{ article.title }</h1>
			<div className="authors">
				{article.authors.map((author, index) => (
					<Link key={index} to={ "/credit/" + encodeURI(author) } >{author}</Link>
				))}
			</div>
			<div className="article-content">
				{paragraphs.map((paragraph, index) => (
					<p key={index}>{paragraph}</p>
				))}
			</div>
		</div>
	);
}
