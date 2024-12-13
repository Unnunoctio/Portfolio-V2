import { Box, Flex, Icon, Text, useColorModeValue, useTheme } from '@chakra-ui/react'

export const Timeline = ({ items, ...rest }) => {
  const theme = useTheme()
  
  return (
    <Flex flexDir={'column'} {...rest}>
      {
        items.map((item, index) => (
          <Box key={index} display={'flex'} flexDirection={'row'}>
            {/* Icon and line */}
            <Box display={'flex'} flexDir={'column'}>
              <Flex
                w={12} h={12}
                border={'1px'} borderRadius={'full'}
                borderColor={useColorModeValue('gray.400', 'gray.600')}
                // borderColor={'cyan.400'}
                justifyContent={'center'} alignItems={'center'}
              >
                <Icon boxSize={6} as={item.icon} />
              </Flex>

              <Flex
                flex={1}
                justifyContent={'center'}
              >
                <Box
                  h={'100%'} w={'1px'}
                  background={
                    (index !== items.length - 1) 
                      ? useColorModeValue('gray.400', 'gray.600')
                      : `linear-gradient(to bottom, ${useColorModeValue(theme.colors.gray[400], theme.colors.gray[600])} 0%, rgba(0, 0 , 0, 0) 90%)`
                  }
                />
              </Flex>
            </Box>

            {/* Rest of information */}
            <Box flex={'1'} ml={4}>
              <Flex flexDir={'column'}>
                <Flex h={12} alignItems={'center'}>
                  <Text
                    display={'inline-block'} py={2} px={4}
                    border={'1px'} borderRadius={'full'}
                    borderColor={useColorModeValue('gray.400', 'gray.600')}
                    fontFamily={'monospace'}
                    fontSize={'md'}
                    textTransform={'uppercase'}
                    fontWeight={'semibold'}
                  >
                    {item.date}
                  </Text>
                </Flex>
                <Text fontWeight={'semibold'} fontSize={'xl'} >{item.title}</Text>
                <Text fontWeight={'semibold'} color={'cyan.400'} >{item.subtitle}</Text>
                <Text mt={3}>{item.description}</Text>
                <br />
              </Flex>
            </Box>
          </Box>
        ))
      }
    </Flex>
  )
}
