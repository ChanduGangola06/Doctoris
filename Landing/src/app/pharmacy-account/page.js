'use client'
import { useState } from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import Chip from '@mui/material/Chip'
import SiteLayout from '@/components/site/SiteLayout'
import { PageBanner, Section } from '@/components/ui'
import { payment, cartData } from '@/data/data'

const orders = [['#10234', '13th Sep 2023', 'Delivered', '$510.00'], ['#10235', '29th Nov 2023', 'Shipped', '$520.00'], ['#10236', '5th Dec 2023', 'Processing', '$64.00']]

export default function Page() {
  const [tab, setTab] = useState(0)
  return (
    <SiteLayout>
      <PageBanner title="My Account" crumbs={[{ label: 'Pharmacy', href: '/pharmacy' }, { label: 'Account' }]} />
      <Section>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 3 }}>
            <Card sx={{ p: 3, textAlign: 'center' }}>
              <Avatar src="/images/client/09.jpg" sx={{ width: 96, height: 96, mx: 'auto', mb: 1 }} />
              <Typography variant="h6">Christopher Burrell</Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>chris@example.com</Typography>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, md: 9 }}>
            <Card>
              <Tabs value={tab} onChange={(_, v) => setTab(v)} variant="scrollable" sx={{ borderBottom: 1, borderColor: 'divider' }}>
                {['Orders', 'Payment Methods', 'Profile'].map((t) => <Tab key={t} label={t} />)}
              </Tabs>
              <Box sx={{ p: 3 }}>
                {tab === 0 && (
                  <Table size="small">
                    <TableHead><TableRow><TableCell>Order</TableCell><TableCell>Date</TableCell><TableCell>Status</TableCell><TableCell align="right">Total</TableCell></TableRow></TableHead>
                    <TableBody>{orders.map((o) => <TableRow key={o[0]}><TableCell>{o[0]}</TableCell><TableCell>{o[1]}</TableCell><TableCell><Chip size="small" label={o[2]} color={o[2] === 'Delivered' ? 'success' : o[2] === 'Shipped' ? 'info' : 'warning'} variant="outlined" /></TableCell><TableCell align="right">{o[3]}</TableCell></TableRow>)}</TableBody>
                  </Table>
                )}
                {tab === 1 && (
                  <Stack spacing={2}>
                    {payment.map((p, i) => (
                      <Stack key={i} direction="row" spacing={2} sx={{ alignItems: "center", p: 2, border: 1, borderColor: 'divider', borderRadius: 2 }}>
                        <Box component="img" src={p.image} alt="" sx={{ height: 32 }} />
                        <Box sx={{ flex: 1 }}><Typography sx={{ fontWeight: 600 }}>{p.name} {p.id}</Typography><Typography variant="caption" sx={{ color: "text.secondary" }}>{p.expires}</Typography></Box>
                        <Button size="small" color="error">Remove</Button>
                      </Stack>
                    ))}
                  </Stack>
                )}
                {tab === 2 && (
                  <Grid container spacing={2} component="form" onSubmit={(e) => e.preventDefault()}>
                    <Grid size={{ xs: 12, sm: 6 }}><TextField label="First Name" defaultValue="Christopher" /></Grid>
                    <Grid size={{ xs: 12, sm: 6 }}><TextField label="Last Name" defaultValue="Burrell" /></Grid>
                    <Grid size={12}><TextField label="Email" defaultValue="chris@example.com" /></Grid>
                    <Grid size={12}><TextField label="Address" defaultValue="Sydney, Australia" /></Grid>
                    <Grid size={12}><Button type="submit" variant="contained">Save changes</Button></Grid>
                  </Grid>
                )}
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Section>
    </SiteLayout>
  )
}
