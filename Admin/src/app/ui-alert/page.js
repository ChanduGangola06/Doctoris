'use client'
import DemoPage, { Section } from '@/components/ui/Demo'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import Button from '@mui/material/Button'

export default function Page() {
  return (
    <DemoPage title="Alerts">
      <Section title="Standard" direction="column">{['success', 'info', 'warning', 'error'].map((s) => <Alert key={s} severity={s}>This is a {s} alert — check it out!</Alert>)}</Section>
      <Section title="Filled" direction="column">{['success', 'info', 'warning', 'error'].map((s) => <Alert key={s} variant="filled" severity={s}>This is a filled {s} alert.</Alert>)}</Section>
      <Section title="Outlined with title" direction="column"><Alert variant="outlined" severity="info" onClose={() => {}}><AlertTitle>Info</AlertTitle>Dismissible outlined alert with a title.</Alert><Alert severity="warning" action={<Button color="inherit" size="small">UNDO</Button>}>Alert with action</Alert></Section>
    </DemoPage>
  )
}
