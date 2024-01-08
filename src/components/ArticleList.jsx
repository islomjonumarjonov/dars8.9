import Link from "next/link";
import React from "react";
import Image from "next/image";

function ArticleList({ articles }) {
  console.log(articles);
  return (
    <div className="prose">
      <ul className="list-none p-0 m-0">
        {articles.map((article) => {
          return (
            <li
              key={article.id}
              className="flex flex-col bg-slate-300 outline rounded"
            >
              <h3>{article.title}</h3>
              <img src={article.image} />
              <p className="m-0">Author: {article.author}</p>
              <p className="line-clamp-1">Description: {article.body}</p>
              <Link href={`/articles/${article.id}`} className="link-hover">
                Read more
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ArticleList;
