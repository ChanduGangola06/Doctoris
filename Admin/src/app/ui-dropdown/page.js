'use client'
import DemoPage, { Section } from '@/components/ui/Demo'
import { useState } from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Divider from '@mui/material/Divider'
import ListItemIcon from '@mui/material/ListItemIcon'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import SettingsIcon from '@mui/icons-material/Settings'
import LogoutIcon from '@mui/icons-material/Logout'

function Dd({ label, color }) {
  const [a, setA] = useState(null)
  return (<>
    <Button variant="contained" color={color} endIcon={<ArrowDropDownIcon />} onClick={(e) => setA(e.currentTarget)}>{label}</Button>
    <Menu anchorEl={a} open={!!a} onClose={() => setA(null)}>
      <MenuItem onClick={() => setA(null)}>Action</MenuItem>
      <MenuItem onClick={() => setA(null)}><ListItemIcon><SettingsIcon fontSize="small" /></ListItemIcon>Settings</MenuItem>
      <Divider />
      <MenuItem onClick={() => setA(null)}><ListItemIcon><LogoutIcon fontSize="small" /></ListItemIcon>Logout</MenuItem>
    </Menu>
  </>)
}

export default function Page() {
  return (
    <DemoPage title="Dropdowns">
      <Section title="Menus">{['primary', 'secondary', 'success', 'error', 'warning', 'info'].map((c) => <Dd key={c} label={c} color={c} />)}</Section>
    </DemoPage>
  )
}
