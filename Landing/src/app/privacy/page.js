'use client'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import SiteLayout from '@/components/site/SiteLayout'
import { PageBanner, Section } from '@/components/ui'

export default function Page() {
  return (
    <SiteLayout>
      <PageBanner title="Privacy Policy" crumbs={[{ label: 'Privacy Policy' }]} />
      <Section maxWidth="md">
        <Card sx={{ p: { xs: 2.5, md: 5 } }}>
            <Typography variant="h5" sx={{ mt: 4 }} gutterBottom>Overview :</Typography>
            <Typography sx={{ color: "text.secondary", mb: 2 }}>It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text.</Typography>
            <Typography variant="h5" sx={{ mt: 4 }} gutterBottom>Information We Collect :</Typography>
            <Typography sx={{ color: "text.secondary", mb: 2 }}>It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text.</Typography>
            <Typography variant="h5" sx={{ mt: 4 }} gutterBottom>How We Use Your Information :</Typography>
            <Typography sx={{ color: "text.secondary", mb: 2 }}>It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text.</Typography>
            <Typography variant="h5" sx={{ mt: 4 }} gutterBottom>Cookies :</Typography>
            <Typography sx={{ color: "text.secondary", mb: 2 }}>It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text.</Typography>
        </Card>
      </Section>
    </SiteLayout>
  )
}
