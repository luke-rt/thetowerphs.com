import { LoaderFunction, useLoaderData } from "remix";
import { getArticlesByCategory } from "~/lib/queries";
import invariant from 'tiny-invariant';
import Preview from "~/components/Preview";
import { ArticleData, expandCategorySlug } from "~/lib/utils";

export let loader: LoaderFunction = async({params}) => {
  invariant(params.category, "expected params.subcategory");

  return getArticlesByCategory(params.category);
}

export default function Category() {
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
