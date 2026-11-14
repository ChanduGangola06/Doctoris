'use client'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import SiteLayout from '@/components/site/SiteLayout'
import { PageBanner, Section } from '@/components/ui'

export default function Page() {
  return (
    <SiteLayout>
      <PageBanner title="Terms &amp; Conditions" crumbs={[{ label: 'Terms &amp; Conditions' }]} />
      <Section maxWidth="md">
        <Card sx={{ p: { xs: 2.5, md: 5 } }}>
            <Typography variant="h5" sx={{ mt: 4 }} gutterBottom>Introduction :</Typography>
            <Typography sx={{ color: "text.secondary", mb: 2 }}>It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text.</Typography>
            <Typography variant="h5" sx={{ mt: 4 }} gutterBottom>User Agreements :</Typography>
            <Typography sx={{ color: "text.secondary", mb: 2 }}>It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text.</Typography>
            <Typography variant="h5" sx={{ mt: 4 }} gutterBottom>Restrictions :</Typography>
            <Typography sx={{ color: "text.secondary", mb: 2 }}>It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text.</Typography>
            <Typography variant="h5" sx={{ mt: 4 }} gutterBottom>Users Question & Answer :</Typography>
            <Typography sx={{ color: "text.secondary", mb: 2 }}>It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text.</Typography>
        </Card>
      </Section>
    </SiteLayout>
  )
}
