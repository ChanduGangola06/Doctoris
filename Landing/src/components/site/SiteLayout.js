'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Collapse from '@mui/material/Collapse'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider'
import Fab from '@mui/material/Fab'
import Fade from '@mui/material/Fade'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme, useColorScheme } from '@mui/material/styles'
import MenuIcon from '@mui/icons-material/Menu'
import ExpandMore from '@mui/icons-material/ExpandMore'
import ExpandLess from '@mui/icons-material/ExpandLess'
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp'
import DarkModeIcon from '@mui/icons-material/DarkModeOutlined'
import LightModeIcon from '@mui/icons-material/LightModeOutlined'
import Facebook from '@mui/icons-material/Facebook'
import LinkedIn from '@mui/icons-material/LinkedIn'
import Instagram from '@mui/icons-material/Instagram'
import Twitter from '@mui/icons-material/Twitter'
import YouTube from '@mui/icons-material/YouTube'
import { nav } from './navConfig'
import { ScrollProgress } from '@/components/motion'

function DesktopItem({ item, light }) {
  const [a, setA] = useState(null)
  const color = light ? '#fff' : 'text.primary'
  if (!item.children) return <Button component={Link} href={item.href} sx={{ color }}>{item.title}</Button>
  return (
    <>
      <Button sx={{ color }} endIcon={<KeyboardArrowDown />} onClick={(e) => setA(e.currentTarget)}>{item.title}</Button>
      <Menu anchorEl={a} open={!!a} onClose={() => setA(null)} slotProps={{ paper: { sx: { minWidth: 200, maxHeight: 440 } } }}>
        {item.children.map((c) => <MenuItem key={c.href} component={Link} href={c.href} onClick={() => setA(null)}>{c.title}</MenuItem>)}
      </Menu>
    </>
  )
}

function MobileDrawer({ open, onClose }) {
  const [exp, setExp] = useState(null)
  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box sx={{ width: 280, pt: 2 }}>
        <List>
          {nav.map((item) => item.children ? (
            <Box key={item.title}>
              <ListItemButton onClick={() => setExp(exp === item.title ? null : item.title)}>
                <ListItemText primary={item.title} />{exp === item.title ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={exp === item.title} unmountOnExit>
                {item.children.map((c) => <ListItemButton key={c.href} component={Link} href={c.href} onClick={onClose} sx={{ pl: 4 }}><ListItemText primary={c.title} /></ListItemButton>)}
              </Collapse>
            </Box>
          ) : (
            <ListItemButton key={item.href} component={Link} href={item.href} onClick={onClose}><ListItemText primary={item.title} /></ListItemButton>
          ))}
        </List>
      </Box>
    </Drawer>
  )
}

export function Navbar({ transparent = false }) {
  const theme = useTheme()
  const desktop = useMediaQuery(theme.breakpoints.up('md'))
  const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 40 })
  const [open, setOpen] = useState(false)
  const { mode, setMode, systemMode } = useColorScheme()
  const resolved = mode === 'system' ? systemMode : mode
  const light = transparent && !scrolled
  return (
    <AppBar position="fixed" color="inherit" elevation={0}
      sx={{ bgcolor: light ? 'transparent' : 'background.paper', boxShadow: light ? 'none' : '0 0 3px rgba(60,72,88,.15)', transition: 'all .25s', backgroundImage: 'none' }}>
      <Container maxWidth="lg" disableGutters sx={{ px: 2 }}>
        <Toolbar disableGutters sx={{ minHeight: light ? 84 : 68, transition: 'min-height .25s' }}>
          <Link href="/" style={{ display: 'flex' }}>
            <Image src={light ? '/images/logo-light.png' : '/images/logo-dark.png'} alt="Doctris" width={130} height={24} priority style={{ height: 'auto' }} />
          </Link>
          <Box sx={{ flexGrow: 1 }} />
          {desktop && nav.map((item) => <DesktopItem key={item.title} item={item} light={light} />)}
          <IconButton onClick={() => setMode(resolved === 'dark' ? 'light' : 'dark')} sx={{ color: light ? '#fff' : 'text.primary', ml: 1 }} aria-label="toggle theme">
            {resolved === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
          {desktop && <Button component={Link} href="/booking-appointment" variant="contained" sx={{ ml: 1 }}>Book Now</Button>}
          {!desktop && <IconButton onClick={() => setOpen(true)} sx={{ color: light ? '#fff' : 'text.primary' }} aria-label="menu"><MenuIcon /></IconButton>}
        </Toolbar>
      </Container>
      <MobileDrawer open={open} onClose={() => setOpen(false)} />
    </AppBar>
  )
}

