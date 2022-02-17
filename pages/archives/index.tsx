import Head from "next/head";
import VirtualArchive from "~/components/VirtualArchive";

export default function Archives() {
	return(
		<div id="archives">
			<Head>
				<title>Virtual Archives | The Tower</title>
			</Head>
			<h1>Archives</h1>
			<div className="archive-container">
				<VirtualArchive text="September 2021" href="https://thetowerphs.com"/>
				<VirtualArchive text="October 2021" href="https://thetowerphs.com"/>
				<VirtualArchive text="November 2021" href="https://thetowerphs.com"/>
				<VirtualArchive text="December 2021" href="https://thetowerphs.com"/>
				<VirtualArchive text="January 2022" href="https://thetowerphs.com"/>
				<VirtualArchive text="February 2022" href="https://thetowerphs.com"/>
				<VirtualArchive text="March 2022" href="https://thetowerphs.com"/>
				<VirtualArchive text="May 2022" href="https://thetowerphs.com"/>
			</div>
		</div>
	);
}
