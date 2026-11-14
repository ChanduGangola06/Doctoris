'use client'
import DemoPage, { Section } from '@/components/ui/Demo'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import ButtonGroup from '@mui/material/ButtonGroup'
import Fab from '@mui/material/Fab'
import AddIcon from '@mui/icons-material/Add'
import FavoriteIcon from '@mui/icons-material/Favorite'

const colors = ['primary','secondary','success','error','warning','info']

export default function Page() {
  return (
    <DemoPage title="Buttons">
      <Section title="Contained">{colors.map((c) => <Button key={c} variant="contained" color={c}>{c}</Button>)}</Section>
      <Section title="Outlined">{colors.map((c) => <Button key={c} variant="outlined" color={c}>{c}</Button>)}</Section>
      <Section title="Soft / Text">{colors.map((c) => <Button key={c} color={c}>{c}</Button>)}</Section>
      <Section title="Sizes"><Button size="small" variant="contained">Small</Button><Button variant="contained">Medium</Button><Button size="large" variant="contained">Large</Button></Section>
      <Section title="Icon buttons">{colors.map((c) => <IconButton key={c} color={c}><FavoriteIcon /></IconButton>)}<Fab color="primary" size="small"><AddIcon /></Fab><Fab color="primary" variant="extended"><AddIcon sx={{ mr: 1 }} />Extended</Fab></Section>
      <Section title="Group"><ButtonGroup variant="contained"><Button>Left</Button><Button>Middle</Button><Button>Right</Button></ButtonGroup><Button disabled variant="contained">Disabled</Button><Button loading variant="contained">Loading</Button></Section>
    </DemoPage>
  )
}
