import DashboardLayout from '@/components/layout/DashboardLayout'
import { PageHeader } from '@/components/ui'

export default function Page() {
  return (
    <DashboardLayout>
      <PageHeader title="Blank Page" crumbs={[{ label: 'Blank Page' }]} />
    </DashboardLayout>
  )
}
