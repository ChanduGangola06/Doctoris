'use client'
import { useState } from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import LinearProgress from '@mui/material/LinearProgress'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import DashboardLayout from '@/components/layout/DashboardLayout'
import { PageHeader } from '@/components/ui'
import { appointmentList, paymentList, doctorData } from '@/data/data'

const info = [['Gender', 'Male'], ['Birthday', '19th January 1995'], ['Phone No.', '+(125) 458-8547'], ['Address', 'Sydney, Australia'], ['Blood Group', 'O+']]

export default function PatientProfilePage() {
  const [tab, setTab] = useState(0)
  return (
    <DashboardLayout>
      <PageHeader title="Patient Profile" crumbs={[{ label: 'Patients', href: '/patients' }, { label: 'Profile' }]} />
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, lg: 4 }}>
          <Card sx={{ p: 3 }}>
            <Stack spacing={0.5} sx={{ alignItems: "center" }}>
              <Avatar src="/images/client/09.jpg" sx={{ width: 110, height: 110 }} />
              <Typography variant="h6" sx={{ pt: 1 }}>Christopher Burrell</Typography>
              <Typography sx={{ color: "text.secondary" }}>25 Years old</Typography>
            </Stack>
            <Box sx={{ my: 3 }}>
              <Stack direction="row" sx={{ justifyContent: "space-between" }}><Typography variant="body2">Complete your profile</Typography><Typography variant="body2">89%</Typography></Stack>
              <LinearProgress variant="determinate" value={89} sx={{ height: 8, borderRadius: 4, mt: 0.5 }} />
            </Box>
            <Stack divider={<Divider flexItem />} spacing={1.5}>
              {info.map(([k, v]) => <Stack key={k} direction="row" sx={{ justifyContent: "space-between" }}><Typography variant="body2" sx={{ color: "text.secondary" }}>{k}</Typography><Typography variant="body2" sx={{ fontWeight: 600 }}>{v}</Typography></Stack>)}
            </Stack>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, mt: 3, mb: 1 }}>Doctors List</Typography>
            <List disablePadding>
              {doctorData.slice(0, 4).map((d) => (
                <ListItem key={d.id} disableGutters><ListItemAvatar><Avatar src={d.image} /></ListItemAvatar><ListItemText primary={d.name} secondary={d.title} /></ListItem>
              ))}
            </List>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, lg: 8 }}>
          <Card>
            <Tabs value={tab} onChange={(_, v) => setTab(v)} variant="scrollable" sx={{ borderBottom: 1, borderColor: 'divider' }}>
              {['Profile', 'Appointments', 'Payments', 'Settings'].map((t) => <Tab key={t} label={t} />)}
            </Tabs>
            <Box sx={{ p: 3 }}>
              {tab === 0 && (
                <Stack spacing={2}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>Introduction</Typography>
                  <Typography sx={{ color: "text.secondary" }}>Web designers to occupy the space which will later be filled with &apos;real&apos; content. This is required when, for example, the final text is not yet available. Dummy text is also known as &apos;fill text&apos;.</Typography>
                </Stack>
              )}
              {tab === 1 && (
                <List>
                  {appointmentList.map((a, i) => { const I = a.icon; return (
                    <ListItem key={i} secondaryAction={<Typography variant="body2" sx={{ color: "text.secondary" }}>{a.date}</Typography>}>
                      <ListItemAvatar><Avatar sx={{ bgcolor: 'primary.light' }}><I /></Avatar></ListItemAvatar>
                      <ListItemText primary={a.title} secondary={a.name} />
                    </ListItem>) })}
                </List>
              )}
              {tab === 2 && (
                <List>
                  {paymentList.map((p, i) => (
                    <ListItem key={i}><ListItemText primary={p.name} secondary={p.title} /></ListItem>
                  ))}
                </List>
              )}
              {tab === 3 && (
                <Grid container spacing={2} component="form" onSubmit={(e) => e.preventDefault()}>
                  <Grid size={{ xs: 12, sm: 6 }}><TextField label="First Name" defaultValue="Christopher" /></Grid>
                  <Grid size={{ xs: 12, sm: 6 }}><TextField label="Last Name" defaultValue="Burrell" /></Grid>
                  <Grid size={{ xs: 12, sm: 6 }}><TextField label="Email" defaultValue="chris@example.com" /></Grid>
                  <Grid size={{ xs: 12, sm: 6 }}><TextField label="Phone" defaultValue="+(125) 458-8547" /></Grid>
                  <Grid size={12}><TextField label="Address" defaultValue="Sydney, Australia" /></Grid>
                  <Grid size={12}><Button type="submit" variant="contained">Save changes</Button></Grid>
                </Grid>
              )}
            </Box>
          </Card>
        </Grid>
      </Grid>
    </DashboardLayout>
  )
}
