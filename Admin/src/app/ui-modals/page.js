'use client'
import DemoPage, { Section } from '@/components/ui/Demo'
import { useState } from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogActions from '@mui/material/DialogActions'
import Drawer from '@mui/material/Drawer'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

export default function Page() {
  const [dlg, setDlg] = useState(null)
  const [drawer, setDrawer] = useState(false)
  return (
    <DemoPage title="Modals">
      <Section title="Dialogs">
        <Button variant="contained" onClick={() => setDlg('basic')}>Basic</Button>
        <Button variant="contained" color="success" onClick={() => setDlg('full')}>Fullscreen</Button>
        <Button variant="contained" color="secondary" onClick={() => setDrawer(true)}>Offcanvas (Drawer)</Button>
      </Section>
      <Dialog open={dlg === 'basic'} onClose={() => setDlg(null)}>
        <DialogTitle>Modal title</DialogTitle>
        <DialogContent><DialogContentText>Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.</DialogContentText></DialogContent>
        <DialogActions><Button color="inherit" onClick={() => setDlg(null)}>Close</Button><Button variant="contained" onClick={() => setDlg(null)}>Save</Button></DialogActions>
      </Dialog>
      <Dialog fullScreen open={dlg === 'full'} onClose={() => setDlg(null)}>
        <DialogTitle>Fullscreen modal</DialogTitle>
        <DialogContent><DialogContentText>Content goes here.</DialogContentText></DialogContent>
        <DialogActions><Button onClick={() => setDlg(null)}>Close</Button></DialogActions>
      </Dialog>
      <Drawer anchor="right" open={drawer} onClose={() => setDrawer(false)}><Box sx={{ width: 320, p: 3 }}><Typography variant="h6">Offcanvas</Typography><Typography sx={{ color: "text.secondary" }}>Drawer content.</Typography></Box></Drawer>
    </DemoPage>
  )
}
