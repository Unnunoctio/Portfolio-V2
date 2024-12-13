import { Box, Button, Flex, Heading, Stack, Text, useBreakpointValue, useColorModeValue, VStack } from "@chakra-ui/react"
import { TypeAndDeleteText } from "../components/text"

// const backgroundImageUrl = "src/assets/azir.jpg"
const backgroundImageUrl = "src/assets/fondoHome.png"
// const backgroundImageUrl = "src/assets/artes.jpg"

export const HomePage = () => {
  return (
    <Flex
      id="home"
      w={'full'}
      // h={useBreakpointValue({ base: 'calc(100vh - 80px)', md: '100vh' })}
      h={'100vh'}
      backgroundImage={`url(${backgroundImageUrl})`}
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
      overflow={'hidden'}
    >
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={useColorModeValue('linear(to-r, blackAlpha.600, blackAlpha.700)','linear(to-r, blackAlpha.800, blackAlpha.700)')}
      >
        <Stack maxW={'2xl'} align={'center'} spacing={6}>
          <Heading as={'h1'}
            color={'white'}
            textAlign={'center'} 
            size={useBreakpointValue({ base: '3xl', md: '4xl'})} 
            fontFamily={'monospace'}
          >
            Rafael Carvacho
          </Heading>

          <Stack direction={'row'}>
            <Text
              color={'white'}
              fontSize={useBreakpointValue({ base: '2xl', sm: '3xl'})}
            >
              I'm a
            </Text>
            <TypeAndDeleteText text={['Software Developer.', 'Web Developer.']}
              color={'cyan.400'}
              fontSize={useBreakpointValue({ base: '2xl', sm: '3xl' })}
            />
          </Stack>

          <Button
            variant={'outline'}
            size={{ base: 'md', sm: 'lg' }}
            color={'cyan.400'}
            borderColor={'cyan.400'}
            borderRadius={'full'}
            _hover={{
              bg: '#0BC5EA40',
              color: 'white'
            }}
            _active={{
              bg: '#0BC5EA90',
              color: 'white'
            }}
          >
            Download CV
          </Button>
        </Stack>
      </VStack>
    </Flex>
  )
}
