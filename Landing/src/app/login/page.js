'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import Divider from '@mui/material/Divider'
import AuthLayout from '@/components/site/AuthLayout'
import { SlSocialGoogle, AiFillFacebook } from '@/components/icons'

export default function LoginPage() {
  const router = useRouter()
  return (
    <AuthLayout>
      <Typography variant="h5" align="center" gutterBottom>Sign In</Typography>
      <Stack spacing={2} component="form" onSubmit={(e) => { e.preventDefault(); router.push('/') }}>
        <TextField label="Email Address" type="email" required />
        <TextField label="Password" type="password" required />
        <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "center" }}>
          <FormControlLabel control={<Checkbox size="small" />} label="Remember me" />
          <Typography component={Link} href="/forgot-password" variant="body2" color="primary" sx={{ textDecoration: 'none' }}>Forgot password ?</Typography>
        </Stack>
        <Button type="submit" variant="contained" size="large">Sign in</Button>
        <Divider>Or</Divider>
        <Stack direction="row" spacing={1}>
          <Button fullWidth variant="outlined" color="inherit" startIcon={<SlSocialGoogle />}>Google</Button>
          <Button fullWidth variant="outlined" color="inherit" startIcon={<AiFillFacebook />}>Facebook</Button>
        </Stack>
        <Typography variant="body2" align="center" sx={{ color: "text.secondary" }}>Don&apos;t have an account ? <Typography component={Link} href="/signup" variant="body2" color="primary" sx={{ fontWeight: 600, textDecoration: 'none' }}>Sign Up</Typography></Typography>
      </Stack>
    </AuthLayout>
  )
}
