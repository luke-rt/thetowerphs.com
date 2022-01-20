import { Link } from "remix";
import { article } from "@prisma/client";

interface Props {
  article: article,
}

export default function Preview({article}: Props) {
  return(
    <div className="articlePreview">
      <div><Link to={"articles/" + article.id} className="title">{article.title}</Link></div>
      <div>
        <Link to={"credit/"} className="author">{article.author}</Link>
         •
        <Link to={"category/"} className="category">{article.section}</Link>
      </div>
    </div>
  )
}
