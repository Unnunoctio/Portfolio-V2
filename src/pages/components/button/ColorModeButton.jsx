import { Icon, IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react"
import { FiMoon, FiSun } from "react-icons/fi"

export const ColorModeButton = ({ ...rest }) => {
  const { colorMode, toggleColorMode } = useColorMode()
  
  return (
    <IconButton onClick={toggleColorMode}
      bg={useColorModeValue('gray.100', 'gray.800')}
      _hover={{ 
        color: 'cyan.400',
      }}
      icon={ <Icon boxSize={6} as={ colorMode === 'light' ? FiMoon : FiSun } /> }
      {...rest}
    />
  )
}
