import PostLayout from '@/components/post-layout';

export const dynamicParams = true;

export async function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }]
}
 
async function getPost(params: { id: any }) {
  const res = await fetch(`https://.../posts/${params.id}`);
  const post = await res.json();
 
  return post
}
 
export default async function Post({ params }: { params: { id: any } }) {
  const post = await getPost(params);
 
  return (<PostLayout post={post} />);
}
