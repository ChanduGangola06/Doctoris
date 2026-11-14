import BlogDetail from '@/components/home/BlogDetail'

export default async function Page({ params }) {
  const { id } = await params
  return <BlogDetail id={id} />
}
