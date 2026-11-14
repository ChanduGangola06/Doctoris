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
import CloseIcon from '@mui/icons-material/Close'
import DashboardLayout from '@/components/layout/DashboardLayout'
import { PageHeader } from '@/components/ui'
import { cartItems } from '@/data/data'

const num = (s) => parseFloat(String(s).replace(/[^0-9.]/g, '')) || 0

export default function ShopCartPage() {
  const [items, setItems] = useState(cartItems)
  const subtotal = items.reduce((s, i) => s + num(i.total), 0)
  const tax = subtotal * 0.05
  return (
    <DashboardLayout>
      <PageHeader title="Shopping Cart" crumbs={[{ label: 'Shop', href: '/shop' }, { label: 'Cart' }]} />
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, lg: 8 }}>
          <Card>
            <TableContainer>
              <Table>
                <TableHead><TableRow><TableCell /><TableCell>Product</TableCell><TableCell align="right">Price</TableCell><TableCell align="right">Total</TableCell></TableRow></TableHead>
                <TableBody>
                  {items.map((i, idx) => (
                    <TableRow key={idx}>
                      <TableCell><IconButton size="small" onClick={() => setItems((x) => x.filter((_, k) => k !== idx))}><CloseIcon fontSize="small" /></IconButton></TableCell>
                      <TableCell><Stack direction="row" spacing={2} sx={{ alignItems: "center" }}><Avatar variant="rounded" src={i.image} sx={{ width: 56, height: 56 }} /><Typography sx={{ fontWeight: 600 }}>{i.name}</Typography></Stack></TableCell>
                      <TableCell align="right">{i.price}</TableCell>
                      <TableCell align="right">{i.total}</TableCell>
                    </TableRow>
                  ))}
                  {items.length === 0 && <TableRow><TableCell colSpan={4} align="center">Your cart is empty</TableCell></TableRow>}
                </TableBody>
              </Table>
            </TableContainer>
          </Card>
          <Button component={Link} href="/shop" sx={{ mt: 2 }}>Continue Shopping</Button>
        </Grid>
        <Grid size={{ xs: 12, lg: 4 }}>
          <Card sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>Cart Totals</Typography>
            <Stack spacing={1.5} divider={<Divider flexItem />}>
              <Stack direction="row" sx={{ justifyContent: "space-between" }}><span>Subtotal</span><b>${subtotal.toFixed(2)}</b></Stack>
              <Stack direction="row" sx={{ justifyContent: "space-between" }}><span>Taxes (5%)</span><b>${tax.toFixed(2)}</b></Stack>
              <Stack direction="row" sx={{ justifyContent: "space-between" }}><span>Total</span><Typography color="primary" sx={{ fontWeight: 700 }}>${(subtotal + tax).toFixed(2)}</Typography></Stack>
            </Stack>
            <Button component={Link} href="/checkout" fullWidth variant="contained" sx={{ mt: 3 }}>Proceed to checkout</Button>
          </Card>
        </Grid>
      </Grid>
    </DashboardLayout>
  )
}
