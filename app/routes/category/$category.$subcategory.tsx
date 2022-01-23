import { LoaderFunction, useLoaderData } from "remix";
import invariant from 'tiny-invariant';
import Preview from "~/components/Preview";
import { getArticlesBySubcategory } from "~/lib/queries";
import { ArticleData, expandCategorySlug } from "~/lib/utils";

export let loader: LoaderFunction = async({params}) => {
  invariant(params.subcategory, "expected params.subcategory");

  return getArticlesBySubcategory(params.subcategory);
}

export default function Subcategory() {
  let data: ArticleData = useLoaderData();
  return(
    <div className="category">
      <h1>{expandCategorySlug(data.slug)}</h1>
      {data.articles.map(article => (
        <Preview key={article.id} article={article} />
      ))}
    </div>
  );
}
