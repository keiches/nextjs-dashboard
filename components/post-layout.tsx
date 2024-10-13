type Post = {
    title: string;
    body: string;
};

export default function PostLayout({ post }: { post: Post }) {
    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    );
}
