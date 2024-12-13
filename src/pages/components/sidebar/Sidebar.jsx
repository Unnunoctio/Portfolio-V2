import { Box, Drawer, DrawerContent, Flex, Icon, IconButton, Link, Text, useColorModeValue, useDisclosure, useMediaQuery } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { FiAward, FiBookOpen, FiBox, FiGithub, FiHome, FiInstagram, FiLinkedin, FiMail, FiMenu, FiUser, FiX } from 'react-icons/fi'
import { ColorModeButton } from '../button/ColorModeButton'

const linkItems = [
  { name: 'Home', icon: FiHome, id: 'home' },
  { name: 'About Me', icon: FiUser,  id: 'about-me' },
  { name: 'Resume', icon: FiBookOpen,  id: 'resume' },
  { name: 'Skills', icon: FiAward, id: 'skills' },
  { name: 'Projects', icon: FiBox, id: 'projects' },
  { name: 'Contact', icon: FiMail, id: 'contact' },
]

export const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'flex' }}
      />

      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement={'left'}
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* MobileNav */}
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
    </Box>
  )
}

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      borderRight={'1px'}
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 270 }}
      pos={'fixed'}
      h={'full'}
      display={'flex'}
      flexDirection={'column'}
      {...rest}
    >
      {/* Main Sidebar */}
      <Box flex={'1'}>
        <Flex h={32} alignItems={'center'} mx={'8'} justifyContent={{ base: 'space-between', md: 'center' }}>
          {/* <Icon boxSize={6} as={logo} /> */}
          <Text fontSize={'5xl'} fontFamily={'Finger Paint'} userSelect={'none'}>
            RC
          </Text>
          {/* CloseButton */}
          <IconButton onClick={onClose}
            display={{ base: 'flex', md: 'none' }}
            bg={useColorModeValue('white', 'gray.900')}
            aria-label={'close menu'}
            _hover={{ color: 'cyan.400' }}
            icon={<Icon boxSize={6} as={FiX} />}
          />
        </Flex>
        {
          linkItems.map((link) => (
            <NavItem key={link.name} item={link} onClick={onClose}>
              <Text userSelect={'none'} fontWeight={'semibold'}>
                {link.name}
              </Text>
            </NavItem>
          ))
        }
      </Box>

      {/* Footer Sidebar */}
      <Box mb={6}>
        <Flex alignItems={'center'} justifyContent={'space-evenly'}>
          <Link href='https://www.instagram.com/_piscologo_' isExternal>
            <IconButton
              bg={useColorModeValue('white', 'gray.900')}
              _hover={{ color: 'cyan.400' }}
              icon={<Icon boxSize={6} as={FiInstagram} />}
            />
          </Link>
          <Link href='https://github.com/Unnunoctio' isExternal>
            <IconButton
              bg={useColorModeValue('white', 'gray.900')}
              _hover={{ color: 'cyan.400' }}
              icon={<Icon boxSize={6} as={FiGithub} />}
            />
          </Link>
          <Link href='https://www.linkedin.com/in/rafael-carvacho-389515265' isExternal>
            <IconButton
              bg={useColorModeValue('white', 'gray.900')}
              _hover={{ color: 'cyan.400' }}
              icon={<Icon boxSize={6} as={FiLinkedin} />}
            />
          </Link>
        </Flex>
      </Box>
    </Box>
  )
}

const NavItem = ({ item, children, ...rest }) => {
  const [isLargerThanMD] = useMediaQuery('(min-width: 768px)')
  const [onScreen, setOnScreen] = useState(false)

  const goLink = () => {
    const topOffset = isLargerThanMD ? 0 : 80
    const element = document.getElementById(item.id)
    const y = element.getBoundingClientRect().top + window.pageYOffset - topOffset

    window.scrollTo({ top: y, behavior: 'smooth' })
  }

  useEffect(() => {
    function handleScroll() {
      const element = document.getElementById(item.id)
      const elementRect = element.getBoundingClientRect()
      const isMiddleTop = (elementRect.top <= window.innerHeight / 2) && (elementRect.top > -(elementRect.height-(window.innerHeight / 2)))

      setOnScreen(isMiddleTop)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  
  return (
    <Link onClick={goLink}
      color={(onScreen) ? 'cyan.400' : ''}
      // color={(pathname.replace('/', '') === item.url.replace('/', '')) ? 'cyan.400' : '' }
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}
      _hover={{ color: 'cyan.400' }}
    >
      <Flex
        align={'center'}
        p={'4'}
        mx={'4'}
        borderRadius={'lg'}
        role={'group'}
        cursor={'pointer'}
        {...rest}
      >
        {
          item.icon && (<Icon mr={'4'} boxSize={6} fontSize={'16'} as={item.icon} />)
        }
        {children}
      </Flex>
    </Link>
  )
}

const MobileNav = ({ onOpen, ...rest }) => {
  const [isTransparent, setIsTransparent] = useState(false)

  useEffect(() => {
    function handleScroll() {
      const element = document.getElementById('home')
      const elementRect = element.getBoundingClientRect()
      const isFullTop = elementRect.top === 0
  
      setIsTransparent(isFullTop)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height={20}
      width={'full'}
      zIndex={2}
      alignItems={'center'}
      pos={'fixed'}
      bg={ (isTransparent) ? 'transparent' : useColorModeValue('white', 'gray.900')}
      transition={'background-color 0.3s ease-in-out, border-color 0.2s ease-in-out'}
      // borderBottomWidth={(isTransparent) ? '' : '1px'}
      borderBottomWidth={'1px'}
      borderBottomColor={ (isTransparent) ? 'transparent' : useColorModeValue('gray.200', 'gray.700')}
      justifyContent={'space-between'}
      {...rest}
    >
      <IconButton onClick={onOpen}
        // bg={(isTransparent) ? 'transparent' : useColorModeValue('white', 'gray.900')}
        bg={'transparent'}
        aria-label={'open menu'}
        color={(isTransparent) ? 'white' : ''}
        _hover={{ color: 'cyan.400' }}
        icon={<Icon boxSize={6} as={FiMenu} />}
      />

      <Text fontSize={'4xl'} fontFamily={'Finger Paint'} userSelect={'none'} color={(isTransparent) ? 'white' : ''}>
        RC
      </Text>

      <ColorModeButton
        // display={{ base: 'block', md: 'none' }} 
        // variant={'outline'}
        // bg={(isTransparent) ? 'transparent' : useColorModeValue('white', 'gray.900')}
        bg={'transparent'}
        color={(isTransparent) ? 'white' : ''}
      />
    </Flex>
  )
}