'use client'
import DemoPage, { Section } from '@/components/ui/Demo'
import { useState } from 'react'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import Popover from '@mui/material/Popover'
import Typography from '@mui/material/Typography'

export default function Page() {
  const [a, setA] = useState(null)
  return (
    <DemoPage title="Tooltips & Popovers">
      <Section title="Tooltips">{['top', 'right', 'bottom', 'left'].map((p) => <Tooltip key={p} title={`Tooltip on ${p}`} placement={p} arrow><Button variant="outlined">{p}</Button></Tooltip>)}</Section>
      <Section title="Popover">
        <Button variant="contained" onClick={(e) => setA(e.currentTarget)}>Open Popover</Button>
        <Popover open={!!a} anchorEl={a} onClose={() => setA(null)} anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}>
          <Typography sx={{ p: 2, maxWidth: 260 }}>Popover content. Click outside to close.</Typography>
        </Popover>
      </Section>
    </DemoPage>
  )
}
