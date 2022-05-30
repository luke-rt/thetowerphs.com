import { LoaderFunction, MetaFunction, useLoaderData } from "remix";
import { getArticlesByCategory } from "~/lib/queries";
import invariant from "tiny-invariant";
import Preview from "~/components/Preview";
import { ArticleData, expandCategorySlug } from "~/lib/utils";

export const meta: MetaFunction = ({params}) => {
	invariant(params.category, "expected params.category");
	return {
		title: expandCategorySlug(params.category) + " | The Tower",
		description: "Browse this category at thetowerphs.com",
		keywords: "newspaper, PHS, Tower"
	};
};

export const loader: LoaderFunction = async({params}) => {
	invariant(params.category, "expected params.subcategory");

	return getArticlesByCategory(params.category);
};

export default function Category() {
	const data: ArticleData = useLoaderData();
	return(
		<div className="category">
			<h1>{expandCategorySlug(data.slug)}</h1>
			{data.articles.map(article => (
				<Preview key={article.id} article={article} />
			))}
		</div>
	);
}
