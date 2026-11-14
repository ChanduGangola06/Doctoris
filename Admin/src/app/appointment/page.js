'use client'
import { useState } from 'react'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import AddIcon from '@mui/icons-material/Add'
import DeleteIcon from '@mui/icons-material/DeleteOutlined'
import EditIcon from '@mui/icons-material/EditOutlined'
import DashboardLayout from '@/components/layout/DashboardLayout'
import DataTable from '@/components/ui/DataTable'
import { PageHeader, Panel, PersonCell } from '@/components/ui'
import { appointmentData, doctorData } from '@/data/data'

const departments = ['Cardiology', 'Gynecology', 'Dental Care', 'Neurology', 'Orthopedic', 'Eye Care']

export default function AppointmentPage() {
  const [rows, setRows] = useState(appointmentData)
  const [open, setOpen] = useState(false)

  const columns = [
    { key: 'id', label: '#' },
    { label: 'Name', render: (r) => <PersonCell image={r.client} name={r.clientName} sub={r.email} /> },
    { key: 'age', label: 'Age' },
    { key: 'gender', label: 'Gender' },
    { key: 'department', label: 'Department' },
    { key: 'date', label: 'Date' },
    { key: 'time', label: 'Time' },
    { label: 'Doctor', render: (r) => <PersonCell image={r.doctor} name={r.doctorName} /> },
    { key: 'fees', label: 'Fees' },
    { label: 'Action', align: 'right', render: (r) => (
      <Stack direction="row" sx={{ justifyContent: "flex-end" }}>
        <IconButton size="small" color="success"><EditIcon fontSize="small" /></IconButton>
        <IconButton size="small" color="error" onClick={() => setRows((x) => x.filter((i) => i.id !== r.id))}><DeleteIcon fontSize="small" /></IconButton>
      </Stack>
    ) },
  ]

  const onSubmit = (e) => {
    e.preventDefault()
    const f = Object.fromEntries(new FormData(e.currentTarget))
    const doc = doctorData.find((d) => String(d.id) === f.doctor) || doctorData[0]
    setRows((x) => [...x, {
      id: x.length ? Math.max(...x.map((i) => i.id)) + 1 : 1, client: '/images/client/05.jpg', clientName: f.name, email: f.email,
      age: f.age, gender: 'Male', department: f.department, date: f.date, time: f.time, doctor: doc.image, doctorName: doc.name, fees: '$50/Patient',
    }])
    setOpen(false)
  }

  return (
    <DashboardLayout>
      <PageHeader title="Appointment" crumbs={[{ label: 'Appointment' }]} action={
        <Button variant="contained" startIcon={<AddIcon />} onClick={() => setOpen(true)}>Book Appointment</Button>
      } />
      <Panel noPadding><DataTable rows={rows} columns={columns} /></Panel>

      <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="sm" component="form" onSubmit={onSubmit}>
        <DialogTitle>Book Appointment</DialogTitle>
        <DialogContent>
          <Grid container spacing={2} sx={{ pt: 1 }}>
            <Grid size={12}><TextField name="name" label="Patient Name" required /></Grid>
            <Grid size={{ xs: 12, sm: 6 }}><TextField name="email" type="email" label="Email" required /></Grid>
            <Grid size={{ xs: 12, sm: 6 }}><TextField name="age" type="number" label="Age" /></Grid>
            <Grid size={{ xs: 12, sm: 6 }}><TextField select name="department" label="Department" defaultValue={departments[0]}>{departments.map((d) => <MenuItem key={d} value={d}>{d}</MenuItem>)}</TextField></Grid>
            <Grid size={{ xs: 12, sm: 6 }}><TextField select name="doctor" label="Doctor" defaultValue={1}>{doctorData.map((d) => <MenuItem key={d.id} value={d.id}>{d.name}</MenuItem>)}</TextField></Grid>
            <Grid size={{ xs: 12, sm: 6 }}><TextField name="date" type="date" label="Date" slotProps={{ inputLabel: { shrink: true } }} /></Grid>
            <Grid size={{ xs: 12, sm: 6 }}><TextField name="time" type="time" label="Time" slotProps={{ inputLabel: { shrink: true } }} /></Grid>
          </Grid>
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <Button onClick={() => setOpen(false)} color="inherit">Cancel</Button>
          <Button type="submit" variant="contained">Book Now</Button>
        </DialogActions>
      </Dialog>
    </DashboardLayout>
  )
}
