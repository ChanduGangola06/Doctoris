import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Alert from '@mui/material/Alert'
import EmailShell from '@/components/layout/EmailShell'

export default function Page() {
  return (
    <EmailShell>
      <Alert severity="warning" sx={{ mb: 3, textAlign: 'left' }}>Warning: Your appointment needs attention.</Alert>
      <Typography variant="h5" gutterBottom>Your appointment is tomorrow</Typography>
      <Typography sx={{ color: "text.secondary", mb: 2 }}>Hi Calvin, this is a reminder of your upcoming appointment with Dr. Cristino Murphy at 11:00 AM.</Typography>
      <Button variant="contained" size="large">View Appointment</Button>
    </EmailShell>
  )
}
