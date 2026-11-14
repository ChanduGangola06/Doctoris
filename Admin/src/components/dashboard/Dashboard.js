'use client'
import Link from 'next/link'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Rating from '@mui/material/Rating'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Divider from '@mui/material/Divider'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { BarChart } from '@mui/x-charts/BarChart'
import { PieChart } from '@mui/x-charts/PieChart'
import { PageHeader, Panel, StatCard } from '@/components/ui'
import { FiCalendar, MdOutlineCheck, LiaTimesSolid, LuUser2, BiSend } from '@/components/icons'
import { aboutData, latestAppointment, patientsReviews, chatData } from '@/data/data'

const colors = ['primary', 'success', 'warning', 'error', 'info', 'secondary']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export default function Dashboard() {
  return (
    <>
      <PageHeader title="Dashboard" />
      <Grid container spacing={3}>
        {aboutData.map((item, i) => (
          <Grid key={item.desc} size={{ xs: 12, sm: 6, md: 4, xl: 2 }}>
            <StatCard icon={item.icon} value={item.title} label={item.desc} color={colors[i % colors.length]} />
          </Grid>
        ))}

        <Grid size={{ xs: 12, lg: 8 }}>
          <Panel title="Patients visit by Gender">
            <BarChart
              height={340}
              xAxis={[{ scaleType: 'band', data: months }]}
              series={[
                { label: 'Male', data: [300, 250, 548, 440, 550, 570, 560, 610, 580, 630, 600, 660], color: '#396cf0' },
                { label: 'Female', data: [256, 480, 560, 760, 850, 1010, 980, 870, 1050, 910, 1140, 940], color: '#53c797' },
                { label: 'Children', data: [480, 223, 256, 350, 410, 360, 260, 450, 480, 520, 530, 410], color: '#f1b561' },
              ]}
            />
          </Panel>
        </Grid>
        <Grid size={{ xs: 12, lg: 4 }}>
          <Panel title="Department Visits">
            <PieChart
              height={300}
              series={[{
                innerRadius: 60, paddingAngle: 2, cornerRadius: 4,
                data: [
                  { id: 0, value: 44, label: 'Cardiology', color: '#396cf0' },
                  { id: 1, value: 55, label: 'Gynecology', color: '#53c797' },
                  { id: 2, value: 67, label: 'Dental Care', color: '#f1b561' },
                  { id: 3, value: 83, label: 'Neurology', color: '#f0735a' },
                ],
              }]}
            />
          </Panel>
        </Grid>

        <Grid size={{ xs: 12, lg: 6, xl: 4 }}>
          <Panel title="Latest Appointment" icon={FiCalendar} action={<Typography variant="body2" sx={{ color: "text.secondary" }}>55 Patients</Typography>}>
            <List disablePadding>
              {latestAppointment.map((a, i) => (
                <ListItem key={i} disableGutters secondaryAction={
                  <Stack direction="row" spacing={0.5}>
                    <IconButton size="small" color="success"><MdOutlineCheck fontSize="small" /></IconButton>
                    <IconButton size="small" color="error"><LiaTimesSolid fontSize="small" /></IconButton>
                  </Stack>
                }>
                  <Avatar src={a.image} sx={{ mr: 2 }} />
                  <Box>
                    <Typography variant="subtitle2">{a.name}</Typography>
                    <Typography variant="caption" sx={{ color: "text.secondary" }}>{a.date}</Typography>
                  </Box>
                </ListItem>
              ))}
            </List>
          </Panel>
        </Grid>

        <Grid size={{ xs: 12, lg: 6, xl: 4 }}>
          <Panel title="Messages" noPadding>
            <Stack sx={{ height: 320, overflowY: 'auto', p: 2.5 }} spacing={1.5}>
              {chatData.slice(0, 5).map((c, i) => (
                <Stack key={i} direction="row" spacing={1.5} sx={{ alignItems: "center" }}>
                  <Avatar src={c.image} />
                  <Box sx={{ flex: 1, minWidth: 0 }}>
                    <Typography variant="subtitle2">{c.name}</Typography>
                    <Typography variant="caption" noWrap sx={{ color: "text.secondary" }}>{c.message}</Typography>
                  </Box>
                  <Typography variant="caption" sx={{ color: "text.secondary" }}>{c.time}</Typography>
                </Stack>
              ))}
            </Stack>
            <Divider />
            <Stack direction="row" spacing={1} sx={{ p: 2 }}>
              <TextField placeholder="Enter Message..." />
              <Button variant="contained" aria-label="send"><BiSend fontSize="small" /></Button>
            </Stack>
          </Panel>
        </Grid>

        <Grid size={{ xs: 12, xl: 4 }}>
          <Panel title="Patients Reviews" icon={LuUser2} action={
            <Select size="small" defaultValue="new"><MenuItem value="new">New</MenuItem><MenuItem value="old">Old</MenuItem></Select>
          }>
            <Stack spacing={2.5} sx={{ maxHeight: 360, overflowY: 'auto' }}>
              {patientsReviews.map((r, i) => (
                <Stack key={i} direction="row" spacing={2} sx={{ alignItems: "center", justifyContent: "space-between" }}>
                  <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
                    <Avatar src={r.image} sx={{ width: 52, height: 52 }} />
                    <Box>
                      <Typography variant="subtitle2">{r.name}</Typography>
                      <Typography variant="caption" sx={{ color: "text.secondary" }}>{r.speciality}</Typography>
                      <Stack direction="row" spacing={0.5} sx={{ alignItems: "center" }}><Rating value={5} readOnly size="small" /><Typography variant="caption">({r.rate})</Typography></Stack>
                    </Box>
                  </Stack>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>{r.patients} Patients</Typography>
                </Stack>
              ))}
            </Stack>
          </Panel>
        </Grid>
      </Grid>
    </>
  )
}
