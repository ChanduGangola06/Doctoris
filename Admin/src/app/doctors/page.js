'use client'
import Link from 'next/link'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import CardActionArea from '@mui/material/CardActionArea'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Chip from '@mui/material/Chip'
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add'
import PlaceIcon from '@mui/icons-material/PlaceOutlined'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import DashboardLayout from '@/components/layout/DashboardLayout'
import { PageHeader } from '@/components/ui'
import { doctorData } from '@/data/data'

export default function DoctorsPage() {
  return (
    <DashboardLayout>
      <PageHeader title="Doctors" crumbs={[{ label: 'Doctors' }]} action={
        <Button component={Link} href="/add-doctor" variant="contained" startIcon={<AddIcon />}>Add Doctor</Button>
      } />
      <Grid container spacing={3}>
        {doctorData.map((d) => (
          <Grid key={d.id} size={{ xs: 12, sm: 6, lg: 4, xl: 3 }}>
            <Card sx={{ height: '100%' }}>
              <CardActionArea component={Link} href={`/dr-profile/${d.id}`}>
                <CardMedia component="img" image={d.image} alt={d.name} sx={{ aspectRatio: '1 / 1', objectFit: 'cover' }} />
                <CardContent>
                  <Typography variant="h6" noWrap>{d.name}</Typography>
                  <Chip size="small" color="primary" variant="outlined" label={d.title} sx={{ my: 1 }} />
                  <Stack spacing={0.5} sx={{ color: 'text.secondary', fontSize: 14 }}>
                    <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}><PlaceIcon fontSize="small" /><span>{d.location}</span></Stack>
                    <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}><AccessTimeIcon fontSize="small" /><span>{d.time}</span></Stack>
                    <Typography variant="body2" color="primary" sx={{ fontWeight: 600 }}>{d.fees}</Typography>
                    <Typography variant="caption">{d.exp}</Typography>
                  </Stack>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </DashboardLayout>
  )
}
