'use client'
import { useState } from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'
import SiteLayout from '@/components/site/SiteLayout'
import { PageBanner, Section } from '@/components/ui'
import { doctorData, medicalServices } from '@/data/data'

export default function Page() {
  const [ok, setOk] = useState(false)
  return (
    <SiteLayout>
      <PageBanner title="Book Appointment" crumbs={[{ label: 'Appointment' }]} />
      <Section>
        <Grid container spacing={5} sx={{ alignItems: "center" }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box component="img" src="/images/svg/vaccine-development-amico.svg" alt="" sx={{ width: '100%', maxWidth: 480 }} />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Card sx={{ p: { xs: 2.5, md: 4 } }}>
              <Typography variant="h5" gutterBottom>Book an Appointment</Typography>
              <Grid container spacing={2} component="form" onSubmit={(e) => { e.preventDefault(); setOk(true) }}>
                <Grid size={{ xs: 12, sm: 6 }}><TextField label="Patient Name" required /></Grid>
                <Grid size={{ xs: 12, sm: 6 }}><TextField label="Email" type="email" required /></Grid>
                <Grid size={{ xs: 12, sm: 6 }}><TextField select label="Department" defaultValue={medicalServices[0].title}>{medicalServices.map((m) => <MenuItem key={m.title} value={m.title}>{m.title}</MenuItem>)}</TextField></Grid>
                <Grid size={{ xs: 12, sm: 6 }}><TextField select label="Doctor" defaultValue={doctorData[0].name}>{doctorData.map((d) => <MenuItem key={d.name} value={d.name}>Dr. {d.name}</MenuItem>)}</TextField></Grid>
                <Grid size={{ xs: 12, sm: 6 }}><TextField label="Date" type="date" slotProps={{ inputLabel: { shrink: true } }} required /></Grid>
                <Grid size={{ xs: 12, sm: 6 }}><TextField label="Time" type="time" slotProps={{ inputLabel: { shrink: true } }} required /></Grid>
                <Grid size={12}><TextField label="Comments" multiline minRows={3} /></Grid>
                <Grid size={12}><Button type="submit" variant="contained" size="large" fullWidth>Book Appointment</Button></Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </Section>
      <Snackbar open={ok} autoHideDuration={4000} onClose={() => setOk(false)}><Alert severity="success" variant="filled">Appointment booked successfully!</Alert></Snackbar>
    </SiteLayout>
  )
}
