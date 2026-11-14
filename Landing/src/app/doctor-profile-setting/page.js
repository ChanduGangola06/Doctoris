'use client'
import { useState } from 'react'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import Switch from '@mui/material/Switch'
import FormControlLabel from '@mui/material/FormControlLabel'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'
import DashShell from '@/components/dash/DashShell'
import { Panel } from '@/components/ui'

export default function Page() {
  const [ok, setOk] = useState(false)
  const [img, setImg] = useState('/images/doctors/01.jpg')
  return (
    <DashShell title="Profile Settings">
      <Stack spacing={3}>
        <Panel title="Personal Information">
          <Grid container spacing={2} component="form" onSubmit={(e) => { e.preventDefault(); setOk(true) }}>
            <Grid size={12}>
              <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
                <Avatar src={img} sx={{ width: 84, height: 84 }} />
                <Button component="label" variant="outlined">Upload picture<input hidden type="file" accept="image/*" onChange={(e) => e.target.files[0] && setImg(URL.createObjectURL(e.target.files[0]))} /></Button>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}><TextField label="First Name" defaultValue="Calvin" /></Grid>
            <Grid size={{ xs: 12, sm: 6 }}><TextField label="Last Name" defaultValue="Carlo" /></Grid>
            <Grid size={{ xs: 12, sm: 6 }}><TextField label="Email" defaultValue="calvin@example.com" /></Grid>
            <Grid size={{ xs: 12, sm: 6 }}><TextField label="Phone" defaultValue="+152 534-468-854" /></Grid>
            <Grid size={12}><TextField label="Bio" multiline minRows={4} /></Grid>
            <Grid size={12}><Button type="submit" variant="contained">Save changes</Button></Grid>
          </Grid>
        </Panel>
        <Panel title="Change Password">
          <Grid container spacing={2} component="form" onSubmit={(e) => { e.preventDefault(); setOk(true) }}>
            <Grid size={12}><TextField type="password" label="Old password" /></Grid>
            <Grid size={{ xs: 12, sm: 6 }}><TextField type="password" label="New password" /></Grid>
            <Grid size={{ xs: 12, sm: 6 }}><TextField type="password" label="Re-type new password" /></Grid>
            <Grid size={12}><Button type="submit" variant="contained">Save password</Button></Grid>
          </Grid>
        </Panel>
        <Panel title="Notifications">
          <Stack>{['When someone mentions me', 'When someone follows me', 'When shares my activity'].map((l) => <FormControlLabel key={l} control={<Switch defaultChecked />} label={l} />)}</Stack>
        </Panel>
      </Stack>
      <Snackbar open={ok} autoHideDuration={3000} onClose={() => setOk(false)}><Alert severity="success" variant="filled">Saved</Alert></Snackbar>
    </DashShell>
  )
}
