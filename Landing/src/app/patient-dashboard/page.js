'use client'
import Link from 'next/link'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'
import { LineChart } from '@mui/x-charts/LineChart'
import DashShell from '@/components/dash/DashShell'
import { Panel } from '@/components/ui'
import { appointment, paymentTwo } from '@/data/data'

const tones = ['primary', 'success', 'warning', 'secondary', 'info', 'error']

export default function Page() {
  return (
    <DashShell type="patient" title="Patient Dashboard">
      <Grid container spacing={3}>
        <Grid size={12}>
          <Panel title="Health Overview" action={<Button component={Link} href="/booking-appointment" variant="contained" size="small">Book Appointment</Button>}>
            <LineChart height={280} xAxis={[{ scaleType: 'point', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] }]}
              series={[{ data: [72, 75, 71, 78, 74, 76, 73], label: 'Heart rate (bpm)', color: '#e43f52' }, { data: [118, 121, 119, 124, 120, 122, 119], label: 'Systolic BP', color: '#2f55d4' }]} />
          </Panel>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Panel title="Appointments">
            <List disablePadding>
              {appointment.map((a, i) => { const I = a.icon; return (
                <ListItem key={i} disableGutters secondaryAction={<Typography variant="caption" sx={{ color: "text.secondary" }}>{a.date}</Typography>}>
                  <ListItemAvatar><Avatar sx={{ bgcolor: (t) => `rgba(${t.vars.palette[tones[i % 6]].mainChannel} / 0.14)`, color: `${tones[i % 6]}.main` }}><I /></Avatar></ListItemAvatar>
                  <ListItemText primary={a.title} secondary={a.name} />
                </ListItem>) })}
            </List>
          </Panel>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Panel title="Payments">
            <List disablePadding>
              {paymentTwo.map((p, i) => <ListItem key={i} disableGutters><ListItemText primary={p.name} secondary={p.title} /></ListItem>)}
            </List>
          </Panel>
        </Grid>
      </Grid>
    </DashShell>
  )
}
