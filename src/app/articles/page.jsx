import ArticleList from "@/components/ArticleList";

async function getData() {
  const req = await fetch("http://localhost:3000/api/articles");
  const data = await req.json();

  return data;
}

async function Articles() {
  const { articles } = await getData();
  console.log(articles);
  return (
    <div>
      <h1 className="text-3xl">Articles</h1>
      <ArticleList articles={articles} />
    </div>
  );
}

export default Articles;
