'use client'
import DemoPage, { Section } from '@/components/ui/Demo'
import Badge from '@mui/material/Badge'
import Chip from '@mui/material/Chip'
import MailIcon from '@mui/icons-material/Mail'

const colors = ['primary','secondary','success','error','warning','info']

export default function Page() {
  return (
    <DemoPage title="Badges">
      <Section title="Chips (filled)">{colors.map((c) => <Chip key={c} color={c} label={c} />)}</Section>
      <Section title="Chips (outlined)">{colors.map((c) => <Chip key={c} color={c} variant="outlined" label={c} />)}</Section>
      <Section title="Badges">{colors.map((c) => <Badge key={c} color={c} badgeContent={4}><MailIcon color="action" /></Badge>)}<Badge color="error" variant="dot"><MailIcon color="action" /></Badge></Section>
      <Section title="Deletable"><Chip label="Deletable" onDelete={() => {}} color="primary" /><Chip label="Clickable" onClick={() => {}} /></Section>
    </DemoPage>
  )
}