const footerLinks = {
  Company: [['About us', '/aboutus'], ['Services', '/departments'], ['Team', '/doctor'], ['Project', '/blogs'], ['Blog', '/blogs'], ['Login', '/login']],
  Departments: [['Eye Care', '/departments'], ['Psychotherapy', '/departments'], ['Heart Disease', '/departments'], ['Dental Care', '/departments'], ['Orthopedic', '/departments'], ['Neurology', '/departments']],
}

export function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: '#161c2d', color: 'rgba(255,255,255,.7)', pt: 8, pb: 3 }}>
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Image src="/images/logo-light.png" alt="Doctris" width={130} height={24} style={{ height: 'auto' }} />
            <Typography variant="body2" sx={{ mt: 2, maxWidth: 320 }}>Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.</Typography>
            <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
              {[Facebook, LinkedIn, Instagram, Twitter, YouTube].map((I, i) => <IconButton key={i} size="small" sx={{ color: '#fff', border: '1px solid rgba(255,255,255,.2)' }}><I fontSize="small" /></IconButton>)}
            </Stack>
          </Grid>
          {Object.entries(footerLinks).map(([t, links]) => (
            <Grid key={t} size={{ xs: 6, md: 2 }}>
              <Typography variant="subtitle1" sx={{ color: '#fff', fontWeight: 600, mb: 2 }}>{t}</Typography>
              <Stack spacing={1}>{links.map(([l, h]) => <Typography key={l} component={Link} href={h} variant="body2" sx={{ color: 'inherit', textDecoration: 'none', '&:hover': { color: '#fff' } }}>› {l}</Typography>)}</Stack>
            </Grid>
          ))}
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="subtitle1" sx={{ color: '#fff', fontWeight: 600, mb: 2 }}>Useful Links</Typography>
            <Stack spacing={1}>
              {[['Terms of Services', '/terms'], ['Privacy Policy', '/privacy'], ['Documentation', '/faqs'], ['Changelog', '/faqs'], ['Components', '/faqs']].map(([l, h]) => <Typography key={l} component={Link} href={h} variant="body2" sx={{ color: 'inherit', textDecoration: 'none', '&:hover': { color: '#fff' } }}>› {l}</Typography>)}
            </Stack>
          </Grid>
        </Grid>
        <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,.12)' }} />
        <Typography variant="body2" align="center">© {new Date().getFullYear()} Doctris. Design with ♥ using Next.js &amp; MUI.</Typography>
      </Container>
    </Box>
  )
}

function ScrollTop() {
  const t = useScrollTrigger({ disableHysteresis: true, threshold: 300 })
  return (
    <Fade in={t}>
      <Fab color="primary" size="small" aria-label="scroll to top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} sx={{ position: 'fixed', right: 24, bottom: 24 }}>
        <KeyboardArrowUp />
      </Fab>
    </Fade>
  )
}

export default function SiteLayout({ children, transparent = false }) {
  return (
    <>
      <ScrollProgress />
      <Navbar transparent={transparent} />
      {!transparent && <Toolbar sx={{ minHeight: 68 }} />}
      <Box component="main">{children}</Box>
      <Footer />
      <ScrollTop />
    </>
  )
}
