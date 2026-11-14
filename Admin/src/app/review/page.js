'use client'
import { useState } from 'react'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/DeleteOutlined'
import DashboardLayout from '@/components/layout/DashboardLayout'
import DataTable from '@/components/ui/DataTable'
import { PageHeader, Panel, PersonCell } from '@/components/ui'
import { reviewData } from '@/data/data'

export default function Page() {
  const [rows, setRows] = useState(reviewData)
  const columns = [
    { key: 'id', label: '#' },
    { label: 'Name', render: (r) => <PersonCell image={r.image} name={r.name} sub={r.mail} /> },
    { key: 'comments', label: 'Comments' },
    { key: 'date', label: 'Date' },
    { label: 'Action', align: 'right', render: (r) => <IconButton size="small" color="error" onClick={() => setRows((x) => x.filter((i) => i.id !== r.id))}><DeleteIcon fontSize="small" /></IconButton> },
  ]
  return (
    <DashboardLayout>
      <PageHeader title="Reviews" crumbs={[{ label: 'Reviews' }]} />
      <Panel noPadding><DataTable rows={rows} columns={columns} /></Panel>
    </DashboardLayout>
  )
}
