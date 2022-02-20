import Head from "next/head";
import styles from "~/styles/about.module.scss";

export default function About() {
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
		</div>
	);
}
