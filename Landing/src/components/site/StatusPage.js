'use client'
import Link from 'next/link'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Image from 'next/image'

export default function StatusPage({ code, title, text, action = { label: 'Back to Home', href: '/' }, children, bg = '/images/bg/01.jpg' }) {
  return (
    <Box sx={{ minHeight: '100vh', display: 'grid', placeItems: 'center', textAlign: 'center', p: 3, color: '#fff', backgroundImage: `linear-gradient(rgba(15,23,42,.72), rgba(15,23,42,.72)), url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <Stack spacing={2} sx={{ alignItems: "center", maxWidth: 560 }}>
        <Image src="/images/logo-light.png" alt="Doctris" width={130} height={24} style={{ height: 'auto' }} />
        {code && <Typography variant="h1" sx={{ fontSize: { xs: 88, md: 140 }, lineHeight: 1 }}>{code}</Typography>}
        <Typography variant="h4">{title}</Typography>
        <Typography sx={{ opacity: 0.8 }}>{text}</Typography>
        {children}
        {action && <Button component={Link} href={action.href} variant="contained" size="large">{action.label}</Button>}
      </Stack>
    </Box>
  )
}
