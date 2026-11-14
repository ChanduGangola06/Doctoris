'use client'
import SiteLayout from '@/components/site/SiteLayout'
import { HeroSplit, FeatureCards, Services, About, Timetable, Doctors, Counters, Testimonials, Cta, Blogs } from '@/components/home/sections'

export default function Page() {
  return (
    <SiteLayout>
      <HeroSplit />
      <FeatureCards />
      <Services count={6} />
      <About />
      <Counters />
      <Doctors bg="action.hover" count={4} />
      <Timetable />
      <Testimonials />
      <Cta />
      <Blogs />
    </SiteLayout>
  )
}
