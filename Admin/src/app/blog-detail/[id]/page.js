import DashboardLayout from '@/components/layout/DashboardLayout'
import BlogDetail from '@/components/blog/BlogDetail'

export default async function Page({ params }) {
  const { id } = await params
  return <DashboardLayout><BlogDetail id={id} /></DashboardLayout>
}
