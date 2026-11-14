import DashboardLayout from '@/components/layout/DashboardLayout'
import DoctorProfile from '@/components/profile/DoctorProfile'

export default function Page() {
  return <DashboardLayout><DoctorProfile id={1} /></DashboardLayout>
}
