'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { useColorScheme } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Drawer from '@mui/material/Drawer'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import InputBase from '@mui/material/InputBase'
import Badge from '@mui/material/Badge'
import Avatar from '@mui/material/Avatar'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import MailOutlineIcon from '@mui/icons-material/MailOutlined'
import DarkModeIcon from '@mui/icons-material/DarkModeOutlined'
import LightModeIcon from '@mui/icons-material/LightModeOutlined'
import ExpandMore from '@mui/icons-material/ExpandMore'
import ChevronRight from '@mui/icons-material/ChevronRight'
import SettingsIcon from '@mui/icons-material/SettingsOutlined'
import LogoutIcon from '@mui/icons-material/Logout'
import PersonIcon from '@mui/icons-material/PersonOutlineOutlined'
import { navItems } from './navConfig'
import { mailData } from '@/data/data'

const WIDTH = 270

function SidebarContent({ variant, onNavigate }) {
  const pathname = usePathname()
  const [open, setOpen] = useState(() => {
    const idx = navItems.findIndex((n) => n.children?.some((c) => c.href === pathname))
    return idx >= 0 ? { [idx]: true } : {}
  })
  const dark = variant === 'dark'
  const colored = variant === 'colored'
  const fg = dark || colored ? 'rgba(255,255,255,.75)' : 'text.secondary'
  const fgActive = dark || colored ? '#fff' : 'primary.main'

  return (
    <Box sx={{ height: '100%', bgcolor: dark ? '#1b2437' : colored ? 'primary.main' : 'background.paper', color: fg, overflowY: 'auto' }}>
      <Box sx={{ p: 2.5, display: 'flex', alignItems: 'center', height: 70 }}>
        <Link href="/">
          <Image src={dark || colored ? '/images/logo-light.png' : '/images/logo-dark.png'} alt="Doctris" width={120} height={22} priority style={{ height: 'auto' }} />
        </Link>
      </Box>
      <List sx={{ px: 1.5, pb: 3 }}>
        {navItems.map((item, i) => {
          const Icon = item.icon
          const active = item.href === pathname
          if (!item.children) {
            return (
              <ListItemButton key={item.title} component={Link} href={item.href} onClick={onNavigate} selected={active}
                sx={{ borderRadius: 2, color: active ? fgActive : fg, '&.Mui-selected': { bgcolor: dark || colored ? 'rgba(255,255,255,.12)' : 'action.selected' } }}>
                <ListItemIcon sx={{ minWidth: 36, color: 'inherit' }}><Icon fontSize="small" /></ListItemIcon>
                <ListItemText primary={item.title} slotProps={{ primary: { fontSize: 14, fontWeight: 500 } }} />
              </ListItemButton>
            )
          }
          const expanded = !!open[i]
          return (
            <Box key={item.title}>
              <ListItemButton onClick={() => setOpen((o) => ({ ...o, [i]: !o[i] }))} sx={{ borderRadius: 2, color: expanded ? fgActive : fg }}>
                <ListItemIcon sx={{ minWidth: 36, color: 'inherit' }}><Icon fontSize="small" /></ListItemIcon>
                <ListItemText primary={item.title} slotProps={{ primary: { fontSize: 14, fontWeight: 500 } }} />
                {expanded ? <ExpandMore fontSize="small" /> : <ChevronRight fontSize="small" />}
              </ListItemButton>
              <Collapse in={expanded} unmountOnExit>
                <List disablePadding>
                  {item.children.map((c) => {
                    const a = c.href === pathname
                    return (
                      <ListItemButton key={c.href} component={Link} href={c.href} onClick={onNavigate} selected={a}
                        sx={{ pl: 6.5, py: 0.5, borderRadius: 2, color: a ? fgActive : fg, '&.Mui-selected': { bgcolor: 'transparent' } }}>
                        <ListItemText primary={c.title} slotProps={{ primary: { fontSize: 13.5, fontWeight: a ? 600 : 400 } }} />
                      </ListItemButton>
                    )
                  })}
                </List>
              </Collapse>
            </Box>
          )
        })}
      </List>
    </Box>
  )
}

