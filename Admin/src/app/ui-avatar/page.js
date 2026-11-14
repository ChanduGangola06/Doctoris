'use client'
import DemoPage, { Section } from '@/components/ui/Demo'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Badge from '@mui/material/Badge'

export default function Page() {
  return (
    <DemoPage title="Avatars">
      <Section title="Images">{[1, 2, 3, 4, 5].map((i) => <Avatar key={i} src={`/images/client/0${i}.jpg`} />)}</Section>
      <Section title="Sizes">{[32, 48, 64, 96].map((s) => <Avatar key={s} src="/images/doctors/01.jpg" sx={{ width: s, height: s }} />)}</Section>
      <Section title="Letters & shapes"><Avatar sx={{ bgcolor: 'primary.main' }}>CC</Avatar><Avatar variant="rounded" sx={{ bgcolor: 'success.main' }}>DR</Avatar><Avatar variant="square" sx={{ bgcolor: 'warning.main' }}>SQ</Avatar></Section>
      <Section title="Group & status"><AvatarGroup max={4}>{[1, 2, 3, 4, 5, 6].map((i) => <Avatar key={i} src={`/images/client/0${i}.jpg`} />)}</AvatarGroup><Badge overlap="circular" color="success" variant="dot" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}><Avatar src="/images/client/07.jpg" /></Badge></Section>
    </DemoPage>
  )
}
