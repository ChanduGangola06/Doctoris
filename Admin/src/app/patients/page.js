'use client'
import Link from 'next/link'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import Chip from '@mui/material/Chip'
import AddIcon from '@mui/icons-material/Add'
import VisibilityIcon from '@mui/icons-material/VisibilityOutlined'
import DashboardLayout from '@/components/layout/DashboardLayout'
import DataTable from '@/components/ui/DataTable'
import { PageHeader, Panel, PersonCell, StatusChip } from '@/components/ui'
import { patientData } from '@/data/data'

const columns = [
  { key: 'id', label: '#' },
  { label: 'Name', render: (r) => <PersonCell image={r.image} name={r.name} /> },
  { key: 'age', label: 'Age' },
  { key: 'gender', label: 'Gender' },
  { key: 'address', label: 'Address' },
  { key: 'mobileNo', label: 'Mobile' },
  { key: 'Department', label: 'Department' },
  { key: 'date', label: 'Date' },
  { key: 'time', label: 'Time' },
  { label: 'Status', render: (r) => <StatusChip status={r.status} /> },
  { label: 'Action', align: 'right', render: (r) => (
    <IconButton size="small" component={Link} href="/patient-profile"><VisibilityIcon fontSize="small" /></IconButton>
  ) },
]

export default function PatientsPage() {
  return (
    <DashboardLayout>
      <PageHeader title="Patients" crumbs={[{ label: 'Patients' }]} action={
        <Button component={Link} href="/add-patient" variant="contained" startIcon={<AddIcon />}>Add Patient</Button>
      } />
      <Panel noPadding><DataTable rows={patientData} columns={columns} /></Panel>
    </DashboardLayout>
  )
}
