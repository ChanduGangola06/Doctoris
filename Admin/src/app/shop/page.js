'use client'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import DashboardLayout from '@/components/layout/DashboardLayout'
import ProductCard from '@/components/shop/ProductCard'
import { PageHeader } from '@/components/ui'
import { productData, categories } from '@/data/data'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Box from '@mui/material/Box'

export default function ShopPage() {
  return (
    <DashboardLayout>
      <PageHeader title="Shop" crumbs={[{ label: 'Pharmacy' }, { label: 'Shop' }]} />
      <Grid container spacing={2} sx={{ mb: 4 }}>
        {categories.map((c) => (
          <Grid key={c.title1} size={{ xs: 6, sm: 4, lg: 2 }}>
            <Card sx={{ p: 2, textAlign: 'center' }}>
              <Box component="img" src={c.image} alt="" sx={{ width: 64, height: 64, objectFit: 'contain', mx: 'auto' }} />
              <Typography variant="body2" sx={{ fontWeight: 600, mt: 1 }}>{c.title1} {c.title2}</Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={3}>
        {productData.map((p) => <Grid key={p.id} size={{ xs: 6, md: 4, xl: 3 }}><ProductCard p={p} /></Grid>)}
      </Grid>
    </DashboardLayout>
  )
}
