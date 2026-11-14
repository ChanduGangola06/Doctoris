'use client'
import DemoPage, { Section } from '@/components/ui/Demo'
import Box from '@mui/material/Box'

export default function Page() {
  return (
    <DemoPage title="Border">
      <Section title="Colors">{['primary', 'secondary', 'success', 'error', 'warning', 'info'].map((c) => <Box key={c} sx={{ border: 2, borderColor: `${c}.main`, width: 110, height: 80, borderRadius: 2, display: 'grid', placeItems: 'center' }}>{c}</Box>)}</Section>
      <Section title="Radius">{[0, 1, 2, 4, 8].map((r) => <Box key={r} sx={{ border: 2, borderColor: 'divider', width: 110, height: 80, borderRadius: r, display: 'grid', placeItems: 'center' }}>r={r}</Box>)}</Section>
      <Section title="Style">{['solid', 'dashed', 'dotted'].map((s) => <Box key={s} sx={{ border: 2, borderStyle: s, borderColor: 'primary.main', width: 110, height: 80, display: 'grid', placeItems: 'center' }}>{s}</Box>)}</Section>
    </DemoPage>
  )
}
