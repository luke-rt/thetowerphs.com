/** @format */

import Head from "next/head";
import styles from "~/lib/styles";

export default function About() {
	return (
		<div className="about">
			<Head>
				<title>About | The Tower</title>
				<meta property="og:title" content="About | The Tower" />
				<meta property="og:description" content="About the Tower" />
			</Head>
			<style jsx>{`
				.about {
					max-width: 100vw;
					height: 100vh;
				}
				h1 {
					text-align: center;
					border-bottom: 3px double black;
					margin-bottom: 4vh;
				}
				p {
					margin-left: 24vw;
				}
				p,
				b {
					max-width: 45vw;
					font-family: ${styles.font.text}, ${styles.font.stack};
				}
			`}</style>
			<h1>About</h1>
			<p>
				<b>Mission statement</b>: The Tower serves as a medium of information for the community through reporting and/or analyzing the inner workings
				of Princeton High School, the public school district, and cultural and athletic events that affect the student body; providing a source of
				general news for parents, teachers, and peers; voicing various opinions from an informed group of writers; and maintaining quality in accurate
				content and appealing aesthetics, as well as upholding professionalism and journalistic integrity.
				<br />
				<br />
				If you have any questions, please email us at phstowersenioreditors@gmail.com!
			</p>
		</div>
	);
}
