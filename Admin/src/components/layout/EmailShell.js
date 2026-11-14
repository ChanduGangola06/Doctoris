'use client'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Image from 'next/image'

export default function EmailShell({ children }) {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', py: 6, px: 2 }}>
      <Card sx={{ maxWidth: 600, mx: 'auto', p: { xs: 3, sm: 5 }, textAlign: 'center' }}>
        <Image src="/images/logo-dark.png" alt="Doctris" width={130} height={24} style={{ height: 'auto', marginBottom: 24 }} />
        {children}
      </Card>
    </Box>
  )
}
