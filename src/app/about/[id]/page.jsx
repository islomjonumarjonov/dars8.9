import Link from "next/link";

async function getData(id) {
  const req = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    next: { revalidate: 3600 },
  });
  const data = await req.json();

  return data;
}

export default async function Page({ params }) {
  const data = await getData(params.id);
  console.log(data);
  return (
    <div>
      <h1 className="text-3xl font-bold mb-3">
        Title: <span className="font-normal">{data.title}</span>
      </h1>
      <p className="text-2xl font-bold">
        Completed:{" "}
        <span className="font-normal">{data.completed ? "✔" : "❌"}</span>
      </p>
    </div>
  );
}
