'use client'
import Link from 'next/link'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import SiteLayout from '@/components/site/SiteLayout'
import { PageBanner, Section } from '@/components/ui'
import { blogData, commentData, recentPost } from '@/data/data'

export default function BlogDetail({ id }) {
  const b = blogData.find((x) => String(x.id) === String(id)) || blogData[0]
  return (
    <SiteLayout>
      <PageBanner title={b.title} crumbs={[{ label: 'Blogs', href: '/blogs' }, { label: 'Details' }]} subtitle={`${b.date} · ${b.time}`} />
      <Section>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, lg: 8 }}>
            <Card sx={{ overflow: 'hidden' }}>
              <Box component="img" src="/images/blog/single.jpg" alt="" sx={{ width: '100%', maxHeight: 440, objectFit: 'cover' }} />
              <Box sx={{ p: { xs: 2.5, md: 4 } }}>
                <Typography sx={{ color: "text.secondary", mb: 2 }}>Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters doesn&apos;t match the expected frequency, the text is not very readable.</Typography>
                <Typography sx={{ color: "text.secondary", mb: 2 }}>The most well-known dummy text is the &apos;Lorem Ipsum&apos;, which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to proper Latin.</Typography>
                <Divider sx={{ my: 3 }} />
                <Typography variant="h6" gutterBottom>Comments</Typography>
                <Stack spacing={3}>
                  {commentData.map((c, i) => (
                    <Stack key={i} direction="row" spacing={2}>
                      <Avatar src={c.image} />
                      <Box><Typography variant="subtitle2">{c.name}</Typography><Typography variant="caption" sx={{ color: "text.secondary" }}>{c.date}</Typography><Typography variant="body2" sx={{ color: "text.secondary" }}>{c.desc}</Typography></Box>
                    </Stack>
                  ))}
                </Stack>
                <Divider sx={{ my: 3 }} />
                <Typography variant="h6" gutterBottom>Leave A Comment</Typography>
                <Stack spacing={2} component="form" onSubmit={(e) => e.preventDefault()}>
                  <TextField label="Your Comment" multiline minRows={4} />
                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}><TextField label="Name" /><TextField label="Email" type="email" /></Stack>
                  <Box><Button type="submit" variant="contained">Send Message</Button></Box>
                </Stack>
              </Box>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, lg: 4 }}>
            <Card sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>Recent Post</Typography>
              <Stack spacing={2}>
                {recentPost.map((r, i) => (
                  <Stack key={i} direction="row" spacing={2} sx={{ alignItems: "center" }}>
                    <Avatar variant="rounded" src={r.image} sx={{ width: 64, height: 64 }} />
                    <Box><Typography component={Link} href="/blog-detail" variant="subtitle2" sx={{ color: 'text.primary', textDecoration: 'none' }}>{r.title}</Typography><Typography variant="caption" sx={{ display: "block", color: "text.secondary" }}>{r.date}</Typography></Box>
                  </Stack>
                ))}
              </Stack>
            </Card>
          </Grid>
        </Grid>
      </Section>
    </SiteLayout>
  )
}
