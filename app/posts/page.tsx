import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react";

async function getPosts() {
    const res = await fetch(`https://.../posts`, { next: { revalidate: 60 } });
    const data = await res.json();
   
    return data.posts;
  }
   
  export default async function PostList() {
    const posts: { name: string }[] = await getPosts();
  
    return posts.map((post) => <div>{post.name}</div>);
  }
  