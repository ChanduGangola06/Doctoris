'use client'
import Link from 'next/link'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActionArea from '@mui/material/CardActionArea'
import Typography from '@mui/material/Typography'

export default function ProductCard({ p }) {
  return (
    <Card sx={{ height: '100%' }}>
      <CardActionArea component={Link} href={`/product-detail/${p.id}`}>
        <CardMedia component="img" image={p.image} alt={p.name} sx={{ aspectRatio: '1 / 1', objectFit: 'cover' }} />
        <CardContent>
          <Typography variant="subtitle1" noWrap sx={{ fontWeight: 600 }}>{p.name}</Typography>
          <Typography color="primary" sx={{ fontWeight: 600 }}>{p.price}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
