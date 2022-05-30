/** @format */

import type { AppProps, NextWebVitalsMetric } from "next/app";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookSquare } from "@react-icons/all-files/fa/FaFacebookSquare";
import { FaInstagramSquare } from "@react-icons/all-files/fa/FaInstagramSquare";
import Button from "~/components/button.client";

import "~/styles/styles.scss";
import styles from "~/lib/styles";

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div>
			<Head>
				<title>Home | The Tower</title>
				<link rel="icon" href="/favicon.ico" sizes="32x32" />
			</Head>
			<Banner />
			<NavBar />
			<main className="content">
				<style jsx>{`
					main {
						display: block;
						margin-top: 4vh;
						margin-left: 5vw;
						margin-right: 5vw;
					}
				`}</style>
				<Component {...pageProps} />
			</main>
			<Footer />
		</div>
	);
}

function Banner() {
	return (
		<div className="banner">
			<style jsx>{`
				.banner {
					display: flex;
					justify-content: center;
					margin: auto;
				}
				.banner:hover {
					cursor: pointer;
				}
			`}</style>
			<Link href="/home" passHref>
				<Image src="/assets/logo.png" alt="Tower banner" width="420px" height="128px" priority />
			</Link>
		</div>
	);
}

function Footer() {
	return (
		<div className="footer">
			<style jsx>{`
				.footer {
					display: grid;
					padding-top: 2vh;
					width: 90vw;
					margin-left: 5vw;
				}
				hr {
					align-self: center;
					background-color: #ccc;
					border: none;
					margin-top: 3vh;
					margin-bottom: 1vh;
					height: 3px;
				}
				.top h1 {
					font-family: Canterbury;
					font-size: xxx-large;
					float: left;
					padding-right: 10px;
				}
				.top a {
					display: inline-block;
					position: relative;
					padding-top: 2.5vh;
				}
				.top .home-btn {
					font-size: small;
					color: #274370;
					float: right;
					margin-right: 2.5vh;
				}
				.bottom {
					font-family: sans-serif;
					margin: 1vh;
					display: grid;
					grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
				}
				.bottom b {
					font-size: 1.1em;
					font-weight: bolder;
				}
				.bottom a {
					font-size: 0.9em;
				}
			`}</style>
			<hr />
			<div className="top">
				<h1>The Tower</h1>
				<a href="https://www.instagram.com/thetowerphs/" target="_blank" rel="noopener noreferrer">
					<FaInstagramSquare size="2.2em" />
				</a>
				<a href="https://www.facebook.com/phstower" target="_blank" rel="noopener noreferrer">
					<FaFacebookSquare size="2.2em" />
				</a>
				<Link href="/home">
					<a className="home-btn">Go to home page »</a>
				</Link>
			</div>
			<div className="bottom">
				<div>
					<b>
						<Link href="/category/news-features">News & Features</Link>
						<br />
					</b>
					<Link href="/category/news-features/phs-profiles">PHS Profiles</Link>
					<br />
					<Link href="/category/news-features/meanwhile-in-princeton">Meanwhile In Princeton</Link>
					<br />
				</div>
				<div>
					<b>
						<Link href="/category/opinions">Opinions</Link>
						<br />
					</b>
					<Link href="/category/opinions/editorials">Editorials</Link>
					<br />
					<Link href="/category/opinions/cheers-jeers">Cheers & Jeers</Link>
					<br />
				</div>
				<div>
					<b>
						<Link href="/category/vanguard">Vanguard</Link>
						<br />
					</b>
					<Link href="/category/vanguard/random-musings">Random Musings</Link>
					<br />
					<Link href="/category/vanguard/spreads">Spreads</Link>
					<br />
				</div>
				<div>
					<b>
						<Link href="/category/arts-entertainment">Arts & Entertainment</Link>
						<br />
					</b>
					<Link href="/category/arts-entertainment/recipes">Recipes</Link>
					<br />
					<Link href="/category/arts-entertainment/student-artists">Student Artists</Link>
					<br />
				</div>
				<div>
					<b>
						<Link href="/category/sports">Sports</Link>
						<br />
					</b>
					<Link href="/category/sports/student-athletes">Student Athletes</Link>
				</div>
			</div>
			<hr />
		</div>
	);
}

function NavBar() {
	return (
		<div className="navbar">
			<style jsx>{`
				.navbar {
					display: block;
					background-color: ${styles.color.primary};
					margin-bottom: 2vh;
					margin-left: 4vw;
					margin-right: 4vw;
					padding-left: 4vw;
					padding-right: 4vw;
				}
				.navbar hr {
					margin-top: 5px;
					margin-bottom: 5px;
				}
			`}</style>
			<Button name="News & Features" href="/category/news-features">
				<Link href="/category/news-features/phs-profiles">PHS Profiles</Link>
				<hr />
				<Link href="/category/news-features/meanwhile-in-princeton">Meanwhile In Princeton</Link>
			</Button>

			<Button name="Opinions" href="/category/opinions">
				<Link href="/category/opinions/editorials">Editorials</Link>
				<hr />
				<Link href="/category/opinions/cheers-jeers">Cheers & Jeers</Link>
			</Button>

			<Button name="Vanguard" href="/category/vanguard">
				<Link href="/category/vanguard/random-musings">Random Musings</Link>
				<hr />
				<Link href="/category/vanguard/spreads">Spreads</Link>
			</Button>

			<Button name="Arts & Entertainment" href="/category/arts-entertainment">
				<Link href="/category/arts-entertainment/recipes">Recipes</Link>
				<hr />
				<Link href="/category/arts-entertainment/student-artists">Student Artists</Link>
			</Button>

			<Button name="Sports" href="/category/sports">
				<Link href="/category/sports/student-athletes">Student Athletes</Link>
			</Button>

			<Button name="About" href="/about" />
			<Button name="Subscribe" href="/subscribe" />
			<Button name="Archives" href="/archives" />
		</div>
	);
}

export function reportWebVitals(metric: NextWebVitalsMetric) {
	console.log(metric);
}
