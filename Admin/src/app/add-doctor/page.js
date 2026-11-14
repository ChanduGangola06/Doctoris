'use client'
import { useState } from 'react'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'
import DashboardLayout from '@/components/layout/DashboardLayout'
import { PageHeader, Panel } from '@/components/ui'

const departments = ['Cardiology', 'Gynecology', 'Dental Care', 'Neurology', 'Orthopedic', 'Eye Care']

export default function AddDoctorPage() {
  const [saved, setSaved] = useState(false)
  const [preview, setPreview] = useState('/images/doctors/01.jpg')
  return (
    <DashboardLayout>
      <PageHeader title="Add Doctor" crumbs={[{ label: 'Doctors', href: '/doctors' }, { label: 'Add Doctor' }]} />
      <Grid container spacing={3} component="form" onSubmit={(e) => { e.preventDefault(); setSaved(true) }}>
        <Grid size={{ xs: 12, md: 4 }}>
          <Panel title="Profile Picture">
            <Stack spacing={2} sx={{ alignItems: "center" }}>
              <Avatar src={preview} sx={{ width: 140, height: 140 }} />
              <Button component="label" variant="outlined">
                Upload Image
                <input hidden type="file" accept="image/*" onChange={(e) => e.target.files[0] && setPreview(URL.createObjectURL(e.target.files[0]))} />
              </Button>
              <Typography variant="caption" sx={{ color: "text.secondary" }}>PNG or JPG, max 2MB</Typography>
            </Stack>
          </Panel>
        </Grid>
        <Grid size={{ xs: 12, md: 8 }}>
          <Panel title="Doctor Details">
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, sm: 6 }}><TextField label="First Name" required /></Grid>
              <Grid size={{ xs: 12, sm: 6 }}><TextField label="Last Name" required /></Grid>
              <Grid size={{ xs: 12, sm: 6 }}><TextField type="email" label="Email" required /></Grid>
              <Grid size={{ xs: 12, sm: 6 }}><TextField label="Phone no." /></Grid>
              <Grid size={{ xs: 12, sm: 6 }}><TextField select label="Department" defaultValue={departments[0]}>{departments.map((d) => <MenuItem key={d} value={d}>{d}</MenuItem>)}</TextField></Grid>
              <Grid size={{ xs: 12, sm: 6 }}><TextField label="Fees (USD / visit)" type="number" /></Grid>
              <Grid size={12}><TextField label="Address" /></Grid>
              <Grid size={12}><TextField label="Bio" multiline minRows={4} /></Grid>
              <Grid size={12}><Button type="submit" variant="contained">Add Doctor</Button></Grid>
            </Grid>
          </Panel>
        </Grid>
      </Grid>
      <Snackbar open={saved} autoHideDuration={3000} onClose={() => setSaved(false)}>
        <Alert severity="success" variant="filled" onClose={() => setSaved(false)}>Doctor added successfully</Alert>
      </Snackbar>
    </DashboardLayout>
  )
}
