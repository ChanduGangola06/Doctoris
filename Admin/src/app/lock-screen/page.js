'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Avatar from '@mui/material/Avatar'
import AuthLayout from '@/components/layout/AuthLayout'

export default function LockScreenPage() {
  const router = useRouter()
  return (
    <AuthLayout>
      <Stack spacing={1} sx={{ alignItems: "center", mb: 2 }}>
        <Avatar src="/images/doctors/01.jpg" sx={{ width: 90, height: 90 }} />
        <Typography variant="h6">Calvin Carlo</Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>Enter your password to unlock the screen</Typography>
      </Stack>
      <Stack spacing={2} component="form" onSubmit={(e) => { e.preventDefault(); router.push('/') }}>
        <TextField label="Password" type="password" required />
        <Button type="submit" variant="contained" size="large">Unlock</Button>
        <Typography variant="body2" align="center" sx={{ color: "text.secondary" }}>Not Calvin Carlo ? <Typography component={Link} href="/login" variant="body2" color="primary" sx={{ fontWeight: 600, textDecoration: 'none' }}>Sign in</Typography></Typography>
      </Stack>
    </AuthLayout>
  )
}
