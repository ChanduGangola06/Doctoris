import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import EmailShell from '@/components/layout/EmailShell'

export default function Page() {
  return (
    <EmailShell>
      <Typography variant="h5" gutterBottom>Confirm your email address</Typography>
      <Typography sx={{ color: "text.secondary", mb: 2 }}>Hi Calvin, thanks for signing up for Doctris. Please confirm your email address to finish setting up your account.</Typography>
      <Button variant="contained" size="large">Confirm Email</Button>
      <Typography variant="caption" sx={{ color: "text.secondary", display: "block", mt: 4 }}>© Doctris. If you did not sign up, ignore this email.</Typography>
    </EmailShell>
  )
}
