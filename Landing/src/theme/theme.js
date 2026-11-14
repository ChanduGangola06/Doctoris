'use client'
import { createTheme } from '@mui/material/styles'
import { Inter } from 'next/font/google'

export const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const theme = createTheme({
  cssVariables: { colorSchemeSelector: 'data' },
  colorSchemes: {
    light: {
      palette: {
        primary: { main: '#2f55d4', light: '#5a7be0', dark: '#2243b3', contrastText: '#fff' },
        secondary: { main: '#8492a6' },
        success: { main: '#2eca8b' },
        warning: { main: '#f17425' },
        error: { main: '#e43f52' },
        info: { main: '#17a2b8' },
        background: { default: '#f8f9fc', paper: '#ffffff' },
        text: { primary: '#3c4858', secondary: '#8492a6' },
        divider: '#e9ecf3',
      },
    },
    dark: {
      palette: {
        primary: { main: '#5a7be0' },
        success: { main: '#2eca8b' },
        background: { default: '#14161c', paper: '#1c1f27' },
      },
    },
  },
  shape: { borderRadius: 8 },
  typography: {
    fontFamily: `${inter.style.fontFamily}, system-ui, -apple-system, sans-serif`,
    h1: { fontWeight: 700 }, h2: { fontWeight: 700 }, h3: { fontWeight: 700 },
    h4: { fontWeight: 600 }, h5: { fontWeight: 600 }, h6: { fontWeight: 600 },
    button: { textTransform: 'none', fontWeight: 600 },
  },
  components: {
    MuiButton: { defaultProps: { disableElevation: true } },
    MuiCard: {
      defaultProps: { elevation: 0 },
      styleOverrides: { root: { boxShadow: '0 0 3px rgba(60,72,88,.15)', border: 0 } },
    },
    MuiTableCell: {
      styleOverrides: { head: { fontWeight: 600, whiteSpace: 'nowrap' } },
    },
    MuiTextField: { defaultProps: { size: 'small', fullWidth: true } },
    MuiChip: { styleOverrides: { root: { fontWeight: 600 } } },
  },
})

export default theme
