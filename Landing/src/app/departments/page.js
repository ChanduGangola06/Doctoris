'use client'
import SiteLayout from '@/components/site/SiteLayout'
import { PageBanner } from '@/components/ui'
import { Services, Cta } from '@/components/home/sections'

export default function Page() {
  return (
    <SiteLayout>
      <PageBanner title="Departments" crumbs={[{ label: 'Departments' }]} bg="/images/bg/department.jpg" />
      <Services count={12} />
      <Cta />
    </SiteLayout>
  )
}
