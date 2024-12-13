import { Box, useColorModeValue } from '@chakra-ui/react'
import { ColorModeButton } from '../components/button/ColorModeButton'
import { Sidebar } from '../components/sidebar/Sidebar'

export const LayoutApp = ({ children }) => {
  return (
    <Box minH={'100vh'} bg={useColorModeValue('gray.100', 'gray.800')} position={'relative'}>
      {/* Sidebar */}
      <Sidebar />

      {/* ColorMode Desktop */}
      <Box
        display={{ base: 'none', md: 'block' }}
        zIndex={1}
        position={'fixed'}
        pt={4} pb={4} pl={2} pr={2}
        borderTopLeftRadius={10}
        borderBottomLeftRadius={10}
        right={0} top={'40vh'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'md'}
        transition={'width 0.3s ease-in-out'}
        width={7}
        overflow={'hidden'}
        _hover={{
          width: 14,
        }}
      >
        <ColorModeButton
          bg={useColorModeValue('white', 'gray.900')}
          sx={{ '&:active': { bg: 'none' } }}
        />
      </Box>

      {/* MobileNav space */}
      {/* <Box display={{ base: 'block', md: 'none' }} h={'80px'}></Box> */}
      
      {/* Page */}
      <Box ml={{ base: 0, md: 270 }}>
        {children}
      </Box>
    </Box>
  )
}