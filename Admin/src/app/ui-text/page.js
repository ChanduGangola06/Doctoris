'use client'
import DemoPage, { Section } from '@/components/ui/Demo'
import Typography from '@mui/material/Typography'

const colors = ['primary', 'secondary', 'success', 'error', 'warning', 'info', 'text.primary', 'text.secondary', 'text.disabled']

export default function Page() {
  return (
    <DemoPage title="Text Color">
      <Section title="Palette" direction="column">{colors.map((c) => <Typography key={c} sx={{ color: c.includes('.') ? c : `${c}.main` }}>.{c} — Quick brown fox jumps over the lazy dog</Typography>)}</Section>
    </DemoPage>
  )
}
