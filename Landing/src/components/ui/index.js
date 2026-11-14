'use client'
import Link from 'next/link'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Chip from '@mui/material/Chip'
import Card from '@mui/material/Card'
import Stack from '@mui/material/Stack'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import { MBox, Reveal } from '@/components/motion'

export function PageBanner({ title, crumbs = [], bg = '/images/bg/01.jpg', subtitle }) {
  return (
    <Box sx={{ py: { xs: 8, md: 11 }, textAlign: 'center', color: '#fff', backgroundImage: `linear-gradient(rgba(15,23,42,.7), rgba(15,23,42,.7)), url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <Container maxWidth="md" component={MBox} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <Typography variant="h3" component="h1" sx={{ fontWeight: 700, fontSize: { xs: 28, md: 40 } }}>{title}</Typography>
        {subtitle && <Typography sx={{ opacity: 0.8, mt: 1 }}>{subtitle}</Typography>}
        <Breadcrumbs separator="›" sx={{ mt: 2, justifyContent: 'center', display: 'flex', '& .MuiBreadcrumbs-ol': { justifyContent: 'center' }, color: 'rgba(255,255,255,.7)' }}>
          <Typography component={Link} href="/" variant="body2" sx={{ color: 'inherit', textDecoration: 'none' }}>Doctris</Typography>
          {crumbs.map((c, i) => c.href
            ? <Typography key={i} component={Link} href={c.href} variant="body2" sx={{ color: 'inherit', textDecoration: 'none' }}>{c.label}</Typography>
            : <Typography key={i} variant="body2" sx={{ color: '#fff' }}>{c.label}</Typography>)}
        </Breadcrumbs>
      </Container>
    </Box>
  )
}

export function SectionTitle({ badge, title, text, align = 'center', sx }) {
  return (
    <Reveal sx={{ textAlign: align, mb: 5, maxWidth: align === 'center' ? 680 : 'none', mx: align === 'center' ? 'auto' : 0, ...sx }}>
      {badge && <Chip label={badge} color="primary" size="small" sx={{ mb: 2, bgcolor: (t) => `rgba(${t.vars.palette.primary.mainChannel} / 0.12)`, color: 'primary.main' }} />}
      <Typography variant="h4" component="h2" sx={{ fontWeight: 700, mb: 2, fontSize: { xs: 26, md: 34 } }}>{title}</Typography>
      {text && <Typography sx={{ color: "text.secondary" }}>{text}</Typography>}
    </Reveal>
  )
}

export function Section({ children, bg, sx, maxWidth = 'lg' }) {
  return (
    <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: bg, ...sx }}>
      <Container maxWidth={maxWidth}>{children}</Container>
    </Box>
  )
}

export function IconBox({ icon: Icon, color = 'primary', size = 56 }) {
  return (
    <Box sx={{ width: size, height: size, borderRadius: 2, display: 'grid', placeItems: 'center', bgcolor: (t) => `rgba(${t.vars.palette[color].mainChannel} / 0.12)`, color: `${color}.main` }}>
      <Icon />
    </Box>
  )
}

export function StatusChip({ status }) {
  const m = { Approved: 'success', Pending: 'warning', Cancelled: 'error', Paid: 'success', Unpaid: 'error' }
  return <Chip size="small" variant="outlined" label={status} color={m[status] || 'default'} />
}

export function PersonCell({ image, name, sub }) {
  return (
    <Stack direction="row" spacing={1.5} sx={{ alignItems: "center" }}>
      <Avatar src={image} alt={name} />
      <Box><Typography variant="subtitle2" noWrap>{name}</Typography>{sub && <Typography variant="caption" sx={{ color: "text.secondary" }}>{sub}</Typography>}</Box>
    </Stack>
  )
}

export function Panel({ title, icon: Icon, action, children, sx, noPadding }) {
  return (
    <Card sx={{ height: '100%', ...sx }}>
      {(title || action) && (
        <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "center", p: 2.5, borderBottom: 1, borderColor: 'divider' }}>
          <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>{Icon && <Icon color="primary" fontSize="small" />}<Typography variant="subtitle1" sx={{ fontWeight: 600 }}>{title}</Typography></Stack>
          {action}
        </Stack>
      )}
      <Box sx={{ p: noPadding ? 0 : 2.5 }}>{children}</Box>
    </Card>
  )
}
