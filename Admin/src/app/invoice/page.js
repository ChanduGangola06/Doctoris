import DashboardLayout from '@/components/layout/DashboardLayout'
import InvoiceView from '@/components/profile/InvoiceView'
import { PageHeader } from '@/components/ui'

export default function Page() {
  return (
    <DashboardLayout>
      <PageHeader title="Invoice" crumbs={[{ label: 'Invoice List', href: '/invoice-list' }, { label: 'Invoice' }]} />
      <InvoiceView />
    </DashboardLayout>
  )
}
