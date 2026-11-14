'use client'
import { useState } from 'react'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Radio from '@mui/material/Radio'
import DashboardLayout from '@/components/layout/DashboardLayout'
import { PageHeader, Panel } from '@/components/ui'

export default function AddPatientPage() {
  const [saved, setSaved] = useState(false)
  const [preview, setPreview] = useState('/images/client/01.jpg')
  return (
    <DashboardLayout>
      <PageHeader title="Add Patient" crumbs={[{ label: 'Patients', href: '/patients' }, { label: 'Add Patient' }]} />
      <Grid container spacing={3} component="form" onSubmit={(e) => { e.preventDefault(); setSaved(true) }}>
        <Grid size={{ xs: 12, md: 4 }}>
          <Panel title="Profile Picture">
            <Stack spacing={2} sx={{ alignItems: "center" }}>
              <Avatar src={preview} sx={{ width: 140, height: 140 }} />
              <Button component="label" variant="outlined">
                Upload Image
                <input hidden type="file" accept="image/*" onChange={(e) => e.target.files[0] && setPreview(URL.createObjectURL(e.target.files[0]))} />
              </Button>
            </Stack>
          </Panel>
        </Grid>
        <Grid size={{ xs: 12, md: 8 }}>
          <Panel title="Patient Details">
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, sm: 6 }}><TextField label="First Name" required /></Grid>
              <Grid size={{ xs: 12, sm: 6 }}><TextField label="Last Name" required /></Grid>
              <Grid size={{ xs: 12, sm: 6 }}><TextField type="email" label="Email" required /></Grid>
              <Grid size={{ xs: 12, sm: 6 }}><TextField label="Phone no." /></Grid>
              <Grid size={{ xs: 12, sm: 6 }}><TextField label="Age" type="number" /></Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <FormControl>
                  <FormLabel>Gender</FormLabel>
                  <RadioGroup row defaultValue="Male">
                    {['Male', 'Female', 'Other'].map((g) => <FormControlLabel key={g} value={g} control={<Radio />} label={g} />)}
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid size={12}><TextField label="Address" /></Grid>
              <Grid size={12}><TextField label="Medical notes" multiline minRows={4} /></Grid>
              <Grid size={12}><Button type="submit" variant="contained">Add Patient</Button></Grid>
            </Grid>
          </Panel>
        </Grid>
      </Grid>
      <Snackbar open={saved} autoHideDuration={3000} onClose={() => setSaved(false)}>
        <Alert severity="success" variant="filled" onClose={() => setSaved(false)}>Patient added successfully</Alert>
      </Snackbar>
    </DashboardLayout>
  )
}
