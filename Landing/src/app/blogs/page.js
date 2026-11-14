'use client'
import Grid from '@mui/material/Grid'
import SiteLayout from '@/components/site/SiteLayout'
import { PageBanner, Section } from '@/components/ui'
import { BlogCard } from '@/components/home/sections'
import { blogData } from '@/data/data'

export default function Page() {
  return (
    <SiteLayout>
      <PageBanner title="Blogs & News" crumbs={[{ label: 'Blogs' }]} />
      <Section>
        <Grid container spacing={3}>
          {blogData.map((b) => <Grid key={b.id} size={{ xs: 12, sm: 6, md: 4 }}><BlogCard b={b} /></Grid>)}
        </Grid>
      </Section>
    </SiteLayout>
  )
}
