import { LoaderFunction, MetaFunction, useLoaderData } from "remix";
import invariant from "tiny-invariant";

import { getArticlesByAuthor } from "~/lib/queries";
import Preview from "~/components/Preview";
import { ArticleData } from "~/lib/utils";

export const meta: MetaFunction = ({params}) => {
  invariant(params.slug, "expected params.slug");
  return {
    title: decodeURI(params.slug) + " | The Tower",
    description: "Read this article on thetowerphs.com",
    keywords: "newspaper, PHS, Tower"
  };
};

export let loader: LoaderFunction = async({params}) => {
  invariant(params.slug, "expected params.slug");

  return getArticlesByAuthor(params.slug);
}

export default function Credit() {
  let data: ArticleData = useLoaderData();
  return(
    <div className="credit">
      <h1>{data.slug}'s Work</h1>
      {data.articles.map(article => (
        <Preview key={article.id} article={article} category />
      ))}
    </div>
  );
}

