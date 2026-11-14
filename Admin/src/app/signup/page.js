'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import AuthLayout from '@/components/layout/AuthLayout'

export default function SignupPage() {
  const router = useRouter()
  return (
    <AuthLayout>
      <Typography variant="h5" align="center" gutterBottom>Sign Up</Typography>
      <Stack spacing={2} component="form" onSubmit={(e) => { e.preventDefault(); router.push('/login') }}>
        <TextField label="Your Name" required />
        <TextField label="Email Address" type="email" required />
        <TextField label="Password" type="password" required />
        <FormControlLabel control={<Checkbox size="small" required />} label={<>I Accept <Link href="/terms">Terms And Condition</Link></>} />
        <Button type="submit" variant="contained" size="large">Register</Button>
        <Typography variant="body2" align="center" sx={{ color: "text.secondary" }}>Already have an account ? <Typography component={Link} href="/login" variant="body2" color="primary" sx={{ fontWeight: 600, textDecoration: 'none' }}>Sign in</Typography></Typography>
      </Stack>
    </AuthLayout>
  )
}
