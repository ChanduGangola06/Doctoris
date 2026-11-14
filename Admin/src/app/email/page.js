'use client'
import { useState } from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Checkbox from '@mui/material/Checkbox'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import InboxIcon from '@mui/icons-material/InboxOutlined'
import SendIcon from '@mui/icons-material/SendOutlined'
import StarIcon from '@mui/icons-material/StarBorder'
import DraftsIcon from '@mui/icons-material/DraftsOutlined'
import DeleteIcon from '@mui/icons-material/DeleteOutlineOutlined'
import EditIcon from '@mui/icons-material/Edit'
import DashboardLayout from '@/components/layout/DashboardLayout'
import { PageHeader } from '@/components/ui'
import { mailList } from '@/data/data'

const folders = [['Inbox', InboxIcon], ['Starred', StarIcon], ['Sent', SendIcon], ['Drafts', DraftsIcon], ['Trash', DeleteIcon]]

export default function EmailPage() {
  const [folder, setFolder] = useState('Inbox')
  const [open, setOpen] = useState(false)
  const [sel, setSel] = useState(null)
  const mails = folder === 'Inbox' ? mailList : mailList.filter((_, i) => i % (folders.findIndex((f) => f[0] === folder) + 1) === 0)

  return (
    <DashboardLayout>
      <PageHeader title="Email" crumbs={[{ label: 'Email' }]} />
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 3 }}>
          <Card sx={{ p: 2 }}>
            <Button fullWidth variant="contained" startIcon={<EditIcon />} onClick={() => setOpen(true)}>Compose</Button>
            <List sx={{ mt: 1 }}>
              {folders.map(([n, I]) => (
                <ListItemButton key={n} selected={folder === n} onClick={() => { setFolder(n); setSel(null) }} sx={{ borderRadius: 2 }}>
                  <ListItemIcon sx={{ minWidth: 36 }}><I fontSize="small" /></ListItemIcon><ListItemText primary={n} />
                </ListItemButton>
              ))}
            </List>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, md: 9 }}>
          <Card>
            {sel ? (
              <Box sx={{ p: 3 }}>
                <Button onClick={() => setSel(null)} sx={{ mb: 2 }}>← Back</Button>
                <Typography variant="h6">{sel.name}</Typography>
                <Typography variant="caption" sx={{ color: "text.secondary" }}>{sel.date}</Typography>
                <Typography sx={{ color: "text.secondary", mt: 2 }}>{sel.desc}</Typography>
              </Box>
            ) : (
              <List disablePadding>
                {mails.map((m, i) => (
                  <Box key={i}>
                    <ListItemButton onClick={() => setSel(m)}>
                      <Checkbox edge="start" onClick={(e) => e.stopPropagation()} />
                      <Stack direction={{ xs: 'column', sm: 'row' }} sx={{ flex: 1, minWidth: 0 }} spacing={{ sm: 3 }}>
                        <Typography sx={{ fontWeight: 600, width: { sm: 180 }, flexShrink: 0 }}>{m.name}</Typography>
                        <Typography noWrap sx={{ color: "text.secondary" }}>{m.desc}</Typography>
                      </Stack>
                      <Typography variant="caption" sx={{ color: "text.secondary", ml: 2, whiteSpace: 'nowrap' }}>{m.date}</Typography>
                    </ListItemButton>
                    <Divider />
                  </Box>
                ))}
              </List>
            )}
          </Card>
        </Grid>
      </Grid>
      <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="sm">
        <DialogTitle>New Message</DialogTitle>
        <DialogContent><Stack spacing={2} sx={{ pt: 1 }}><TextField label="To" /><TextField label="Subject" /><TextField label="Message" multiline minRows={6} /></Stack></DialogContent>
        <DialogActions><Button color="inherit" onClick={() => setOpen(false)}>Discard</Button><Button variant="contained" endIcon={<SendIcon />} onClick={() => setOpen(false)}>Send</Button></DialogActions>
      </Dialog>
    </DashboardLayout>
  )
}
