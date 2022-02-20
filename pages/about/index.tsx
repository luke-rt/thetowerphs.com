import Head from "next/head";

import styles from "~/styles/about.module.scss";

export default function About() {
	return(
		<div id={styles.about}>
			<Head>
				<title>About | The Tower</title>
			</Head>
			<h1>About The Tower</h1>
		</div>
	);
}
