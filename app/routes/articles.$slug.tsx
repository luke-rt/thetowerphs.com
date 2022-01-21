import { LoaderFunction, useLoaderData } from "remix";
import { article } from "@prisma/client";
import invariant from 'tiny-invariant';

import { getArticleById } from "~/lib/queries";

export let loader: LoaderFunction = async({params}) => {
  invariant(params.slug, "expected params.slug");
  return getArticleById(params.slug);
}

export default function Article() {
  let article: article = useLoaderData();
  return (
    <div className="article">
      <h1 className="title">{article.title}</h1>

    </div>

  );
}
