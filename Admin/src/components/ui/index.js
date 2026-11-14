'use client'
import Link from 'next/link'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Stack from '@mui/material/Stack'
import Chip from '@mui/material/Chip'

export function PageHeader({ title, crumbs = [], action }) {
  return (
    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1} sx={{ justifyContent: "space-between", alignItems: { sm: 'center' }, mb: 3 }}>
      <Box>
        <Typography variant="h5">{title}</Typography>
        {crumbs.length > 0 && (
          <Breadcrumbs sx={{ mt: 0.5 }} separator="›">
            <Typography component={Link} href="/" variant="body2" sx={{ color: "text.secondary", textDecoration: 'none' }}>Doctris</Typography>
            {crumbs.map((c, i) => (
              c.href
                ? <Typography key={i} component={Link} href={c.href} variant="body2" sx={{ color: "text.secondary", textDecoration: 'none' }}>{c.label}</Typography>
                : <Typography key={i} variant="body2" sx={{ color: "text.primary" }}>{c.label}</Typography>
            ))}
          </Breadcrumbs>
        )}
      </Box>
      {action}
    </Stack>
  )
}

export function Panel({ title, icon: Icon, action, children, sx, contentSx, noPadding }) {
  return (
    <Card sx={{ height: '100%', ...sx }}>
      {(title || action) && (
        <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "center", p: 2.5, borderBottom: 1, borderColor: 'divider' }}>
          <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
            {Icon && <Icon color="primary" fontSize="small" />}
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>{title}</Typography>
          </Stack>
          {action}
        </Stack>
      )}
      <Box sx={{ p: noPadding ? 0 : 2.5, ...contentSx }}>{children}</Box>
    </Card>
  )
}

export function StatCard({ icon: Icon, value, label, color = 'primary' }) {
  return (
    <Card sx={{ p: 2.5 }}>
      <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
        <Box sx={{ width: 52, height: 52, borderRadius: 2, display: 'grid', placeItems: 'center', bgcolor: (t) => `rgba(${t.vars.palette[color].mainChannel} / 0.12)`, color: `${color}.main` }}>
          <Icon />
        </Box>
        <Box>
          <Typography variant="h6" sx={{ lineHeight: 1.2 }}>{value}</Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>{label}</Typography>
        </Box>
      </Stack>
    </Card>
  )
}

const statusColors = { Approved: 'success', Pending: 'warning', Cancelled: 'error', Paid: 'success', Unpaid: 'error', Refunded: 'info' }
export function StatusChip({ status }) {
  return <Chip size="small" label={status} color={statusColors[status] || 'default'} variant="outlined" />
}

import Avatar from '@mui/material/Avatar'
export function PersonCell({ image, name, sub }) {
  return (
    <Stack direction="row" spacing={1.5} sx={{ alignItems: "center" }}>
      <Avatar src={image} alt={name} />
      <Box>
        <Typography variant="subtitle2" noWrap>{name}</Typography>
        {sub && <Typography variant="caption" sx={{ color: "text.secondary" }}>{sub}</Typography>}
      </Box>
    </Stack>
  )
}
