'use client'
import { useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import Box from '@mui/material/Box'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import DashboardLayout from '@/components/layout/DashboardLayout'
import { PageHeader, Panel } from '@/components/ui'

const today = new Date()
const iso = (offset) => { const d = new Date(today.getFullYear(), today.getMonth(), today.getDate() + offset); return d.toISOString().slice(0, 10) }

export default function CalendarPage() {
  const [events, setEvents] = useState([
    { id: '1', title: 'Cardiogram – Dr. Calvin', start: iso(1), color: '#2f55d4' },
    { id: '2', title: 'Eye Test', start: iso(3), color: '#2eca8b' },
    { id: '3', title: 'Surgery', start: iso(5), end: iso(7), color: '#e43f52' },
    { id: '4', title: 'Dental Checkup', start: iso(-2), color: '#f17425' },
  ])
  const [pending, setPending] = useState(null)
  const [title, setTitle] = useState('')

  const add = () => {
    if (title.trim()) setEvents((e) => [...e, { id: String(Date.now()), title, start: pending, color: '#2f55d4' }])
    setPending(null); setTitle('')
  }

  return (
    <DashboardLayout>
      <PageHeader title="Calendar" crumbs={[{ label: 'Calendar' }]} />
      <Panel>
        <Box sx={{ '& .fc': { '--fc-border-color': 'var(--mui-palette-divider)', '--fc-button-bg-color': 'var(--mui-palette-primary-main)', '--fc-button-border-color': 'var(--mui-palette-primary-main)', '--fc-today-bg-color': 'rgba(47,85,212,.08)', '--fc-page-bg-color': 'transparent', fontFamily: 'inherit' }, '& .fc a': { color: 'inherit', textDecoration: 'none' } }}>
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            headerToolbar={{ left: 'prev,next today', center: 'title', right: 'dayGridMonth,dayGridWeek' }}
            events={events}
            dateClick={(info) => setPending(info.dateStr)}
            height="auto"
          />
        </Box>
      </Panel>
      <Dialog open={!!pending} onClose={() => setPending(null)} fullWidth maxWidth="xs">
        <DialogTitle>Add event on {pending}</DialogTitle>
        <DialogContent><TextField autoFocus sx={{ mt: 1 }} label="Event title" value={title} onChange={(e) => setTitle(e.target.value)} /></DialogContent>
        <DialogActions><Button color="inherit" onClick={() => setPending(null)}>Cancel</Button><Button variant="contained" onClick={add}>Add</Button></DialogActions>
      </Dialog>
    </DashboardLayout>
  )
}
