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
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Switch from '@mui/material/Switch'
import FormControlLabel from '@mui/material/FormControlLabel'
import Rating from '@mui/material/Rating'
import Divider from '@mui/material/Divider'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import { PageHeader, Panel } from '@/components/ui'
import { doctorData, experienceData, clientReview, drTimetable } from '@/data/data'
import { FiMapPin, FiClock, FiBriefcase, FiPhone, FiMail } from '@/components/icons'

function Row({ icon: Icon, children }) {
  return <Stack direction="row" spacing={1} color="text.secondary" sx={{ alignItems: "center" }}><Icon fontSize="small" /><Typography variant="body2">{children}</Typography></Stack>
}

export default function DoctorProfile({ id }) {
  const doc = doctorData.find((d) => String(d.id) === String(id)) || doctorData[0]
  const [tab, setTab] = useState(0)
  return (
    <>
      <PageHeader title="Doctor Profile & Settings" crumbs={[{ label: 'Doctors', href: '/doctors' }, { label: 'Profile' }]} />
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, lg: 4 }}>
          <Card sx={{ textAlign: 'center', p: 3 }}>
            <Avatar src={doc.image} sx={{ width: 120, height: 120, mx: 'auto', mb: 2 }} />
            <Typography variant="h6">{doc.name}</Typography>
            <Typography gutterBottom sx={{ color: "text.secondary" }}>{doc.title}</Typography>
            <Rating value={4.5} precision={0.5} readOnly />
            <Divider sx={{ my: 2 }} />
            <Stack spacing={1} sx={{ alignItems: "flex-start" }}>
              <Row icon={FiMapPin}>{doc.location}</Row>
              <Row icon={FiClock}>{doc.time}</Row>
              <Row icon={FiBriefcase}>{doc.exp}</Row>
              <Row icon={FiPhone}>+152 534-468-854</Row>
              <Row icon={FiMail}>contact@example.com</Row>
            </Stack>
            <Button fullWidth variant="contained" sx={{ mt: 3 }}>{doc.fees}</Button>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, lg: 8 }}>
          <Card>
            <Tabs value={tab} onChange={(_, v) => setTab(v)} variant="scrollable" sx={{ borderBottom: 1, borderColor: 'divider' }}>
              {['Overview', 'Experience', 'Reviews', 'Time Table', 'Settings'].map((t) => <Tab key={t} label={t} />)}
            </Tabs>
            <Box sx={{ p: 3 }}>
              {tab === 0 && (
                <Stack spacing={2}>
                  <Typography sx={{ color: "text.secondary" }}>A gynecologist is a surgeon who specializes in the female reproductive system, which includes the cervix, fallopian tubes, ovaries, uterus, vagina and vulva. Many gynecologists also provide obstetrics care.</Typography>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>Specialties</Typography>
                  <Box component="ul" sx={{ m: 0, color: 'text.secondary' }}>
                    {['Women\'s health services', 'Pregnancy care', 'Surgical procedures', 'Specialty care'].map((s) => <li key={s}>{s}</li>)}
                  </Box>
                </Stack>
              )}
              {tab === 1 && (
                <Stack spacing={2}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>Professional Experience</Typography>
                  {experienceData.map((e, i) => (
                    <Stack key={i} direction="row" spacing={2} sx={{ borderLeft: 3, borderColor: 'primary.main', pl: 2 }}>
                      <Box><Typography variant="caption" sx={{ color: "text.secondary" }}>{e.year}</Typography>
                        <Typography variant="subtitle2">{e.name}</Typography>
                        <Typography variant="body2" sx={{ color: "text.secondary" }}>{e.place}</Typography></Box>
                    </Stack>
                  ))}
                </Stack>
              )}
              {tab === 2 && (
                <Stack spacing={3}>
                  {clientReview.map((r, i) => (
                    <Stack key={i} direction="row" spacing={2}>
                      <Avatar src={r.image} />
                      <Box><Typography variant="subtitle2">{r.name} <Typography component="span" variant="caption" sx={{ color: "text.secondary" }}>{r.title}</Typography></Typography>
                        <Rating value={5} readOnly size="small" />
                        <Typography variant="body2" sx={{ color: "text.secondary" }}>{r.desc}</Typography></Box>
                    </Stack>
                  ))}
                </Stack>
              )}
              {tab === 3 && (
                <Table size="small"><TableBody>
                  {drTimetable.map((t) => <TableRow key={t.day}><TableCell sx={{ fontWeight: 600 }}>{t.day}</TableCell><TableCell align="right">{t.time}</TableCell></TableRow>)}
                </TableBody></Table>
              )}
              {tab === 4 && (
                <Grid container spacing={2} component="form" onSubmit={(e) => e.preventDefault()}>
                  <Grid size={{ xs: 12, sm: 6 }}><TextField label="First Name" defaultValue={doc.name.split(' ')[1]} /></Grid>
                  <Grid size={{ xs: 12, sm: 6 }}><TextField label="Last Name" defaultValue={doc.name.split(' ')[2]} /></Grid>
                  <Grid size={{ xs: 12, sm: 6 }}><TextField label="Email" defaultValue="contact@example.com" /></Grid>
                  <Grid size={{ xs: 12, sm: 6 }}><TextField label="Phone" defaultValue="+152 534-468-854" /></Grid>
                  <Grid size={12}><TextField label="Bio" multiline minRows={3} /></Grid>
                  <Grid size={12}><Typography variant="subtitle2">Change password</Typography></Grid>
                  <Grid size={12}><TextField type="password" label="Old password" /></Grid>
                  <Grid size={{ xs: 12, sm: 6 }}><TextField type="password" label="New password" /></Grid>
                  <Grid size={{ xs: 12, sm: 6 }}><TextField type="password" label="Re-type new password" /></Grid>
                  <Grid size={12}>
                    <Stack>
                      {['When someone mentions me', 'When someone follows me', 'When shares my activity'].map((l) => <FormControlLabel key={l} control={<Switch defaultChecked />} label={l} />)}
                    </Stack>
                  </Grid>
                  <Grid size={12}><Button type="submit" variant="contained">Save changes</Button></Grid>
                </Grid>
              )}
            </Box>
          </Card>
        </Grid>
      </Grid>
    </>
  )
}
