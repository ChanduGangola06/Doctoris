import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider'
import EmailShell from '@/components/layout/EmailShell'

const rows = [['Hospital Charges', '$2500'], ['Special Visit Fee (Doctor)', '$700'], ['Medicines', '$360']]

export default function Page() {
  return (
    <EmailShell>
      <Typography variant="h5" gutterBottom>Invoice #54638990jnn</Typography>
      <Typography sx={{ color: "text.secondary", mb: 2 }}>Thanks for choosing Doctris. Here is a summary of your invoice.</Typography>
      <Stack spacing={1} divider={<Divider flexItem />} sx={{ textAlign: 'left', mb: 3 }}>
        {rows.map(([k, v]) => <Stack key={k} direction="row" sx={{ justifyContent: "space-between" }}><span>{k}</span><b>{v}</b></Stack>)}
        <Stack direction="row" sx={{ justifyContent: "space-between" }}><b>Total</b><Typography color="primary" sx={{ fontWeight: 700 }}>$3560</Typography></Stack>
      </Stack>
      <Button variant="contained" size="large">Pay Invoice</Button>
    </EmailShell>
  )
}
