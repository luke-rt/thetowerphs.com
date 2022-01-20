import { Link, useLoaderData } from "remix";
import { article } from "@prisma/client";
import { getDataTest } from "~/lib/queries";

export let loader = () => {
  return getDataTest();
}

export default function Index() {
  let articles: article[] = useLoaderData();
  return (
    <div>
      <h1>Welcome to Remix</h1>
      <ul>
        {articles.map(article => (
            <li key={article.id}>
                <Link to={article.id}>{article.title}</Link>
            </li>
        ))}
      </ul>
    </div>
  );
}
