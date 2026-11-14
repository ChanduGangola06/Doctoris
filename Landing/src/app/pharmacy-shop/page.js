'use client'
import { useState } from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Slider from '@mui/material/Slider'
import SiteLayout from '@/components/site/SiteLayout'
import { PageBanner, Section } from '@/components/ui'
import { ProductGrid } from '@/components/pharmacy/bits'
import { productData, pharmaCategories } from '@/data/data'

export default function Page() {
  const [q, setQ] = useState('')
  const [sort, setSort] = useState('default')
  const [price, setPrice] = useState([0, 60])
  const num = (s) => parseFloat(String(s).replace(/[^0-9.]/g, '')) || 0
  let items = productData.filter((p) => p.name.toLowerCase().includes(q.toLowerCase()) && num(p.price) >= price[0] && num(p.price) <= price[1])
  if (sort === 'name') items = [...items].sort((a, b) => a.name.localeCompare(b.name))
  if (sort === 'price') items = [...items].sort((a, b) => num(a.price) - num(b.price))
  return (
    <SiteLayout>
      <PageBanner title="Shop" crumbs={[{ label: 'Pharmacy', href: '/pharmacy' }, { label: 'Shop' }]} bg="/images/bg/pharm02.jpg" />
      <Section>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 3 }}>
            <Stack spacing={3}>
              <TextField placeholder="Search products..." value={q} onChange={(e) => setQ(e.target.value)} />
              <Card sx={{ p: 2 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>Price range ($)</Typography>
                <Slider value={price} onChange={(_, v) => setPrice(v)} valueLabelDisplay="auto" min={0} max={60} />
              </Card>
              <Card>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, p: 2, pb: 0 }}>Categories</Typography>
                <List dense>{pharmaCategories.map((c) => <ListItemButton key={c.title1}><ListItemText primary={`${c.title1} ${c.title2}`} /></ListItemButton>)}</List>
              </Card>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 9 }}>
            <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "center", mb: 2 }}>
              <Typography sx={{ color: "text.secondary" }}>Showing {items.length} products</Typography>
              <TextField select size="small" value={sort} onChange={(e) => setSort(e.target.value)} sx={{ width: 180 }}>
                <MenuItem value="default">Default sorting</MenuItem><MenuItem value="name">Name</MenuItem><MenuItem value="price">Price: low to high</MenuItem>
              </TextField>
            </Stack>
            <ProductGrid items={items} md={4} />
          </Grid>
        </Grid>
      </Section>
    </SiteLayout>
  )
}
