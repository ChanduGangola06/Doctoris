import DashboardLayout from '@/components/layout/DashboardLayout'
import DoctorProfile from '@/components/profile/DoctorProfile'

export default async function Page({ params }) {
  const { id } = await params
  return <DashboardLayout><DoctorProfile id={id} /></DashboardLayout>
}
