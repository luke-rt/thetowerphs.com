/** @format */

import { article, spreads } from "@prisma/client";
import shuffle from "lodash/shuffle";
import Head from "next/head";
import ArticlePreview from "~/components/preview.client";
import Video from "~/components/video.client";
import { getArticlesByCategory } from "~/lib/queries";
import NoSSR from "~/components/nossr.client";

interface Props {
	spreads: spreads[];
}

export async function getServerSideProps() {
	return {
		props: {
			//spreads: await getSpreadsByCategory("VANGUARD"),
		},
	};
}

export default function Category(/*{ spreads }: Props*/) {
	return (
		<div className="multimedia">
			<Head>
				<title>Multimedia | The Tower</title>
				<meta property="og:title" content="Multimedia | The Tower" />
				<meta property="og:description" content="Multimedia at the Tower" />
			</Head>
			<style jsx>{`
				h1 {
					text-align: center;
					border-bottom: 3px double black;
					margin-bottom: 1vh;
				}
				.grid {
					display: grid;
					grid-template-columns: 2fr 1fr 1fr;
					height: 100vh;
				}
				section:nth-child(even) {
					border-left: 1px solid gainsboro;
					border-right: 1px solid gainsboro;
				}
				section {
					padding: 1vw;
					box-sizing: border-box;
				}
				.sm-grid {
					display: grid;
					grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
					gap: 1vw;
				}
				.rightbar section {
					height: 50vh;
					/*overflow-y: scroll;
					overflow-x: hidden;*/
				}
				.videos,
				.papercasts {
					height: 100%;
					/*overflow-y: scroll;*/
				}
				iframe {
					background-color: #f6f6f6;
				}
			`}</style>
			<h1>Multimedia</h1>
			<div className="grid">
				<NoSSR>
					<section className="videos">
						<Video link="Z4bZBXoVseo" title="Artist of the Month: Kevin Huang Profile" />
						<br />
						<hr></hr>
						<br />
						{/*
						<div className="sm-grid">
							<Video link="Z4bZBXoVseo" title="Artist of the Month: Kevin Huang Profile" />
						</div>*/}
					</section>
					<section className="papercasts">
						<h2>Papercasts</h2>
					</section>
					<div className="rightbar">
						<section className="talks">
							<h2>PHS Talks</h2>
							<iframe
								className="podcast"
								src="https://player.rss.com/phstalks/844939?theme=light"
								title="rss embed thingy"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
							>
								<a href="https://rss.com/podcasts/phstalks/844939/">
									Brent Ferguson on the intersection of math and religion | RSS.com
								</a>
							</iframe>
						</section>
						<section className="inside">
							<h2>Inside PHS</h2>
							<iframe
								className="podcast"
								src="https://player.rss.com/phstalks/876635?theme=light"
								title="rss embed thingy"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
							>
								<a href="https://rss.com/podcasts/phstalks/876635/">Inside PHS: What happened to Mr. Chmiel?</a>
							</iframe>
						</section>
					</div>
				</NoSSR>
			</div>
		</div>
	);
}
