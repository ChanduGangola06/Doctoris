'use client'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Rating from '@mui/material/Rating'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import DashShell from '@/components/dash/DashShell'
import { patientsData } from '@/data/data'

export default function Page() {
  return (
    <DashShell title="Patient Reviews">
      <Stack spacing={2}>
        {patientsData.map((p, i) => (
          <Card key={i} sx={{ p: 3 }}>
            <Stack direction="row" spacing={2}>
              <Avatar src={p.image} sx={{ width: 56, height: 56 }} />
              <Box>
                <Typography sx={{ fontWeight: 700 }}>{p.name.replace('- ', '')} <Typography component="span" variant="caption" sx={{ color: "text.secondary" }}>· {p.title}</Typography></Typography>
                <Rating value={5} readOnly size="small" />
                <Typography variant="body2" sx={{ color: "text.secondary", mt: 1 }}>{p.desc}</Typography>
              </Box>
            </Stack>
          </Card>
        ))}
      </Stack>
    </DashShell>
  )
}
