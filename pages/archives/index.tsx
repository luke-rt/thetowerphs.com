/** @format */

import Head from "next/head";
import VirtualArchive from "~/components/archive.client";

export default function Archives() {
	// TODO get actual virtual archives
	return (
		<div className="archives">
			<Head>
				<title>Virtual Archives | The Tower</title>
				<meta property="og:title" content="Archives | The Tower" />
				<meta property="og:description" content="Read scanned PDF newspapers here" />
			</Head>
			<style jsx>{`
				.archives {
					max-width: 85vw;
				}
				h1 {
					text-align: center;
				}
				.container {
					margin-left: 6vw;
					max-width: 85vw;
					display: grid;
					grid-template-columns: 1fr 1fr 1fr;
				}
			`}</style>
			<h1>Archives</h1>
			<div className="container">
				<VirtualArchive month={2} year={2022} />
				<VirtualArchive month={3} year={2022} />
			</div>
		</div>
	);
}
