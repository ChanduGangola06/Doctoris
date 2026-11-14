'use client'
import Link from 'next/link'
import { useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Alert from '@mui/material/Alert'
import AuthLayout from '@/components/site/AuthLayout'

export default function ForgotPasswordPage() {
  const [sent, setSent] = useState(false)
  return (
    <AuthLayout>
      <Typography variant="h5" align="center" gutterBottom>Reset Your Password</Typography>
      <Typography variant="body2" align="center" sx={{ color: "text.secondary", mb: 2 }}>Please enter your email address. You will receive a link to create a new password via email.</Typography>
      <Stack spacing={2} component="form" onSubmit={(e) => { e.preventDefault(); setSent(true) }}>
        {sent && <Alert severity="success">Reset link sent. Check your inbox.</Alert>}
        <TextField label="Email Address" type="email" required />
        <Button type="submit" variant="contained" size="large">Send</Button>
        <Typography variant="body2" align="center" sx={{ color: "text.secondary" }}>Remember your password ? <Typography component={Link} href="/login" variant="body2" color="primary" sx={{ fontWeight: 600, textDecoration: 'none' }}>Sign in</Typography></Typography>
      </Stack>
    </AuthLayout>
  )
}
