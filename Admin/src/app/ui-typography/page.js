'use client'
import DemoPage, { Section } from '@/components/ui/Demo'
import Typography from '@mui/material/Typography'

export default function Page() {
  return (
    <DemoPage title="Typography">
      <Section title="Headings" direction="column">
        {['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].map((v) => <Typography key={v} variant={v}>{v} — Doctris Heading</Typography>)}
      </Section>
      <Section title="Body" direction="column">
        <Typography variant="subtitle1">subtitle1 — The advantage of its Latin origin.</Typography>
        <Typography variant="subtitle2">subtitle2 — The advantage of its Latin origin.</Typography>
        <Typography variant="body1">body1 — Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.</Typography>
        <Typography variant="body2">body2 — Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.</Typography>
        <Typography variant="caption">caption text</Typography>
        <Typography variant="overline">overline text</Typography>
      </Section>
      <Section title="Blockquote" direction="column"><Typography component="blockquote" sx={{ borderLeft: 4, borderColor: 'primary.main', pl: 2, fontStyle: 'italic', color: 'text.secondary', m: 0 }}>&ldquo;The best way to find yourself is to lose yourself in the service of others.&rdquo;</Typography></Section>
    </DemoPage>
  )
}
