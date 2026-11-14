'use client'
import { useState } from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import DashShell from '@/components/dash/DashShell'
import { Panel } from '@/components/ui'
import { patientProfile, payment } from '@/data/data'

export default function Page() {
  const [edit, setEdit] = useState(false)
  return (
    <DashShell type="patient" title="Patient Profile">
      <Stack spacing={3}>
        <Panel title="Personal Details" action={<Button size="small" onClick={() => setEdit((e) => !e)}>{edit ? 'Cancel' : 'Edit'}</Button>}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} sx={{ alignItems: { sm: 'center' }, mb: 3 }}>
            <Avatar src="/images/client/09.jpg" sx={{ width: 96, height: 96 }} />
            <Box><Typography variant="h6">Christopher Burrell</Typography><Typography sx={{ color: "text.secondary" }}>25 Years old</Typography></Box>
          </Stack>
          {edit ? (
            <Grid container spacing={2} component="form" onSubmit={(e) => { e.preventDefault(); setEdit(false) }}>
              {patientProfile.map((p) => <Grid key={p.title} size={{ xs: 12, sm: 6 }}><TextField label={p.title} defaultValue={p.name} /></Grid>)}
              <Grid size={12}><Button type="submit" variant="contained">Save</Button></Grid>
            </Grid>
          ) : (
            <Grid container spacing={3}>
              {patientProfile.map((p) => { const I = p.icon; return (
                <Grid key={p.title} size={{ xs: 12, sm: 6 }}>
                  <Stack direction="row" spacing={1.5} sx={{ alignItems: "center" }}><I color="primary" /><Box><Typography variant="caption" sx={{ color: "text.secondary" }}>{p.title}</Typography><Typography sx={{ fontWeight: 600 }}>{p.name}</Typography></Box></Stack>
                </Grid>) })}
            </Grid>
          )}
        </Panel>
        <Panel title="Saved Payment Methods">
          <Stack spacing={2} divider={<Divider flexItem />}>
            {payment.map((p, i) => (
              <Stack key={i} direction="row" spacing={2} sx={{ alignItems: "center" }}>
                <Box component="img" src={p.image} alt="" sx={{ height: 28 }} />
                <Box sx={{ flex: 1 }}><Typography sx={{ fontWeight: 600 }}>{p.name} {p.id}</Typography><Typography variant="caption" sx={{ color: "text.secondary" }}>{p.expires}</Typography></Box>
              </Stack>
            ))}
          </Stack>
        </Panel>
      </Stack>
    </DashShell>
  )
}
