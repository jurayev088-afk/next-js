import React from "react";

export default async function PostDetail({ params }) {
  const { id } = await params;

  const posts = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await posts.json();
  console.log(data);

  return (
    <div>
      <h1>PostDetail</h1> <br />
      <h2>{data?.id}</h2> <br />
      <h2>{data?.title}</h2> <br />
      <h2>{data?.body}</h2> <br />
    </div>
  );
}
