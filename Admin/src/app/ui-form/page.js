'use client'
import DemoPage, { Section } from '@/components/ui/Demo'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import Checkbox from '@mui/material/Checkbox'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import Switch from '@mui/material/Switch'
import Slider from '@mui/material/Slider'
import FormControlLabel from '@mui/material/FormControlLabel'
import Autocomplete from '@mui/material/Autocomplete'
import Rating from '@mui/material/Rating'

export default function Page() {
  return (
    <DemoPage title="Form Elements">
      <Section title="Text fields"><TextField label="Standard" sx={{ maxWidth: 260 }} /><TextField label="Disabled" disabled sx={{ maxWidth: 260 }} /><TextField label="Error" error helperText="Incorrect entry" sx={{ maxWidth: 260 }} /><TextField label="Password" type="password" sx={{ maxWidth: 260 }} /></Section>
      <Section title="Select"><TextField select label="Department" defaultValue="Cardiology" sx={{ maxWidth: 260 }}>{['Cardiology', 'Dental', 'Neurology'].map((d) => <MenuItem key={d} value={d}>{d}</MenuItem>)}</TextField><Autocomplete options={['Dr. Calvin', 'Dr. Cristino', 'Dr. Alia']} renderInput={(p) => <TextField {...p} label="Doctor" />} sx={{ width: 260 }} /></Section>
      <Section title="Checks &amp; radios"><FormControlLabel control={<Checkbox defaultChecked />} label="Checkbox" /><RadioGroup row defaultValue="a"><FormControlLabel value="a" control={<Radio />} label="One" /><FormControlLabel value="b" control={<Radio />} label="Two" /></RadioGroup><FormControlLabel control={<Switch defaultChecked />} label="Switch" /></Section>
      <Section title="Slider &amp; rating"><Slider defaultValue={40} sx={{ width: 240 }} /><Rating defaultValue={3} /></Section>
    </DemoPage>
  )
}
