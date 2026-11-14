'use client'
import { useState, useRef, useEffect } from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'
import Avatar from '@mui/material/Avatar'
import Badge from '@mui/material/Badge'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import Divider from '@mui/material/Divider'
import SendIcon from '@mui/icons-material/Send'
import DashboardLayout from '@/components/layout/DashboardLayout'
import { PageHeader } from '@/components/ui'
import { chatData } from '@/data/data'

export default function ChatPage() {
  const [active, setActive] = useState(0)
  const [text, setText] = useState('')
  const [threads, setThreads] = useState(() => chatData.map((c) => [{ me: false, text: c.message }, { me: true, text: 'Hello! How can I help you today?' }]))
  const endRef = useRef(null)
  useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth' }) }, [threads, active])

  const send = (e) => {
    e.preventDefault()
    if (!text.trim()) return
    setThreads((t) => t.map((m, i) => (i === active ? [...m, { me: true, text }] : m)))
    setText('')
  }
  const c = chatData[active]

  return (
    <DashboardLayout>
      <PageHeader title="Chat" crumbs={[{ label: 'Chat' }]} />
      <Card sx={{ height: 'calc(100vh - 260px)', minHeight: 480, overflow: 'hidden' }}>
        <Grid container sx={{ height: '100%' }}>
          <Grid size={{ xs: 12, md: 4 }} sx={{ borderRight: { md: 1 }, borderColor: 'divider', overflowY: 'auto', height: { xs: 180, md: '100%' } }}>
            <List disablePadding>
              {chatData.map((u, i) => (
                <ListItemButton key={i} selected={i === active} onClick={() => setActive(i)}>
                  <ListItemAvatar>
                    <Badge overlap="circular" color={u.status === 'active' ? 'success' : 'default'} variant="dot" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
                      <Avatar src={u.image} />
                    </Badge>
                  </ListItemAvatar>
                  <ListItemText primary={u.name} secondary={u.message} slotProps={{ secondary: { noWrap: true } }} />
                  <Stack spacing={0.5} sx={{ alignItems: "flex-end" }}>
                    <Typography variant="caption" sx={{ color: "text.secondary" }}>{u.time}</Typography>
                    {u.badge && <Badge badgeContent={u.badgeNo} color="primary" sx={{ mr: 1.5 }} />}
                  </Stack>
                </ListItemButton>
              ))}
            </List>
          </Grid>
          <Grid size={{ xs: 12, md: 8 }} sx={{ display: 'flex', flexDirection: 'column', height: { xs: 'calc(100% - 180px)', md: '100%' } }}>
            <Stack direction="row" spacing={2} sx={{ alignItems: "center", p: 2 }}>
              <Avatar src={c.image} /><Box><Typography sx={{ fontWeight: 600 }}>{c.name}</Typography><Typography variant="caption" sx={{ color: "text.secondary" }}>{c.status === 'active' ? 'Online' : 'Offline'}</Typography></Box>
            </Stack>
            <Divider />
            <Stack spacing={1.5} sx={{ flex: 1, overflowY: 'auto', p: 2, bgcolor: 'action.hover' }}>
              {threads[active].map((m, i) => (
                <Box key={i} sx={{ alignSelf: m.me ? 'flex-end' : 'flex-start', maxWidth: '75%', px: 2, py: 1, borderRadius: 3, bgcolor: m.me ? 'primary.main' : 'background.paper', color: m.me ? 'primary.contrastText' : 'text.primary' }}>
                  <Typography variant="body2">{m.text}</Typography>
                </Box>
              ))}
              <div ref={endRef} />
            </Stack>
            <Stack direction="row" spacing={1} component="form" onSubmit={send} sx={{ p: 2 }}>
              <TextField placeholder="Enter Message..." value={text} onChange={(e) => setText(e.target.value)} />
              <IconButton type="submit" color="primary" aria-label="send"><SendIcon /></IconButton>
            </Stack>
          </Grid>
        </Grid>
      </Card>
    </DashboardLayout>
  )
}
