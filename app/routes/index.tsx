import { useLoaderData } from "remix";
import { article } from "@prisma/client";

import Preview from "~/components/Preview";
import { getArticles } from "~/lib/queries";

export let loader = async () => {
  return getArticles();
}

export default function Index() {
  let articles: article[] = useLoaderData();
  return (
    <div>
        {articles.map(article => (
          <Preview key={article.id} article={article} category />
        ))}
    </div>
  );
}
