import { Link, LoaderFunction, MetaFunction, useLoaderData } from "remix";
import { article } from "@prisma/client";
import invariant from 'tiny-invariant';

import { getArticleById } from "~/lib/queries";

export const meta: MetaFunction = ({data}) => {
  return {
    title: data.title + " | The Tower",
    description: "Read this article on thetowerphs.com",
    keywords: "newspaper, PHS, Tower"
  };
};

export let loader: LoaderFunction = async({params}) => {
  invariant(params.slug, "expected params.slug");
  return getArticleById(params.slug);
}

export default function Article() {
  let article: article = useLoaderData();
  const paragraphs = article.content.split('\n');

  return (
    <div className="article">
      <h1 className="title">{ article.title }</h1>
      <div className="authors">
        By
        {article.authors.map(author => (
            <Link to={ "/credit/" + encodeURI(author) } >{author}</Link>
        ))}
      </div>
      <div className="article-content">
        {paragraphs.map(paragraph => (
          <p>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}
