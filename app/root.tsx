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
  return { title: "The Tower" };
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
        <Outlet />
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

function NavBar() {
  return(
    <div id="navigation-bar">
      <Button name="News & Features" href="/newfe">
        <Link to="/newfe/phs-profile">PHS Profiles</Link>
        <hr />
        <Link to="/newfe/meanwhile-in-princeton">Meanwhile In Princeton</Link>
      </Button>

      <Button name="Opinions" href="/opinions">
        <Link to="/opinions/editorials">Editorials</Link>
        <hr />
        <Link to="/opinions/cheers-jeers">Cheers & Jeers</Link>
      </Button>

      <Button name="Vanguard" href="/vanguard">
        <Link to="/vanguard/random-musings">Random Musings</Link>
        <hr />
        <Link to="/vanguard/spreads">Spreads</Link>
      </Button>

      <Button name="Arts & Entertainment" href="/ane">
        <Link to="/arts-entertainment/recipes">Recipes</Link>
        <hr />
        <Link to="/arts-entertainment/student-artists">Student Artists</Link>
      </Button>

      <Button name="Sports" href="/sports">
        <Link to="/sports/student-athletes">Student Athletes</Link>
      </Button>

      <Button name="About" href="/about" />
      <Button name="Subscribe" href="/subscribe" />
    </div>
  )
}
