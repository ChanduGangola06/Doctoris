'use client'
import SiteLayout from '@/components/site/SiteLayout'
import { PageBanner } from '@/components/ui'
import { About, Counters, MissionVision, Doctors, Testimonials, Cta, Partners } from '@/components/home/sections'

export default function Page() {
  return (
    <SiteLayout>
      <PageBanner title="About Us" crumbs={[{ label: 'About Us' }]} bg="/images/bg/about.jpg" />
      <About />
      <MissionVision />
      <Counters />
      <Doctors bg="action.hover" />
      <Testimonials />
      <Cta />
      <Partners />
    </SiteLayout>
  )
}
