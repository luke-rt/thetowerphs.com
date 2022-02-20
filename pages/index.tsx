import FrontPage from "~/components/FrontPage";
import { article } from "@prisma/client";
import { getFrontpageArticles } from "~/lib/queries";

import styles from "~/styles/home.module.scss";

interface Props {
	articles: article[]
}

export default function Index({ articles }: Props) {
	return (
		<FrontPage articles={articles} />
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
