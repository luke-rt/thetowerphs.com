import type { AppProps } from "next/app";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import Button from "~/components/Button";
import "~/styles/styles.scss";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div>
			<Head>
				<title>Home | The Tower</title>
				<link rel="icon" href="/favicon.ico" sizes="32x32" />
			</Head>
			<Banner />
			<NavBar />
			<div id="content">
				<Component {...pageProps} />
			</div>
			<Footer />
		</div>
	);
}

export default MyApp;

function Banner() {
	return(
		<div id="banner">
			<Link href="/" passHref >
				<Image src="/assets/logo.png" alt="Tower banner" width="1000px" height="220px" />
			</Link>
		</div>
	);
}

function Footer() {
	return(
		<div id="footer">
			<hr />
			<div className="footer-top">
				<h1>The Tower</h1>
				<span>
					<a href="https://www.instagram.com/thetowerphs/" target="_blank" rel="noopener noreferrer"><FaInstagramSquare size="2em"/></a>
					<a href="https://www.facebook.com/phstower" target="_blank" rel="noopener noreferrer"><FaFacebookSquare size="2em"/></a>
				</span>
			</div>
			<div className="footer-bottom">
				<div>
					hi

				</div>
				<div>
					hi

				</div>
				<div>
					hi

				</div>
				<div>
					hi
				</div>
			</div>
		</div>
	);
}

function NavBar() {
	return(
		<div id="navigation-bar">
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
