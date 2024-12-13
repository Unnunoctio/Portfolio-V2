import { ChakraProvider, ColorModeScript, CSSReset } from "@chakra-ui/react"
import { Global } from "@emotion/react"
import { theme } from "./theme"

export const AppTheme = ({ children }) => {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Global 
        styles={{
          body: {
            overflowY: 'scroll',
            '&::-webkit-scrollbar': { width: '0px' },
            '&::-webkit-scrollbar-thumb': { backgroundColor: '#0bc5ea', borderRadius: '999px' }
          }
        }}
      />
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      { children }
    </ChakraProvider>
  )
}
