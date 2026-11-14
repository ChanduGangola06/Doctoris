'use client'
import Link from 'next/link'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'

export default function AuthLayout({ children, maxWidth = 440, bg = '/images/bg/01.jpg' }) {
  return (
    <Box sx={{ minHeight: '100vh', display: 'grid', placeItems: 'center', p: 2, position: 'relative', backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center', '&::before': { content: '""', position: 'absolute', inset: 0, bgcolor: 'rgba(15,23,42,.6)' } }}>
      <Card sx={{ position: 'relative', width: '100%', maxWidth, p: { xs: 3, sm: 4 } }}>
        <Box component={Link} href="/" sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
          <Image src="/images/logo-dark.png" alt="Doctris" width={130} height={24} priority style={{ height: 'auto' }} />
        </Box>
        {children}
      </Card>
    </Box>
  )
}
