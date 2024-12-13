import { Flex, Heading } from '@chakra-ui/react'
import React from 'react'

export const LayoutPage = ({ id, title, children, ...rest}) => {
  return (
    <Flex id={id} w={'full'} justifyContent={'center'}>
      <Flex
        maxW={{ base: '100%', md: '90%', xl: '80%' }} w={'full'}
        // pt={{ base: 4, md: 5, xl: 7 }}
        px={{ base: 4, md: 0 }}
        minH={'75vh'}
        flexDir={'column'}
        {...rest}
      >
        <br />
        <Heading as={'h2'} size={{ base: '2xl', sm: '3xl' }} fontFamily={'monospace'}>
          {title}
        </Heading>

        <br />
        {children}
      </Flex>
    </Flex>
  )
}
