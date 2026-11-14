'use client'
import Link from 'next/link'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import LinearProgress from '@mui/material/LinearProgress'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import { BarChart } from '@mui/x-charts/BarChart'
import DashShell from '@/components/dash/DashShell'
import { Panel, IconBox } from '@/components/ui'
import { adminFeature, latestAppointment, upcomingAppointment, MonthlyReport } from '@/data/data'
import { MdOutlineCheck, LiaTimesSolid } from '@/components/icons'

const colors = ['primary', 'success', 'warning']

function Appts({ title, items }) {
  return (
    <Panel title={title}>
      <List disablePadding>
        {items.map((a, i) => (
          <ListItem key={i} disableGutters secondaryAction={<Stack direction="row"><IconButton size="small" color="success"><MdOutlineCheck fontSize="small" /></IconButton><IconButton size="small" color="error"><LiaTimesSolid fontSize="small" /></IconButton></Stack>}>
            <Avatar src={a.image} sx={{ mr: 2 }} />
            <Box><Typography variant="subtitle2">{a.name}</Typography><Typography variant="caption" sx={{ color: "text.secondary" }}>{a.date}</Typography></Box>
          </ListItem>
        ))}
      </List>
    </Panel>
  )
}

export default function Page() {
  return (
    <DashShell title="Dashboard">
      <Grid container spacing={3}>
        {adminFeature.map((f, i) => (
          <Grid key={f.title} size={{ xs: 12, sm: 6, lg: 3 }}>
            <Card sx={{ p: 2.5 }}>
              <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
                <IconBox icon={f.icon} color={colors[i % 3]} />
                <Box><Typography sx={{ fontWeight: 600 }}>{f.title}</Typography><Typography variant="caption" sx={{ color: "text.secondary" }}>{f.desc}</Typography></Box>
              </Stack>
            </Card>
          </Grid>
        ))}
        <Grid size={{ xs: 12, lg: 7 }}>
          <Panel title="Patients by Month">
            <BarChart height={300} xAxis={[{ scaleType: 'band', data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'] }]} series={[{ data: [120, 230, 190, 310, 280, 350, 330, 410], color: '#2f55d4', label: 'Patients' }]} />
          </Panel>
        </Grid>
        <Grid size={{ xs: 12, lg: 5 }}>
          <Panel title="Monthly Report">
            <Stack spacing={2.5}>
              {MonthlyReport.map((m) => (
                <Box key={m.title}>
                  <Stack direction="row" sx={{ justifyContent: "space-between" }}><Typography variant="body2">{m.title}</Typography><Typography variant="body2">{m.progress}</Typography></Stack>
                  <LinearProgress variant="determinate" value={parseInt(m.progress)} sx={{ height: 8, borderRadius: 4, mt: 0.5 }} />
                </Box>
              ))}
            </Stack>
          </Panel>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}><Appts title="Latest Appointments" items={latestAppointment} /></Grid>
        <Grid size={{ xs: 12, md: 6 }}><Appts title="Upcoming Appointments" items={upcomingAppointment} /></Grid>
      </Grid>
    </DashShell>
  )
}
