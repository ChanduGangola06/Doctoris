'use client'
import { useState } from 'react'
import Link from 'next/link'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Rating from '@mui/material/Rating'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import SiteLayout from '@/components/site/SiteLayout'
import { PageBanner, Section, SectionTitle } from '@/components/ui'
import { ProductGrid } from './bits'
import { productData } from '@/data/data'

export default function ProductDetail({ id }) {
  const p = productData.find((x) => String(x.id) === String(id)) || productData[0]
  const [qty, setQty] = useState(1)
  const [img, setImg] = useState(p.image)
  const [tab, setTab] = useState(0)
  return (
    <SiteLayout>
      <PageBanner title={p.name} crumbs={[{ label: 'Shop', href: '/pharmacy-shop' }, { label: 'Detail' }]} bg="/images/bg/pharm03.jpg" />
      <Section>
        <Grid container spacing={5}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Box component="img" src={img} alt={p.name} sx={{ width: '100%', borderRadius: 3, aspectRatio: '1 / 1', objectFit: 'cover' }} />
            <Stack direction="row" spacing={1} sx={{ mt: 1.5 }}>
              {productData.slice(0, 4).map((x) => <Box key={x.id} component="img" src={x.image} alt="" onClick={() => setImg(x.image)} sx={{ width: 72, height: 72, objectFit: 'cover', borderRadius: 1.5, cursor: 'pointer', border: 2, borderColor: x.image === img ? 'primary.main' : 'transparent' }} />)}
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 7 }}>
            <Typography variant="h4" sx={{ fontWeight: 700 }}>{p.name}</Typography>
            <Typography variant="h5" color="primary" sx={{ my: 1 }}>{p.price}</Typography>
            <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}><Rating value={4} readOnly /><Typography variant="body2" sx={{ color: "text.secondary" }}>(20 Ratings)</Typography></Stack>
            <Typography sx={{ color: "text.secondary", mt: 3 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero exercitationem, unde molestiae sint quae inventore atque minima natus fugiat nihil quisquam voluptatibus.</Typography>
            <Stack direction="row" spacing={2} sx={{ alignItems: "center", mt: 3 }}>
              <Typography sx={{ fontWeight: 600 }}>Qty:</Typography>
              <Stack direction="row" sx={{ alignItems: "center", border: 1, borderColor: 'divider', borderRadius: 2 }}>
                <IconButton onClick={() => setQty((q) => Math.max(1, q - 1))}><RemoveIcon /></IconButton>
                <Typography sx={{ minWidth: 32, textAlign: 'center' }}>{qty}</Typography>
                <IconButton onClick={() => setQty((q) => q + 1)}><AddIcon /></IconButton>
              </Stack>
            </Stack>
            <Stack direction="row" spacing={1} sx={{ mt: 3 }}>
              <Button component={Link} href="/pharmacy-checkout" variant="contained" size="large">Shop Now</Button>
              <Button component={Link} href="/pharmacy-shop-cart" variant="outlined" size="large">Add to Cart</Button>
            </Stack>
          </Grid>
        </Grid>
        <Box sx={{ mt: 6 }}>
          <Tabs value={tab} onChange={(_, v) => setTab(v)} sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tab label="Description" /><Tab label="Additional Information" /><Tab label="Review" />
          </Tabs>
          <Typography sx={{ color: "text.secondary", py: 3 }}>
            {tab === 0 && 'Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts.'}
            {tab === 1 && 'Weight: 120g · Dimensions: 10 × 6 × 4 cm · Storage: keep in a cool, dry place.'}
            {tab === 2 && 'There are no reviews yet. Be the first to review this product.'}
          </Typography>
        </Box>
      </Section>
      <Section bg="action.hover">
        <SectionTitle title="Related Products" align="left" />
        <ProductGrid items={productData.filter((x) => x.id !== p.id).slice(0, 4)} />
      </Section>
    </SiteLayout>
  )
}
