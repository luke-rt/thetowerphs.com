import FrontPage from "~/components/FrontPage";
import { article } from "@prisma/client";
import { getFrontpageArticles } from "~/lib/queries";

interface Props {
	articles: article[]
}

export default function Index({ articles }: Props) {
	return (
		<div id="front-page">
			<FrontPage articles={articles} />
		</div>
	);
}

export async function getStaticProps() {
	const articles: article[] = await getFrontpageArticles();

	return {
		props: {
			articles,
		},
	};
}
