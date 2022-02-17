import FrontPageArticles from "~/components/FrontPageArticles";
import { article } from "@prisma/client";
import { getFrontpageArticles } from "~/lib/queries";

interface Props {
	articles: article[]
}

export default function Index({ articles }: Props) {
	return (
		<div id="front-page">
			<FrontPageArticles articles={articles} />
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
