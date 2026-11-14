'use client'
import { useState } from 'react'
import Link from 'next/link'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider'
import TextField from '@mui/material/TextField'
import CloseIcon from '@mui/icons-material/Close'
import SiteLayout from '@/components/site/SiteLayout'
import { PageBanner, Section } from '@/components/ui'
import { cartData } from '@/data/data'

const num = (s) => parseFloat(String(s).replace(/[^0-9.]/g, '')) || 0

export default function Page() {
  const [items, setItems] = useState(cartData)
  const subtotal = items.reduce((s, i) => s + num(i.priceTwo), 0)
  const tax = subtotal * 0.05
  return (
    <SiteLayout>
      <PageBanner title="Shopping Cart" crumbs={[{ label: 'Shop', href: '/pharmacy-shop' }, { label: 'Cart' }]} />
      <Section>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, lg: 8 }}>
            <Card>
              <TableContainer>
                <Table>
                  <TableHead><TableRow><TableCell /><TableCell>Product</TableCell><TableCell align="right">Price</TableCell><TableCell align="right">Total</TableCell></TableRow></TableHead>
                  <TableBody>
                    {items.map((i, k) => (
                      <TableRow key={k}>
                        <TableCell><IconButton size="small" onClick={() => setItems((x) => x.filter((_, n) => n !== k))}><CloseIcon fontSize="small" /></IconButton></TableCell>
                        <TableCell><Stack direction="row" spacing={2} sx={{ alignItems: "center" }}><Avatar variant="rounded" src={i.image} sx={{ width: 56, height: 56 }} /><Typography sx={{ fontWeight: 600 }}>{i.name}</Typography></Stack></TableCell>
                        <TableCell align="right">{i.price}</TableCell>
                        <TableCell align="right">{i.priceTwo}</TableCell>
                      </TableRow>
                    ))}
                    {items.length === 0 && <TableRow><TableCell colSpan={4} align="center">Your cart is empty</TableCell></TableRow>}
                  </TableBody>
                </Table>
              </TableContainer>
            </Card>
            <Stack direction="row" spacing={2} sx={{ mt: 2 }}><TextField placeholder="Coupon code" sx={{ maxWidth: 240 }} /><Button variant="outlined">Apply</Button></Stack>
          </Grid>
          <Grid size={{ xs: 12, lg: 4 }}>
            <Card sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>Cart Totals</Typography>
              <Stack spacing={1.5} divider={<Divider flexItem />}>
                <Stack direction="row" sx={{ justifyContent: "space-between" }}><span>Subtotal</span><b>${subtotal.toFixed(2)}</b></Stack>
                <Stack direction="row" sx={{ justifyContent: "space-between" }}><span>Taxes (5%)</span><b>${tax.toFixed(2)}</b></Stack>
                <Stack direction="row" sx={{ justifyContent: "space-between" }}><span>Total</span><Typography color="primary" sx={{ fontWeight: 700 }}>${(subtotal + tax).toFixed(2)}</Typography></Stack>
              </Stack>
              <Button component={Link} href="/pharmacy-checkout" fullWidth variant="contained" sx={{ mt: 3 }}>Proceed to checkout</Button>
            </Card>
          </Grid>
        </Grid>
      </Section>
    </SiteLayout>
  )
}
