import VirtualArchive from "~/components/VirtualArchive";
import FrontPageArticles from "~/components/FrontPageArticles";
import { article } from "@prisma/client";
import { useLoaderData } from "remix";
import { getFrontpageArticles } from "~/lib/queries";

export const loader = async () => getFrontpageArticles();

export default function Index() {
	const articles: article[] = useLoaderData();
	return (
		<div id="front-page">
			<FrontPageArticles articles={articles} />
			<VirtualArchive />
		</div>
	);
}
