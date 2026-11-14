import DashboardLayout from '@/components/layout/DashboardLayout'
import ProductDetail from '@/components/shop/ProductDetail'

export default async function Page({ params }) {
  const { id } = await params
  return <DashboardLayout><ProductDetail id={id} /></DashboardLayout>
}
