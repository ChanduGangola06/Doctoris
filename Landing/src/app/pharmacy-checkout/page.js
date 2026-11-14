'use client'
import { useState } from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider'
import RadioGroup from '@mui/material/RadioGroup'
import Radio from '@mui/material/Radio'
import FormControlLabel from '@mui/material/FormControlLabel'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'
import SiteLayout from '@/components/site/SiteLayout'
import { PageBanner, Section } from '@/components/ui'
import { cartData } from '@/data/data'

const num = (s) => parseFloat(String(s).replace(/[^0-9.]/g, '')) || 0

export default function Page() {
  const [done, setDone] = useState(false)
  const total = cartData.reduce((s, i) => s + num(i.priceTwo), 0)
  return (
    <SiteLayout>
      <PageBanner title="Checkout" crumbs={[{ label: 'Shop', href: '/pharmacy-shop' }, { label: 'Checkout' }]} />
      <Section>
        <Grid container spacing={4} component="form" onSubmit={(e) => { e.preventDefault(); setDone(true) }}>
          <Grid size={{ xs: 12, lg: 8 }}>
            <Card sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>Billing Details</Typography>
              <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 6 }}><TextField label="First Name" required /></Grid>
                <Grid size={{ xs: 12, sm: 6 }}><TextField label="Last Name" required /></Grid>
                <Grid size={{ xs: 12, sm: 6 }}><TextField type="email" label="Email" required /></Grid>
                <Grid size={{ xs: 12, sm: 6 }}><TextField label="Phone" /></Grid>
                <Grid size={12}><TextField label="Address" required /></Grid>
                <Grid size={{ xs: 12, sm: 4 }}><TextField label="City" /></Grid>
                <Grid size={{ xs: 12, sm: 4 }}><TextField label="State" /></Grid>
                <Grid size={{ xs: 12, sm: 4 }}><TextField label="Zip" /></Grid>
              </Grid>
              <Typography variant="h6" sx={{ mt: 4 }}>Payment</Typography>
              <RadioGroup defaultValue="card">
                <FormControlLabel value="card" control={<Radio />} label="Credit / Debit card" />
                <FormControlLabel value="paypal" control={<Radio />} label="PayPal" />
                <FormControlLabel value="cod" control={<Radio />} label="Cash on delivery" />
              </RadioGroup>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, lg: 4 }}>
            <Card sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>Your Order</Typography>
              <Stack spacing={1} divider={<Divider flexItem />}>
                {cartData.map((i, k) => <Stack key={k} direction="row" sx={{ justifyContent: "space-between" }}><Typography variant="body2">{i.name}</Typography><b>{i.priceTwo}</b></Stack>)}
                <Stack direction="row" sx={{ justifyContent: "space-between" }}><b>Total</b><Typography color="primary" sx={{ fontWeight: 700 }}>${total.toFixed(2)}</Typography></Stack>
              </Stack>
              <Button type="submit" fullWidth variant="contained" size="large" sx={{ mt: 3 }}>Place Order</Button>
            </Card>
          </Grid>
        </Grid>
      </Section>
      <Snackbar open={done} autoHideDuration={3000} onClose={() => setDone(false)}><Alert severity="success" variant="filled">Order placed successfully</Alert></Snackbar>
    </SiteLayout>
  )
}
