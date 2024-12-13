import { Box, Card, CardBody, CardFooter, Flex, Heading, HStack, Icon, IconButton, Image, Link, Stack, Tag, TagLabel, TagLeftIcon, Text, Tooltip, useColorModeValue } from '@chakra-ui/react'
import { motion } from "framer-motion"
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { useState } from 'react'

export const ProjectCard = ({ cardItem }) => {
  const [hovered, setHovered] = useState(false)

  const handleHover = () => {
    setHovered(!hovered);
  };

  const frontAnimation = {
    visible: { transform: 'rotateY(180deg)' },
    hidden: { transform: 'rotateY(0deg)' }
  }
  const backAnimation = {
    visible: { transform: 'rotateY(-180deg)' },
    hidden: { transform: 'rotateY(0deg)' }
  }

  return (
    <Box maxW={'20rem'} w={'full'} h={{ base: '18rem', sm: '18rem' }}
      position={'relative'}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    // boxShadow={'xl'}
    >
      {/* Front */}
      <motion.div
        variants={frontAnimation}
        animate={!hovered ? 'hidden' : 'visible'}
        transition={{ duration: 0.5 }}
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          backfaceVisibility: 'hidden'
        }}
      >
        <Card w={'full'} h={'full'} bgColor={useColorModeValue('white', 'gray.900')} variant={'outline'}>

          <CardBody h={'25%'} p={0}>
            <Image
              h={'100%'}
              w={'100%'}
              src={cardItem.front.image}
              objectFit={'cover'}
              borderTopRadius={'md'}
            />
          </CardBody>
          <CardFooter p={{ base: 3, sm: 5 }} flexDir={'column'}>
            <Stack spacing={3}>
              <HStack spacing={{ base: 4, sm: 2 }}>
                {
                  cardItem.front.tags.map((tag, index) => (
                    <Tag key={index} py={{ base: 1, sm: 0 }} borderRadius={'full'} bg={'transparent'} color={tag.color} border={'1px'} >
                      <TagLeftIcon boxSize={{ base: 5, sm: 4 }} as={tag.icon} mr={{ base: 0, sm: 1 }} />
                      <TagLabel display={{ base: 'none', sm: 'block' }}>{tag.title}</TagLabel>
                    </Tag>
                  ))
                }
              </HStack>
              <Heading size={'md'} >{cardItem.front.title}</Heading>
            </Stack>
          </CardFooter>
        </Card>
      </motion.div>

      {/* Back */}
      <motion.div
        variants={backAnimation}
        animate={hovered ? 'hidden' : 'visible'}
        transition={{ duration: 0.5 }}
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          backfaceVisibility: 'hidden'
        }}
      >
        <Card w={'full'} h={'full'} bgColor={useColorModeValue('white', 'gray.900')} variant={'outline'}>
          <CardBody h={'25%'} p={{ base: 3, sm: 5 }}>
            <Stack spacing={3}>
              <Heading size={'md'} >{cardItem.back.title}</Heading>
              <Text>{cardItem.back.description}</Text>
            </Stack>
          </CardBody>
          <CardFooter p={{ base: 3, sm: 5 }} justifyContent={'space-around'}>
            <Link href={cardItem.back.urlPage} isExternal display={(!!cardItem.back.urlPage) ? '' : 'none'}>
              <Tooltip label={'Go Page'}>
                <IconButton
                  bg={'transparent'}
                  _hover={{ color: 'cyan.400' }}
                  icon={<Icon boxSize={6} as={FiExternalLink} />}
                />
              </Tooltip>
            </Link>
            <Link href={cardItem.back.urlGithub} isExternal display={(!!cardItem.back.urlGithub) ? '' : 'none'}>
              <Tooltip label={'Repository'}>
                <IconButton
                  bg={'transparent'}
                  _hover={{ color: 'cyan.400' }}
                  icon={<Icon boxSize={6} as={FiGithub} />}
                />
              </Tooltip>
            </Link>
          </CardFooter>
        </Card>
      </motion.div>
    </Box>
  )
}
