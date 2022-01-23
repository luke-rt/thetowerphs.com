import { Link } from "remix";
import { article } from "@prisma/client";
import { expandCategorySlug } from "~/lib/utils";

interface Props {
  article: article,
  category?: boolean,
}

export default function Preview({article, category}: Props) {
  const date = new Date(article.date)

  let sentences = article.content.substring(0, 400).split(' '); // replace 200 with better number
  sentences.pop();
  let preview = sentences.join(' ').replace(/[\n\r\t\s]+/g, ' ') + "...";

  return(
    <div className="articlePreview">
      <div className="category">
        {category &&
           <Link to={ "/category/" + article.category }>{expandCategorySlug(article.category)}</Link>
        }
      </div>
      <div>
        <Link to={ "/articles/" + article.id } className="title">{article.title}</Link>
        <span>{ date.toDateString() }</span>
      </div>
      <div className="authors">
        {article.authors.map(author => (
          <Link to={ "/credit/" + encodeURI(author) } >{author}</Link>
        ))}
      </div>
      <div className="preview">
        {preview}
      </div>
    </div>
  );
}
