'use client'
import Link from 'next/link'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Box from '@mui/material/Box'
import Image from 'next/image'
import PrintIcon from '@mui/icons-material/PrintOutlined'

const items = [
  ['Hospital Charges', 1, 2500],
  ['Special Visit Fee (Doctor)', 1, 700],
  ['Medicines', 3, 120],
  ['Lab tests', 2, 150],
]

export default function InvoiceView() {
  const total = items.reduce((s, [, q, p]) => s + q * p, 0)
  return (
    <Card sx={{ p: { xs: 2, md: 4 }, maxWidth: 900, mx: 'auto' }} id="invoice">
      <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 2 }}>
        <Box>
          <Image src="/images/logo-dark.png" alt="Doctris" width={120} height={22} style={{ height: 'auto' }} />
          <Typography variant="body2" sx={{ color: "text.secondary", mt: 2 }}>1419 Riverwood Drive,<br />Redding, CA 96001<br />info@doctris.com · (+12) 1546-456-856<br />www.doctris.com</Typography>
        </Box>
        <Box sx={{ textAlign: "right" }}>
          <Typography variant="h5">Invoice</Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>Invoice no. #54638990jnn<br />Issue Dt. 25th Sep. 2020<br />Due Dt. 11th Oct. 2020</Typography>
        </Box>
      </Stack>
      <Divider sx={{ my: 3 }} />
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 6 }}><Typography variant="caption" sx={{ color: "text.secondary" }}>Patient Name</Typography><Typography sx={{ fontWeight: 600 }}>Mary Skeens</Typography></Grid>
        <Grid size={{ xs: 12, sm: 6 }}><Typography variant="caption" sx={{ color: "text.secondary" }}>Surgery (Gynecology)</Typography><Typography sx={{ fontWeight: 600 }}>Dr. Calvin Carlo</Typography></Grid>
      </Grid>
      <Table sx={{ my: 3 }}>
        <TableHead><TableRow><TableCell>#</TableCell><TableCell>Item</TableCell><TableCell align="right">Qty</TableCell><TableCell align="right">Price</TableCell><TableCell align="right">Total</TableCell></TableRow></TableHead>
        <TableBody>
          {items.map(([n, q, p], i) => <TableRow key={n}><TableCell>{i + 1}</TableCell><TableCell>{n}</TableCell><TableCell align="right">{q}</TableCell><TableCell align="right">${p}</TableCell><TableCell align="right">${q * p}</TableCell></TableRow>)}
          <TableRow><TableCell colSpan={4} align="right" sx={{ fontWeight: 700 }}>Total</TableCell><TableCell align="right" sx={{ fontWeight: 700 }}>${total}</TableCell></TableRow>
        </TableBody>
      </Table>
      <Typography variant="body2" sx={{ color: "text.secondary" }}>Customer Services: (+12) 1546-456-856 · Terms &amp; Conditions apply.</Typography>
      <Stack direction="row" spacing={1} sx={{ mt: 3 }} className="no-print">
        <Button variant="contained" startIcon={<PrintIcon />} onClick={() => window.print()}>Print</Button>
        <Button component={Link} href="/invoice-list" variant="outlined">Invoice List</Button>
      </Stack>
    </Card>
  )
}
