'use client'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import DashboardLayout from '@/components/layout/DashboardLayout'
import { PageHeader } from '@/components/ui'
import { faqData } from '@/data/data'

export default function Page() {
  return (
    <DashboardLayout>
      <PageHeader title="FAQs" crumbs={[{ label: 'FAQs' }]} />
      <div style={{ maxWidth: 900 }}>
        {faqData.map((f, i) => (
          <Accordion key={f.id} defaultExpanded={i === 0} disableGutters>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}><Typography sx={{ fontWeight: 600 }}>{f.title}</Typography></AccordionSummary>
            <AccordionDetails><Typography sx={{ color: "text.secondary" }}>{f.desc}</Typography></AccordionDetails>
          </Accordion>
        ))}
      </div>
    </DashboardLayout>
  )
}
