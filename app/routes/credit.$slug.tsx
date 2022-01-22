import { LoaderFunction, useLoaderData } from "remix";
import { article } from "@prisma/client";
import invariant from "tiny-invariant";

import { getArticlesByAuthor } from "~/lib/queries";
import Preview from "~/components/Preview";

export let loader: LoaderFunction = async({params}) => {
  invariant(params.slug, "expected params.slug");

  return getArticlesByAuthor(params.slug);
}

export default function Credit() {
  let articles: article[] = useLoaderData();
  return(
    <div className="credit">
      {articles.map(article => (
        <Preview key={article.id} article={article} />
      ))}
    </div>
  );
}

