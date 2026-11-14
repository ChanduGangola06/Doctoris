'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Box from '@mui/material/Box'
import SiteLayout from '@/components/site/SiteLayout'
import { PageBanner, Section } from '@/components/ui'
import { GrDashboard, RiStethoscopeLine, LuUser2, RiTimeLine, LiaFileInvoiceDollarSolid, FiStar, RiChatVoiceLine, FiUser, FiSettings, RiChat1Line, LiaSignOutAltSolid, FiHome } from '@/components/icons'

const doctor = {
  name: 'Dr. Calvin Carlo', role: 'Orthopedic', avatar: '/images/doctors/01.jpg', base: 'Doctors',
  items: [
    ['Dashboard', '/doctor-dashboard', GrDashboard], ['Appointment', '/doctor-appointment', RiStethoscopeLine], ['Patients', '/patient-list', LuUser2],
    ['Schedule Timing', '/doctor-schedule', RiTimeLine], ['Invoices', '/invoices', LiaFileInvoiceDollarSolid], ['Reviews', '/patient-review', FiStar],
    ['Messages', '/doctor-messages', RiChatVoiceLine], ['Profile', '/doctor-profile', FiUser], ['Profile Settings', '/doctor-profile-setting', FiSettings],
    ['Chat', '/doctor-chat', RiChat1Line], ['Logout', '/login', LiaSignOutAltSolid],
  ],
}
const patient = {
  name: 'Christopher Burrell', role: 'Patient', avatar: '/images/client/09.jpg', base: 'Patients',
  items: [
    ['Dashboard', '/patient-dashboard', GrDashboard], ['Profile', '/patient-profile', FiUser], ['Book Appointment', '/booking-appointment', RiStethoscopeLine],
    ['Invoice', '/patient-invoice', LiaFileInvoiceDollarSolid], ['Pharmacy', '/pharmacy', FiHome], ['Logout', '/login', LiaSignOutAltSolid],
  ],
}

export default function DashShell({ type = 'doctor', title, children }) {
  const cfg = type === 'doctor' ? doctor : patient
  const path = usePathname()
  return (
    <SiteLayout>
      <PageBanner title={title} crumbs={[{ label: cfg.base }, { label: title }]} />
      <Section sx={{ py: { xs: 4, md: 6 } }}>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 3 }}>
            <Card sx={{ position: { md: 'sticky' }, top: { md: 90 } }}>
              <Box sx={{ p: 3, textAlign: 'center' }}>
                <Avatar src={cfg.avatar} sx={{ width: 84, height: 84, mx: 'auto', mb: 1 }} />
                <Typography sx={{ fontWeight: 700 }}>{cfg.name}</Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>{cfg.role}</Typography>
              </Box>
              <List sx={{ pt: 0 }}>
                {cfg.items.map(([t, h, I]) => (
                  <ListItemButton key={t} component={Link} href={h} selected={path === h} sx={{ '&.Mui-selected': { color: 'primary.main' } }}>
                    <ListItemIcon sx={{ minWidth: 36, color: 'inherit' }}><I fontSize="small" /></ListItemIcon>
                    <ListItemText primary={t} slotProps={{ primary: { fontSize: 14, fontWeight: path === h ? 600 : 500 } }} />
                  </ListItemButton>
                ))}
              </List>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, md: 9 }}>{children}</Grid>
        </Grid>
      </Section>
    </SiteLayout>
  )
}
