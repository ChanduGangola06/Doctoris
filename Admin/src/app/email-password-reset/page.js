import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import EmailShell from '@/components/layout/EmailShell'

export default function Page() {
  return (
    <EmailShell>
      <Typography variant="h5" gutterBottom>Reset your password</Typography>
      <Typography sx={{ color: "text.secondary", mb: 2 }}>Hi Calvin, someone requested a password reset for your account. If this was you, click the button below. The link expires in 24 hours.</Typography>
      <Button variant="contained" size="large">Reset Password</Button>
      <Typography variant="caption" sx={{ color: "text.secondary", display: "block", mt: 4 }}>If you did not request this, you can safely ignore this email.</Typography>
    </EmailShell>
  )
}
