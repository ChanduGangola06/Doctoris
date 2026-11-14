'use client'
import Link from 'next/link'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import DashboardLayout from '@/components/layout/DashboardLayout'
import { PageHeader } from '@/components/ui'
import { blogData } from '@/data/data'
import { FiCalendar, FiClock, FiHeart, FaRegComment } from '@/components/icons'

export default function BlogsPage() {
  return (
    <DashboardLayout>
      <PageHeader title="Blogs" crumbs={[{ label: 'Blogs' }]} />
      <Grid container spacing={3}>
        {blogData.map((b) => (
          <Grid key={b.id} size={{ xs: 12, md: 6, xl: 4 }}>
            <Card sx={{ height: '100%' }}>
              <CardMedia component="img" image={b.image} alt="" sx={{ aspectRatio: '16 / 9', objectFit: 'cover' }} />
              <CardContent>
                <Stack direction="row" spacing={2} sx={{ color: 'text.secondary', mb: 1 }}>
                  <Stack direction="row" spacing={0.5} sx={{ alignItems: "center" }}><FiCalendar sx={{ fontSize: 16 }} /><Typography variant="caption">{b.date}</Typography></Stack>
                  <Stack direction="row" spacing={0.5} sx={{ alignItems: "center" }}><FiClock sx={{ fontSize: 16 }} /><Typography variant="caption">{b.time}</Typography></Stack>
                </Stack>
                <Typography component={Link} href={`/blog-detail/${b.id}`} variant="h6" sx={{ color: 'text.primary', textDecoration: 'none', '&:hover': { color: 'primary.main' } }}>{b.title}</Typography>
                <Stack direction="row" sx={{ justifyContent: "space-between", mt: 2, color: 'text.secondary' }}>
                  <Stack direction="row" spacing={2}>
                    <Stack direction="row" spacing={0.5} sx={{ alignItems: "center" }}><FiHeart sx={{ fontSize: 16 }} /><Typography variant="caption">{b.like}</Typography></Stack>
                    <Stack direction="row" spacing={0.5} sx={{ alignItems: "center" }}><FaRegComment sx={{ fontSize: 16 }} /><Typography variant="caption">{b.comment}</Typography></Stack>
                  </Stack>
                  <Typography component={Link} href={`/blog-detail/${b.id}`} variant="body2" color="primary" sx={{ textDecoration: 'none' }}>Read More »</Typography>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </DashboardLayout>
  )
}
