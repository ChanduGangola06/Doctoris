'use client'
import DemoPage, { Section } from '@/components/ui/Demo'
import Box from '@mui/material/Box'

const colors = ['primary','secondary','success','error','warning','info']

export default function Page() {
  return (
    <DemoPage title="Background">
      <Section title="Solid">{colors.map((c) => <Box key={c} sx={{ bgcolor: `${c}.main`, color: `${c}.contrastText`, px: 3, py: 2, borderRadius: 2, minWidth: 120, textAlign: 'center' }}>{c}</Box>)}</Section>
      <Section title="Light">{colors.map((c) => <Box key={c} sx={{ bgcolor: (t) => `rgba(${t.vars.palette[c].mainChannel} / 0.12)`, color: `${c}.main`, px: 3, py: 2, borderRadius: 2, minWidth: 120, textAlign: 'center' }}>{c}</Box>)}</Section>
    </DemoPage>
  )
}
