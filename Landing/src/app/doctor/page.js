'use client'
import Link from 'next/link'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import SiteLayout from '@/components/site/SiteLayout'
import { PageBanner, Section } from '@/components/ui'
import { doctorData } from '@/data/data'

export default function Page() {
  return (
    <SiteLayout>
      <PageBanner title="Doctors" crumbs={[{ label: 'Doctors' }]} />
      <Section>
        <Grid container spacing={3}>
          {doctorData.map((d) => (
            <Grid key={d.name} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card sx={{ p: 3, textAlign: 'center', height: '100%' }}>
                <Avatar src={d.image} sx={{ width: 120, height: 120, mx: 'auto', mb: 2 }} />
                <Typography variant="h6">{d.name}</Typography>
                <Typography color="primary" variant="body2" gutterBottom>{d.speciality}</Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>{d.location}</Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>{d.time}</Typography>
                <Stack direction="row" spacing={1} sx={{ justifyContent: "center", mt: 2 }}>
                  <Button component={Link} href="/doctor-profile" size="small" variant="outlined">Profile</Button>
                  <Button component={Link} href="/booking-appointment" size="small" variant="contained">Book</Button>
                </Stack>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Section>
    </SiteLayout>
  )
}
