'use client'
import DashShell from '@/components/dash/DashShell'
import DataTable from '@/components/ui/DataTable'
import { Panel, PersonCell } from '@/components/ui'
import { patientsData2 } from '@/data/data'

const columns = [
  { key: 'id', label: 'ID' },
  { label: 'Name', render: (r) => <PersonCell image={r.image} name={r.name} /> },
  { key: 'gender', label: 'Gender' },
  { key: 'Age', label: 'Age' },
  { key: 'country', label: 'Country' },
  { key: 'Diagnosis', label: 'Diagnosis' },
]

export default function Page() {
  return (
    <DashShell title="Patients">
      <Panel noPadding><DataTable rows={patientsData2} columns={columns} /></Panel>
    </DashShell>
  )
}
