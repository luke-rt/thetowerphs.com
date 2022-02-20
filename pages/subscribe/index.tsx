import Head from "next/head";

import styles from "~/styles/subscribe.module.scss";

export default function Subscribe() {
	return(
		<div className={styles.subscribe}>
			<Head>
				<title>Subscribe | The Tower</title>
			</Head>
			<h1>Subscribe</h1>
		</div>
	);
}
