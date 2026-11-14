'use client'
import DemoPage, { Section } from '@/components/ui/Demo'
import Box from '@mui/material/Box'

export default function Page() {
  return (
    <DemoPage title="Shadows">
      <Section title="Elevation">{[0, 1, 2, 4, 8, 12, 16, 24].map((e) => <Box key={e} sx={(t) => ({ boxShadow: t.shadows[e], bgcolor: 'background.paper', width: 110, height: 90, borderRadius: 2, display: 'grid', placeItems: 'center' })}>shadow {e}</Box>)}</Section>
    </DemoPage>
  )
}
