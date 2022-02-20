import Head from "next/head";
import styles from "~/styles/subscribe.module.scss";

export default function Subscribe() {
	return(
		<div className={styles.subscribe}>
			<Head>
				<title>Subscribe | The Tower</title>
				<meta
					property="og:title"
					content="Subscribe | The Tower"
				/>
				<meta
					property="og:description"
					content="Subscribe to the Tower"
				/>
			</Head>
			<h1>Subscribe</h1>
		</div>
	);
}
