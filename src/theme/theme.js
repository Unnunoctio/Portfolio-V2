import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
  colors: {
    red: {
      50: '#fff5f5',
      500: '#e53e3e',
      800: '#822727'
    },
    brand: {
      100: '#f7fafc',
      200: '#1a202c',
    }
  },
  config: {
    initialColorMode: 'light',
    useSystemColorMode: true
  }
})