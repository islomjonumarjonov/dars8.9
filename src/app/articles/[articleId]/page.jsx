import React from "react";

function Article({ params }) {
  console.log(params.articleId);
  return (
    <div className="prose">
      <h1>Article</h1>
    </div>
  );
}

export default Article;
