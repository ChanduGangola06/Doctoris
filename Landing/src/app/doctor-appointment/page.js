'use client'
import { useState } from 'react'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import CheckIcon from '@mui/icons-material/Check'
import CloseIcon from '@mui/icons-material/Close'
import DashShell from '@/components/dash/DashShell'
import DataTable from '@/components/ui/DataTable'
import { Panel, PersonCell } from '@/components/ui'
import { appointmentData } from '@/data/data'

export default function Page() {
  const [rows, setRows] = useState(appointmentData)
  const columns = [
    { key: 'id', label: '#' },
    { label: 'Name', render: (r) => <PersonCell image={r.clientImage} name={r.clientName} /> },
    { key: 'age', label: 'Age' },
    { key: 'gender', label: 'Gender' },
    { key: 'department', label: 'Department' },
    { key: 'date', label: 'Date' },
    { key: 'time', label: 'Time' },
    { label: 'Doctor', render: (r) => <PersonCell image={r.drImage} name={r.drName} /> },
    { key: 'fees', label: 'Fees' },
    { label: 'Action', align: 'right', render: (r) => (
      <Stack direction="row" sx={{ justifyContent: "flex-end" }}>
        <IconButton size="small" color="success"><CheckIcon fontSize="small" /></IconButton>
        <IconButton size="small" color="error" onClick={() => setRows((x) => x.filter((i) => i.id !== r.id))}><CloseIcon fontSize="small" /></IconButton>
      </Stack>
    ) },
  ]
  return (
    <DashShell title="Appointments">
      <Panel noPadding><DataTable rows={rows} columns={columns} /></Panel>
    </DashShell>
  )
}
