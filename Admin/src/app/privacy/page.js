import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import DashboardLayout from '@/components/layout/DashboardLayout'
import { PageHeader } from '@/components/ui'

export default function Page() {
  return (
    <DashboardLayout>
      <PageHeader title="Privacy Policy" crumbs={[{ label: 'Privacy Policy' }]} />
      <Card sx={{ p: { xs: 2, md: 4 } }}>
          <Typography variant="h6" sx={{ mt: 3 }}>Overview :</Typography>
          <Typography sx={{ color: "text.secondary", mb: 2 }}>It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text.</Typography>
          <Typography variant="h6" sx={{ mt: 3 }}>Information We Collect :</Typography>
          <Typography sx={{ color: "text.secondary", mb: 2 }}>It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text.</Typography>
          <Typography variant="h6" sx={{ mt: 3 }}>How We Use Your Information :</Typography>
          <Typography sx={{ color: "text.secondary", mb: 2 }}>It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text.</Typography>
      </Card>
    </DashboardLayout>
  )
}
