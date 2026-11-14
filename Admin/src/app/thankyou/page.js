import StatusPage from '@/components/layout/StatusPage'

export default function Page() {
  return <StatusPage title="Thank you for your order!" text="Your appointment and order have been confirmed. A confirmation email is on its way." action={{ label: 'Back to Dashboard', href: '/' }} />
}
