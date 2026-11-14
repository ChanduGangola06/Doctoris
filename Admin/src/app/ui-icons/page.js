'use client'
import DemoPage, { Section } from '@/components/ui/Demo'
import { useState } from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import * as Icons from '@/components/icons'

const entries = Object.entries(Icons)

export default function Page() {
  const [q, setQ] = useState('')
  const list = entries.filter(([n]) => n.toLowerCase().includes(q.toLowerCase()))
  return (
    <DemoPage title="Icons">
      <Section title={`Icon registry (${list.length} Material icons)`} direction="column">
        <TextField placeholder="Search icons..." value={q} onChange={(e) => setQ(e.target.value)} sx={{ maxWidth: 320 }} />
        <Grid container spacing={2}>
          {list.map(([n, I]) => (
            <Grid key={n} size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
              <Box sx={{ textAlign: 'center', p: 1.5, border: 1, borderColor: 'divider', borderRadius: 2 }}><I fontSize="large" color="primary" /><Typography variant="caption" noWrap sx={{ display: "block" }}>{n}</Typography></Box>
            </Grid>
          ))}
        </Grid>
      </Section>
    </DemoPage>
  )
}
