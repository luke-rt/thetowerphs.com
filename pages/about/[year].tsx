import { readdirSync, readFileSync } from "fs";
import { join } from "path";
import Head from "next/head";
import styles from "~/styles/about.module.scss";

const aboutDir = join(process.cwd(), "content/about");

interface Params {
	params: {
		year: number
	}
}

interface Props {
	data: any
}

export async function getStaticPaths() {
	let years = readdirSync(aboutDir).filter(e => e !== "template");

	return {
		paths: years.map((year) => ({
			params: {
				year: year.replace(/\.[^/.]+$/, "")
			},
		})),
		fallback: "blocking",
	};
}

export async function getStaticProps({ params }: Params) {
	return {
		props: {
			data: JSON.parse(readFileSync(`${aboutDir}/${params.year}.json`, "utf-8"))
		},
	};
}

export default function About({ data }: Props) {
	console.log(data);
	return(
		<div className={styles.about}>
			<Head>
				<title>About | The Tower</title>
				<meta
					property="og:title"
					content="About | The Tower"
				/>
				<meta
					property="og:description"
					content="About the Tower"
				/>
			</Head>
			<h1>About The Tower</h1>
			<p></p>
		</div>
	);
}
