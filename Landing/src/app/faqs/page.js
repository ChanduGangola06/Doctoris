'use client'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import SiteLayout from '@/components/site/SiteLayout'
import { PageBanner, Section, SectionTitle, IconBox } from '@/components/ui'
import { Faq, Cta } from '@/components/home/sections'
import { faqAbout, acccordianData } from '@/data/data'

export default function Page() {
  return (
    <SiteLayout>
      <PageBanner title="Frequently Asked Questions" crumbs={[{ label: 'FAQs' }]} />
      <Section>
        <Grid container spacing={3} sx={{ mb: 8 }}>
          {faqAbout.map((f) => (
            <Grid key={f.title} size={{ xs: 12, md: 4 }}>
              <Card sx={{ p: 3, height: '100%' }}>
                <IconBox icon={f.icon} />
                <Typography variant="h6" sx={{ mt: 2 }} gutterBottom>{f.title}</Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>{f.desc}</Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
        <SectionTitle title="General Questions" />
        <Box sx={{ maxWidth: 860, mx: 'auto' }}><Faq items={acccordianData} /></Box>
      </Section>
      <Cta />
    </SiteLayout>
  )
}
