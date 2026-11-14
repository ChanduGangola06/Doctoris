'use client'
import Link from 'next/link'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import SiteLayout from '@/components/site/SiteLayout'
import { Section, SectionTitle } from '@/components/ui'
import { Categories, ProductGrid, Franchise } from '@/components/pharmacy/bits'
import { Cta, Partners } from '@/components/home/sections'
import { productData } from '@/data/data'

export default function Page() {
  return (
    <SiteLayout transparent>
      <Box sx={{ minHeight: { xs: 540, md: 680 }, display: 'flex', alignItems: 'center', color: '#fff', pt: 10, backgroundImage: 'linear-gradient(rgba(15,23,42,.62), rgba(15,23,42,.62)), url(/images/bg/pharm01.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <Container maxWidth="lg">
          <Typography variant="h2" component="h1" sx={{ fontWeight: 700, fontSize: { xs: 36, md: 58 }, maxWidth: 640 }}>Your Trusted Online Pharmacy</Typography>
          <Typography sx={{ opacity: 0.85, my: 3, maxWidth: 520 }}>Order medicines and healthcare products online and get them delivered to your door.</Typography>
          <Button component={Link} href="/pharmacy-shop" variant="contained" size="large">Shop Now</Button>
        </Container>
      </Box>
      <Categories />
      <Section bg="action.hover">
        <SectionTitle badge="Best Sellers" title="Popular Products" />
        <ProductGrid items={productData.slice(0, 8)} />
      </Section>
      <Franchise />
      <Cta />
      <Partners />
    </SiteLayout>
  )
}
