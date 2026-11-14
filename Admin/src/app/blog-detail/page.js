import DashboardLayout from '@/components/layout/DashboardLayout'
import BlogDetail from '@/components/blog/BlogDetail'

export default function Page() {
  return <DashboardLayout><BlogDetail id={1} /></DashboardLayout>
}
