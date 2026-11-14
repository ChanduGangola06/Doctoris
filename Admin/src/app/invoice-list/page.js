'use client'
import Link from 'next/link'
import IconButton from '@mui/material/IconButton'
import VisibilityIcon from '@mui/icons-material/VisibilityOutlined'
import DashboardLayout from '@/components/layout/DashboardLayout'
import DataTable from '@/components/ui/DataTable'
import { PageHeader, Panel, PersonCell, StatusChip } from '@/components/ui'
import { invoiceData } from '@/data/data'

const columns = [
  { key: 'id', label: 'Invoice' },
  { label: 'Patient', render: (r) => <PersonCell image={r.image} name={r.name} /> },
  { key: 'phone', label: 'Phone' },
  { key: 'amount', label: 'Amount' },
  { key: 'date', label: 'Date' },
  { label: 'Status', render: (r) => <StatusChip status={r.status} /> },
  { label: 'View', align: 'right', render: () => <IconButton size="small" component={Link} href="/invoice"><VisibilityIcon fontSize="small" /></IconButton> },
]

export default function Page() {
  return (
    <DashboardLayout>
      <PageHeader title="Invoice List" crumbs={[{ label: 'Invoice List' }]} />
      <Panel noPadding><DataTable rows={invoiceData} columns={columns} /></Panel>
    </DashboardLayout>
  )
}
