'use client'
import { useState } from 'react'
import Link from 'next/link'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'
import SiteLayout from '@/components/site/SiteLayout'
import { PageBanner, Section, IconBox } from '@/components/ui'
import { contact } from '@/data/data'

export default function Page() {
  const [ok, setOk] = useState(false)
  return (
    <SiteLayout>
      <PageBanner title="Contact Us" crumbs={[{ label: 'Contact' }]} />
      <Section>
        <Grid container spacing={3}>
          {contact.map((c, i) => (
            <Grid key={c.title} size={{ xs: 12, md: 4 }}>
              <Card sx={{ p: 3, textAlign: 'center', height: '100%' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}><IconBox icon={c.icon} /></Box>
                <Typography variant="h6">{c.title}</Typography>
                <Typography variant="body2" sx={{ color: "text.secondary", my: 1 }}>{c.desc}</Typography>
                <Typography component="a" href={c.link} color="primary" sx={{ fontWeight: 600, textDecoration: 'none' }}>{c.name}</Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Section>
      <Section sx={{ pt: 0 }}>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Card sx={{ p: 4 }}>
              <Typography variant="h5" gutterBottom>Get in touch !</Typography>
              <Grid container spacing={2} component="form" onSubmit={(e) => { e.preventDefault(); setOk(true) }}>
                <Grid size={{ xs: 12, sm: 6 }}><TextField label="Your Name" required /></Grid>
                <Grid size={{ xs: 12, sm: 6 }}><TextField label="Your Email" type="email" required /></Grid>
                <Grid size={12}><TextField label="Subject" /></Grid>
                <Grid size={12}><TextField label="Comments" multiline minRows={5} /></Grid>
                <Grid size={12}><Button type="submit" variant="contained" size="large">Send Message</Button></Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Card sx={{ height: '100%', minHeight: 360, overflow: 'hidden' }}>
              <iframe title="map" style={{ border: 0, width: '100%', height: '100%', minHeight: 360 }} loading="lazy" src="https://www.openstreetmap.org/export/embed.html?bbox=-95.6%2C29.6%2C-95.2%2C29.9&layer=mapnik" />
            </Card>
          </Grid>
        </Grid>
      </Section>
      <Snackbar open={ok} autoHideDuration={4000} onClose={() => setOk(false)}><Alert severity="success" variant="filled">Message sent. We will get back to you shortly.</Alert></Snackbar>
    </SiteLayout>
  )
}
