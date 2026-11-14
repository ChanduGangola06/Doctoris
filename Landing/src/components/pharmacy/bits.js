'use client'
import Link from 'next/link'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActionArea from '@mui/material/CardActionArea'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { Section, SectionTitle, IconBox } from '@/components/ui'
import { productData, pharmaCategories, franchiseProcess } from '@/data/data'

export function ProductCard({ p, base = '/pharmacy-product-detail' }) {
  return (
    <Card sx={{ height: '100%' }}>
      <CardActionArea component={Link} href={`${base}/${p.id}`}>
        <CardMedia component="img" image={p.image} alt={p.name} sx={{ aspectRatio: '1 / 1', objectFit: 'cover' }} />
        <CardContent>
          <Typography variant="subtitle1" noWrap sx={{ fontWeight: 600 }}>{p.name}</Typography>
          <Typography color="primary" sx={{ fontWeight: 600 }}>{p.price}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export function ProductGrid({ items = productData, md = 3 }) {
  return (
    <Grid container spacing={3}>
      {items.map((p) => <Grid key={p.id} size={{ xs: 6, md }}><ProductCard p={p} /></Grid>)}
    </Grid>
  )
}

export function Categories() {
  return (
    <Section>
      <SectionTitle title="Shop by Category" text="Browse medicines and healthcare essentials by category." />
      <Grid container spacing={3}>
        {pharmaCategories.map((c) => (
          <Grid key={c.title1 + c.title2} size={{ xs: 6, sm: 4, md: 2 }}>
            <Card component={Link} href="/pharmacy-shop" sx={{ p: 2, textAlign: 'center', display: 'block', textDecoration: 'none', color: 'text.primary', height: '100%' }}>
              <Box component="img" src={c.image} alt="" sx={{ width: '100%', aspectRatio: '1 / 1', objectFit: 'cover', borderRadius: 2 }} />
              <Typography sx={{ fontWeight: 600, mt: 1 }}>{c.title1} {c.title2}</Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Section>
  )
}

export function Franchise() {
  return (
    <Section bg="action.hover">
      <SectionTitle badge="Franchise" title="Open a Doctris Pharmacy" text="Our simple four step process to open your own store." />
      <Grid container spacing={3}>
        {franchiseProcess.map((f, i) => (
          <Grid key={f.title} size={{ xs: 6, md: 3 }}>
            <Box sx={{ textAlign: 'center' }}>
              <Box sx={{ display: 'flex', justifyContent: 'center', mb: 1.5 }}><IconBox icon={f.icon} size={64} color={['primary', 'success', 'warning', 'info'][i % 4]} /></Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>{i + 1}. {f.title}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ textAlign: 'center', mt: 4 }}><Button component={Link} href="/contact" variant="contained">Apply Now</Button></Box>
    </Section>
  )
}
