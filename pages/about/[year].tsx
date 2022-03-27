import Head from "next/head";
import styles from "~/styles/about.module.scss";

interface Props {
	year: number,
}

interface Params {
	params: {
		year: number,
	}
}

export function getServerSideProps({ params }: Params) {
	return {
		props: {
			year: params.year,
		},
	};
}

export default function Year({ year }: Props) {
	return(
		<div className={styles.about}>
			<Head>
				<title>About the {year} staff | The Tower</title>
				<meta
					property="og:title"
					content="About | The Tower"
				/>
				<meta
					property="og:description"
					content="About the Tower"
				/>
			</Head>
			<h1>About</h1>
		</div>
	);
}
