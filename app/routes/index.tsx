import { useLoaderData } from "remix";
import { article } from "@prisma/client";

import Preview from "~/components/Preview";
import { getArticles } from "~/lib/queries";
import VirtualArchive from "~/components/VirtualArchive";

export let loader = async () => {
  return getArticles();
}

export default function Index() {
  let articles: article[] = useLoaderData();
  return (
    <div id="frontPage">
      <div className="frontpage-articles">
        {articles.map(article => (
          <Preview key={article.id} article={article} category />
        ))}
      </div>
      <VirtualArchive />
    </div>
  );
}
