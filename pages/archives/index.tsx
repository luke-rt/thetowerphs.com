/** @format */

import Head from "next/head";
import VirtualArchive from "~/components/archive.client";

export default function Archives() {
	// TODO get actual virtual archives
	return (
		<div className="archives">
			<Head>
				<title>Virtual Archives | The Tower</title>
				<meta property="og:title" content="Virtual Archives | The Tower" />
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
					grid-template-columns: 1fr 1fr 1fr 1fr;
				}
			`}</style>
			<h1>Archives</h1>
			<div className="container">
				<VirtualArchive text="September 2021" href="https://thetowerphs.com" />
				<VirtualArchive text="October 2021" href="https://thetowerphs.com" />
				<VirtualArchive text="November 2021" href="https://thetowerphs.com" />
				<VirtualArchive text="December 2021" href="https://thetowerphs.com" />
				<VirtualArchive text="January 2022" href="https://thetowerphs.com" />
				<VirtualArchive text="February 2022" href="https://thetowerphs.com" />
				<VirtualArchive text="March 2022" href="https://thetowerphs.com" />
				<VirtualArchive text="May 2022" href="https://thetowerphs.com" />
			</div>
		</div>
	);
}
