import { Box, CircularProgress, CircularProgressLabel, Icon, Text, Tooltip, useColorModeValue } from '@chakra-ui/react'
import { motion } from "framer-motion"
import { useEffect, useState } from 'react'

export const SkillItem = ({ item, width, displaying, ...rest }) => {
  const [isDisplay, setIsDisplay] = useState('')
  const [progress, setProgress] = useState(0)
  
  const variant = {
    visible: { opacity: 1, width: width},
    hidden: { opacity: 0, width: 0 }
  }

  useEffect(() => {
    if(displaying === 'none') {
      setTimeout(() => {
        setIsDisplay('none')
      }, 400)
    }else{
      setIsDisplay('block')
    }
  }, [displaying])

  useEffect(() => {
    if(displaying === 'block') {
      setProgress(0)
      
      const timer = setInterval(() => {
        setProgress(progress => {
          if (progress >= item.value) {
            clearInterval(timer)
            return item.value
          }
          return progress + 1
        })
      }, 2)
    
      return () => clearInterval(timer)
    }
  }, [displaying])
  
  return (
    <motion.div
      variants={variant}
      animate={displaying === 'block' ? 'visible' : 'hidden'}
      transition={{ duration:  0.5 }}
      style={{
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <Box
        h={{ base: '100px', sm: '120px' }} w={{ base: '100px', sm: '120px' }}
        display={isDisplay}
        {...rest}
      >
        <Tooltip label={item.name}>
          <motion.div
            animate={{ value: progress }}
            transition={{ duration: 0.4 }}
          >
            <CircularProgress
              size={'full'}
              value={progress}
              color={!!item.color ? item.color : useColorModeValue('gray.700', 'gray.200')}
              trackColor={useColorModeValue('gray.200', 'gray.700')}
              thickness={'2px'}
            >
              <CircularProgressLabel>
                <Icon boxSize={'35%'} as={item.icon} color={item.color} />
                <Text fontSize={'md'} fontWeight={'semibold'} userSelect={'none'} >{item.value}%</Text>
              </CircularProgressLabel>
            </CircularProgress>
          </motion.div>
        </Tooltip>
      </Box>
    </motion.div>
  )
}
