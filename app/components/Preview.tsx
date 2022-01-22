import { Link } from "remix";
import { article } from "@prisma/client";
import { expandCategorySlug } from "~/lib/utils";

interface Props {
  article: article,
}

export default function Preview({article}: Props) {
  return(
    <div className="articlePreview">
      <div><Link to={"/articles/" + article.id} className="title">{article.title}</Link></div>
      <div>
        <Link to={"/credit/" + encodeURI(article.author)} className="author">{article.author}</Link>
         •
        <Link to={"/category/" + article.category} className="category">{expandCategorySlug(article.category)}</Link>
      </div>
    </div>
  );
}