export default function DashboardLayout({ children, sidebar = 'light' }) {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'))
  const [mobileOpen, setMobileOpen] = useState(false)
  const [collapsed, setCollapsed] = useState(false)
  const [anchor, setAnchor] = useState(null)
  const [mailAnchor, setMailAnchor] = useState(null)
  const { mode, setMode, systemMode } = useColorScheme()
  const resolved = mode === 'system' ? systemMode : mode

  const sidebarWidth = isDesktop && !collapsed ? WIDTH : 0

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: 'background.default' }}>
      <Drawer
        variant={isDesktop ? 'persistent' : 'temporary'}
        open={isDesktop ? !collapsed : mobileOpen}
        onClose={() => setMobileOpen(false)}
        sx={{ width: sidebarWidth, flexShrink: 0, '& .MuiDrawer-paper': { width: WIDTH, border: 0, boxShadow: '0 0 3px rgba(60,72,88,.15)' } }}
      >
        <SidebarContent variant={sidebar} onNavigate={() => setMobileOpen(false)} />
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, minWidth: 0, display: 'flex', flexDirection: 'column' }}>
        <AppBar position="sticky" color="inherit" elevation={0} sx={{ bgcolor: 'background.paper', boxShadow: '0 0 3px rgba(60,72,88,.15)' }}>
          <Toolbar sx={{ gap: 1 }}>
            <IconButton edge="start" onClick={() => (isDesktop ? setCollapsed((c) => !c) : setMobileOpen(true))} aria-label="toggle sidebar"><MenuIcon /></IconButton>
            <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center', bgcolor: 'action.hover', borderRadius: 2, px: 1.5, ml: 1, width: 280 }}>
              <SearchIcon fontSize="small" sx={{ color: 'text.secondary' }} />
              <InputBase placeholder="Search..." sx={{ ml: 1, flex: 1, fontSize: 14 }} />
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            <IconButton onClick={() => setMode(resolved === 'dark' ? 'light' : 'dark')} aria-label="toggle theme">
              {resolved === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
            <IconButton onClick={(e) => setMailAnchor(e.currentTarget)} aria-label="mail">
              <Badge color="error" variant="dot"><MailOutlineIcon /></Badge>
            </IconButton>
            <IconButton aria-label="notifications"><Badge badgeContent={3} color="error"><NotificationsNoneIcon /></Badge></IconButton>
            <IconButton onClick={(e) => setAnchor(e.currentTarget)} aria-label="account">
              <Avatar src="/images/doctors/01.jpg" sx={{ width: 36, height: 36 }} />
            </IconButton>
          </Toolbar>
        </AppBar>

        <Menu anchorEl={mailAnchor} open={!!mailAnchor} onClose={() => setMailAnchor(null)} slotProps={{ paper: { sx: { width: 340, maxHeight: 420 } } }}>
          {mailData.slice(0, 5).map((m, i) => (
            <MenuItem key={i} onClick={() => setMailAnchor(null)} sx={{ gap: 1.5, whiteSpace: 'normal' }}>
              <Avatar src={m.image} sx={{ width: 40, height: 40 }} />
              <Box>
                <Typography variant="body2">{m.desc} <b>{m.desc2}</b></Typography>
                <Typography variant="caption" sx={{ color: "text.secondary" }}>{m.time}</Typography>
              </Box>
            </MenuItem>
          ))}
        </Menu>
        <Menu anchorEl={anchor} open={!!anchor} onClose={() => setAnchor(null)} slotProps={{ paper: { sx: { width: 220 } } }}>
          <Box sx={{ px: 2, py: 1 }}>
            <Typography sx={{ fontWeight: 600 }}>Cristina Murphy</Typography>
            <Typography variant="caption" sx={{ color: "text.secondary" }}>Administrator</Typography>
          </Box>
          <Divider />
          <MenuItem component={Link} href="/dr-profile" onClick={() => setAnchor(null)}><PersonIcon fontSize="small" sx={{ mr: 1 }} />Profile</MenuItem>
          <MenuItem onClick={() => setAnchor(null)}><SettingsIcon fontSize="small" sx={{ mr: 1 }} />Settings</MenuItem>
          <Divider />
          <MenuItem component={Link} href="/login" onClick={() => setAnchor(null)}><LogoutIcon fontSize="small" sx={{ mr: 1 }} />Logout</MenuItem>
        </Menu>

        <Box sx={{ flexGrow: 1, p: { xs: 2, md: 3 } }}>{children}</Box>

        <Box component="footer" sx={{ px: 3, py: 2, borderTop: 1, borderColor: 'divider', bgcolor: 'background.paper' }}>
          <Typography variant="body2" align="center" sx={{ color: "text.secondary" }}>
            © {new Date().getFullYear()} Doctris. Design with ♥ using Next.js &amp; MUI.
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
