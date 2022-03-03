import type { AppProps, NextWebVitalsMetric } from "next/app";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookSquare } from "@react-icons/all-files/fa/FaFacebookSquare";
import { FaInstagramSquare } from "@react-icons/all-files/fa/FaInstagramSquare";
import Button from "~/components/button.client";

import "~/styles/styles.scss";
import styles from "~/styles/root.module.scss";

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div>
			<Head>
				<title>Home | The Tower</title>
				<link rel="icon" href="/favicon.ico" sizes="32x32" />
			</Head>
			<Banner />
			<NavBar />
			<main className={styles.content}>
				<Component {...pageProps} />
			</main>
			<Footer />
		</div>
	);
}

function Banner() {
	return(
		<div className={styles.banner}>
			<Link href="/home" >
				<Image src="/assets/logo.png" alt="Tower banner" width="1500px" height="330px" priority />
			</Link>
		</div>
	);
}

function Footer() {
	return(
		<div className={styles.footer}>
			<hr />
			<div className={styles.top}>
				<h1>The Tower</h1>
				<span>
					<a href="https://www.instagram.com/thetowerphs/" target="_blank" rel="noopener noreferrer"><FaInstagramSquare size="2em"/></a>
					<a href="https://www.facebook.com/phstower" target="_blank" rel="noopener noreferrer"><FaFacebookSquare size="2em"/></a>
				</span>
			</div>
			<div className={styles.bottom}>
				<div>
					<b>
						<Link href="/category/news-features">News & Features</Link><br></br>
					</b>
					<Link href="/category/news-features/phs-profiles">PHS Profiles</Link><br></br>
					<Link href="/category/news-features/meanwhile-in-princeton">Meanwhile In Princeton</Link><br></br>
				</div>
				<div>
					<b>
						<Link href="/category/opinions">Opinions</Link><br></br>
					</b>
					<Link href="/category/opinions/editorials">Editorials</Link><br></br>
					<Link href="/category/opinions/cheers-jeers">Cheers & Jeers</Link><br></br>
				</div>
				<div>
					<b>
						<Link href="/category/vanguard">Vanguard</Link><br></br>
					</b>
					<Link href="/category/vanguard/random-musings">Random Musings</Link><br></br>
					<Link href="/category/vanguard/spreads">Spreads</Link><br></br>
				</div>
				<div>
					<b>
						<Link href="/category/arts-entertainment">Arts & Entertainment</Link><br></br>
					</b>
					<Link href="/category/arts-entertainment/recipes">Recipes</Link><br></br>
					<Link href="/category/arts-entertainment/student-artists">Student Artists</Link><br></br>
				</div>
				<div>
					<b>
						<Link href="/category/sports">Sports</Link><br></br>
					</b>
					<Link href="/category/sports/student-athletes">Student Athletes</Link>
				</div>
			</div>
			<hr />
		</div>
	);
}

function NavBar() {
	return(
		<div className={styles.navbar}>
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
