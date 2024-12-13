import { Box, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react"
import { LayoutPage } from "../layout/LayoutPage"

const aboutImageUrl = "src/assets/azir.jpg"

export const AboutMePage = () => {
  return (
    <LayoutPage id={'about-me'} title={'About Me'}>

      <Stack flex={1} direction={{ base: 'column', xl: 'row' }} spacing={{ base: 3, xl: 6 }} alignItems={'center'}>
        <Flex justifyContent={'center'}>
          <Image 
            src={aboutImageUrl}
            alt={'About Image'}
            // boxSize={{ base: 'xs', sm: 'sm', md: 'md' }}
            w={{ base: 'sm', md: 'md' }}
            h={{ base: 'sm', xl: 'md' }}
            objectFit={'cover'}
            borderRadius={5}
          />
        </Flex>

        <Box width={{ base: '100%', xl: '80%' }}>
          <Text as={'h3'} fontSize={{ base: '2xl', sm: '3xl'}} fontWeight={'semibold'}>I'm Rafael Carvacho</Text>
          <Text as={'h3'} fontSize={{ base: 'xl', sm: '2xl'}} color={'cyan.400'}>Web Developer & Software Developer</Text>
          
          <Box width={{ base: '100%', '2xl': '80%'}}>
            <br />
            <Text fontSize={{ base: '', sm: 'xl'}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation laboris nisi
              ut aliquip ex ea commodo consequat.
            </Text>
            <br />
            <Text fontSize={{ base: '', sm: 'xl' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation laboris nisi
              ut aliquip ex ea commodo consequat.
            </Text>
          </Box>
        </Box>
      </Stack>
    </LayoutPage>
  )
}
