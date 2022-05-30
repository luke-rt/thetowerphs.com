import { MetaFunction } from "remix";

export const meta: MetaFunction = () => {
	return {
		title: "About | The Tower",
		description: "About the Tower",
		keywords: "newspaper, PHS, Tower"
	};
};

export default function About() {
	return(
		<div id="about">
			<h1>About The Tower</h1>
		</div>
	);
}
