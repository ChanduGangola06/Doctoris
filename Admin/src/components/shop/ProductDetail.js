'use client'
import { useState } from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import Rating from '@mui/material/Rating'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import { PageHeader } from '@/components/ui'
import ProductCard from './ProductCard'
import { productData } from '@/data/data'

export default function ProductDetail({ id }) {
  const p = productData.find((x) => String(x.id) === String(id)) || productData[0]
  const [qty, setQty] = useState(1)
  const [img, setImg] = useState(p.image)
  return (
    <>
      <PageHeader title={p.name} crumbs={[{ label: 'Shop', href: '/shop' }, { label: 'Product Detail' }]} />
      <Card sx={{ p: { xs: 2, md: 4 } }}>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Box component="img" src={img} alt={p.name} sx={{ width: '100%', borderRadius: 2, aspectRatio: '1 / 1', objectFit: 'cover' }} />
            <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
              {productData.slice(0, 4).map((x) => <Box key={x.id} component="img" src={x.image} alt="" onClick={() => setImg(x.image)} sx={{ width: 64, height: 64, objectFit: 'cover', borderRadius: 1, cursor: 'pointer', border: 2, borderColor: x.image === img ? 'primary.main' : 'transparent' }} />)}
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 7 }}>
            <Typography variant="h4">{p.name}</Typography>
            <Typography variant="h5" color="primary" sx={{ my: 1 }}>{p.price}</Typography>
            <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}><Rating value={4} readOnly /><Typography variant="body2" sx={{ color: "text.secondary" }}>(20 Ratings)</Typography></Stack>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, mt: 3 }}>Overview :</Typography>
            <Typography sx={{ color: "text.secondary" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero exercitationem, unde molestiae sint quae inventore atque minima natus fugiat nihil quisquam voluptatibus, ratione ab sed odit.</Typography>
            <Stack direction="row" spacing={2} sx={{ alignItems: "center", mt: 3 }}>
              <Typography sx={{ fontWeight: 600 }}>Qty:</Typography>
              <Stack direction="row" sx={{ alignItems: "center", border: 1, borderColor: 'divider', borderRadius: 2 }}>
                <IconButton onClick={() => setQty((q) => Math.max(1, q - 1))}><RemoveIcon /></IconButton>
                <Typography sx={{ minWidth: 32, textAlign: 'center' }}>{qty}</Typography>
                <IconButton onClick={() => setQty((q) => q + 1)}><AddIcon /></IconButton>
              </Stack>
            </Stack>
            <Stack direction="row" spacing={1} sx={{ mt: 3 }}>
              <Button variant="contained" size="large">Shop Now</Button>
              <Button variant="outlined" size="large">Add to Cart</Button>
            </Stack>
          </Grid>
        </Grid>
      </Card>
      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>Related Products:</Typography>
      <Grid container spacing={3}>
        {productData.filter((x) => x.id !== p.id).slice(0, 4).map((x) => <Grid key={x.id} size={{ xs: 6, md: 3 }}><ProductCard p={x} /></Grid>)}
      </Grid>
    </>
  )
}
