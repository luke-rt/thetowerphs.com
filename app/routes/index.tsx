import { useLoaderData } from "remix";
import { article } from "@prisma/client";

import Preview from "~/components/Preview";
import { getFrontpageArticles } from "~/lib/queries";
import VirtualArchive from "~/components/VirtualArchive";

export const loader = async () => getFrontpageArticles();

export default function Index() {
	const articles: article[] = useLoaderData();
	return (
		<div id="frontPage">
			<div className="frontpage-articles">
				{articles.map((article, index) => (
					<div key={index} className={"grid-item-" + index}>
						<Preview article={article} category />
					</div>
				))}
			</div>
			<VirtualArchive />
		</div>
	);
}
