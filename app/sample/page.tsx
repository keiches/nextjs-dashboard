import { cookies, headers } from 'next/headers'

import HomePage from "./home-page"

async function getPosts() {
    const authHeader = headers().get('authorization');
    const res = await fetch('https://...');
    const posts = await res.json()
    return posts
}

export default async function Page() {
    // You can use `cookies()` or `headers()` inside Server Components
  // directly or in your data fetching function
    const theme = cookies().get('theme');
    // Fetch data directly in a Server Component
    const recentPosts = await getPosts();
    // Forward fetched data to your Client Component
    return (<HomePage recentPosts={recentPosts} />);
}
