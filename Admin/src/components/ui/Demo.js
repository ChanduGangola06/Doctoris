'use client'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Grid from '@mui/material/Grid'
import DashboardLayout from '@/components/layout/DashboardLayout'
import { PageHeader } from '@/components/ui'

export function Section({ title, children, direction = 'row' }) {
  return (
    <Card sx={{ p: 3, mb: 3 }}>
      <Typography variant="h6" gutterBottom>{title}</Typography>
      <Stack direction={direction} spacing={2} useFlexGap sx={{ flexWrap: "wrap", alignItems: direction === 'row' ? 'center' : 'stretch' }}>{children}</Stack>
    </Card>
  )
}

export default function DemoPage({ title, children }) {
  return (
    <DashboardLayout>
      <PageHeader title={title} crumbs={[{ label: 'UI Components' }, { label: title }]} />
      {children}
    </DashboardLayout>
  )
}
