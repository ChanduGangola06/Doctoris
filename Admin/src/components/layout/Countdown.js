'use client'
import { useEffect, useState } from 'react'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

const target = () => { const d = new Date(); d.setDate(d.getDate() + 30); return d.getTime() }

export default function Countdown() {
  const [end] = useState(target)
  const [now, setNow] = useState(null)
  useEffect(() => { setNow(Date.now()); const t = setInterval(() => setNow(Date.now()), 1000); return () => clearInterval(t) }, [])
  const diff = now ? Math.max(0, end - now) : 0
  const parts = [['Days', Math.floor(diff / 864e5)], ['Hours', Math.floor(diff / 36e5) % 24], ['Minutes', Math.floor(diff / 6e4) % 60], ['Seconds', Math.floor(diff / 1e3) % 60]]
  return (
    <Stack direction="row" spacing={2} sx={{ justifyContent: "center" }}>
      {parts.map(([l, v]) => (
        <Box key={l} sx={{ minWidth: 72, p: 1.5, borderRadius: 2, bgcolor: 'rgba(255,255,255,.12)' }}>
          <Typography variant="h4">{String(v).padStart(2, '0')}</Typography>
          <Typography variant="caption">{l}</Typography>
        </Box>
      ))}
    </Stack>
  )
}
