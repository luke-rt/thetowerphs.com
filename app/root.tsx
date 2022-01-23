import {
  Link,
  Links,
  LinksFunction,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "remix";
import type { MetaFunction } from "remix";
import styles from "~/styles/styles.css";

import Button from "~/components/Button";

export const meta: MetaFunction = () => {
  return {
    title: "The Tower",
    description: "Princeton High School's newspaper website",
    keywords: "newspaper, PHS, Tower"
  };
};

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Banner />
        <NavBar />
        <div id="content">
          <Outlet />
        </div>
        <Footer />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}

function Banner() {
  return(
    <div id="banner">
      <Link to="/" title="The Tower">
        <img src="/logo.png" alt="Tower banner" style={{width: "1000px", display: "block", marginLeft: "auto", marginRight: "auto"}}/>
      </Link>
    </div>
  );
}

function Footer() {
  return(
    <div id="footer">
      <hr />
      <h1>The Tower</h1>
    </div>
  );
}

function NavBar() {
  return(
    <div id="navigation-bar">
      <Button name="News & Features" href="/category/news-features">
        <Link to="/category/news-features/phs-profiles">PHS Profiles</Link>
        <hr />
        <Link to="/category/news-features/meanwhile-in-princeton">Meanwhile In Princeton</Link>
      </Button>

      <Button name="Opinions" href="/category/opinions">
        <Link to="/category/opinions/editorials">Editorials</Link>
        <hr />
        <Link to="/category/opinions/cheers-jeers">Cheers & Jeers</Link>
      </Button>

      <Button name="Vanguard" href="/category/vanguard">
        <Link to="/category/vanguard/random-musings">Random Musings</Link>
        <hr />
        <Link to="/category/vanguard/spreads">Spreads</Link>
      </Button>

      <Button name="Arts & Entertainment" href="/category/arts-entertainment">
        <Link to="/category/arts-entertainment/recipes">Recipes</Link>
        <hr />
        <Link to="/category/arts-entertainment/student-artists">Student Artists</Link>
      </Button>

      <Button name="Sports" href="/category/sports">
        <Link to="/category/sports/student-athletes">Student Athletes</Link>
      </Button>

      <Button name="About" href="/about" />
      <Button name="Subscribe" href="/subscribe" />
    </div>
  );
}
