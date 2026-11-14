import InitColorSchemeScript from '@mui/material/InitColorSchemeScript'
import ThemeRegistry from '@/components/ThemeRegistry'

export const metadata = {
  title: 'Doctris - Doctor Appointment Booking Admin',
  description: 'Doctris - Next.js & MUI Doctor Appointment Booking System',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <InitColorSchemeScript attribute="data" />
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  )
}
