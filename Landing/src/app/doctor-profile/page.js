'use client'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Rating from '@mui/material/Rating'
import Button from '@mui/material/Button'
import Link from 'next/link'
import DashShell from '@/components/dash/DashShell'
import { Panel } from '@/components/ui'
import { experienceData } from '@/data/data'

export default function Page() {
  return (
    <DashShell title="Doctor Profile">
      <Stack spacing={3}>
        <Card sx={{ overflow: 'hidden' }}>
          <Box sx={{ height: 160, backgroundImage: 'url(/images/doctors/profile-bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} sx={{ alignItems: { sm: 'flex-end' }, px: 3, pb: 3, mt: -6 }}>
            <Avatar src="/images/doctors/01.jpg" sx={{ width: 120, height: 120, border: 4, borderColor: 'background.paper' }} />
            <Box sx={{ flex: 1 }}>
              <Typography variant="h5">Dr. Calvin Carlo</Typography>
              <Typography sx={{ color: "text.secondary" }}>Orthopedic</Typography>
              <Rating value={4.5} precision={0.5} readOnly size="small" />
            </Box>
            <Button component={Link} href="/doctor-profile-setting" variant="outlined">Edit Profile</Button>
          </Stack>
        </Card>
        <Panel title="About">
          <Typography sx={{ color: "text.secondary" }}>A gynecologist is a surgeon who specializes in the female reproductive system, which includes the cervix, fallopian tubes, ovaries, uterus, vagina and vulva. Many gynecologists also provide obstetrics care.</Typography>
        </Panel>
        <Panel title="Professional Experience">
          <Stack spacing={2}>
            {experienceData.map((e, i) => (
              <Box key={i} sx={{ borderLeft: 3, borderColor: 'primary.main', pl: 2 }}>
                <Typography variant="caption" sx={{ color: "text.secondary" }}>{e.time}</Typography>
                <Typography sx={{ fontWeight: 600 }}>{e.title}</Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>{e.name}</Typography>
              </Box>
            ))}
          </Stack>
        </Panel>
      </Stack>
    </DashShell>
  )
}
