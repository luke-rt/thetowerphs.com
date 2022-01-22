import { LoaderFunction, useLoaderData } from "remix";
import { article } from "@prisma/client";
import { getArticlesByCategory } from "~/lib/queries";
import invariant from 'tiny-invariant';
import Preview from "~/components/Preview";

export let loader: LoaderFunction = async({params}) => {
  invariant(params.slug, "expected params.slug");

  return getArticlesByCategory(params.slug);
}

export default function Category() {
  let articles: article[] = useLoaderData();
  return(
    <div className="category">
      {articles.map(article => (
        <Preview key={article.id} article={article} />
      ))}
    </div>
  );
}
