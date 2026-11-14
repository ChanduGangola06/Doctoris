'use client'
import DemoPage, { Section } from '@/components/ui/Demo'
import Pagination from '@mui/material/Pagination'

export default function Page() {
  return (
    <DemoPage title="Pagination">
      <Section title="Basic"><Pagination count={10} color="primary" /></Section>
      <Section title="Outlined"><Pagination count={10} variant="outlined" color="primary" shape="rounded" /></Section>
      <Section title="Sizes"><Pagination count={6} size="small" /><Pagination count={6} /><Pagination count={6} size="large" /></Section>
    </DemoPage>
  )
}
