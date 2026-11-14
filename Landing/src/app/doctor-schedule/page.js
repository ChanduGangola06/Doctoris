'use client'
import { useState } from 'react'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Switch from '@mui/material/Switch'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'
import DashShell from '@/components/dash/DashShell'
import { Panel } from '@/components/ui'

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

export default function Page() {
  const [sched, setSched] = useState(days.map((d, i) => ({ day: d, on: i < 6, from: '08:00', to: '20:00' })))
  const [ok, setOk] = useState(false)
  const set = (i, patch) => setSched((s) => s.map((x, k) => (k === i ? { ...x, ...patch } : x)))
  return (
    <DashShell title="Schedule Timing">
      <Panel title="Weekly availability">
        <Stack spacing={2} component="form" onSubmit={(e) => { e.preventDefault(); setOk(true) }}>
          {sched.map((s, i) => (
            <Stack key={s.day} direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ alignItems: { sm: 'center' } }}>
              <Stack direction="row" sx={{ alignItems: "center", width: 180 }}><Switch checked={s.on} onChange={(e) => set(i, { on: e.target.checked })} /><Typography sx={{ fontWeight: 600 }}>{s.day}</Typography></Stack>
              <TextField type="time" label="From" disabled={!s.on} value={s.from} onChange={(e) => set(i, { from: e.target.value })} slotProps={{ inputLabel: { shrink: true } }} sx={{ maxWidth: 180 }} />
              <TextField type="time" label="To" disabled={!s.on} value={s.to} onChange={(e) => set(i, { to: e.target.value })} slotProps={{ inputLabel: { shrink: true } }} sx={{ maxWidth: 180 }} />
            </Stack>
          ))}
          <div><Button type="submit" variant="contained">Save schedule</Button></div>
        </Stack>
      </Panel>
      <Snackbar open={ok} autoHideDuration={3000} onClose={() => setOk(false)}><Alert severity="success" variant="filled">Schedule saved</Alert></Snackbar>
    </DashShell>
  )
}
