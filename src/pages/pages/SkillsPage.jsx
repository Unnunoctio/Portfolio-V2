import { Box, Flex, Grid, SimpleGrid, Tab, TabList, Tabs, Text, useBreakpointValue, useColorModeValue } from "@chakra-ui/react"
import { FaCss3, FaHtml5, FaNodeJs, FaReact } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import { SiFlask, SiMongodb } from 'react-icons/si'
import { GrMysql } from 'react-icons/gr'
import { SkillItem } from "../components/item/SkillItem"
import { LayoutPage } from "../layout/LayoutPage"
import { useEffect, useRef, useState } from "react"

const allItems = [
  { name: 'NodeJS',     icon: FaNodeJs,         value: 90, color: 'green.400',  filter: 'backend'  },
  { name: 'Flask',      icon: SiFlask,          value: 25, color: null,         filter: 'backend'  },
  { name: 'HTML5',      icon: FaHtml5,          value: 60, color: 'orange.500', filter: 'frontend' },
  { name: 'CSS',        icon: FaCss3,           value: 50, color: 'blue.500',   filter: 'frontend' },
  { name: 'JavaScript', icon: IoLogoJavascript, value: 85, color: 'yellow.400', filter: 'frontend' },
  { name: 'React',      icon: FaReact,          value: 80, color: 'cyan.400',   filter: 'frontend' },
  { name: 'MySQL',      icon: GrMysql,          value: 45, color: 'blue.500',   filter: 'database' },
  { name: 'MongoDB',    icon: SiMongodb,        value: 55, color: 'green.300',  filter: 'database' },
]

export const SkillsPage = () => {
  const [skillFilter, setSkillFilter] = useState('all')
  const [widthBox, setWidthBox] = useState(null)

  const boxRef = useRef(null)

  useEffect(() => {
    function updateWidth() {
      if (boxRef.current) {
        const { width } = boxRef.current.getBoundingClientRect()
  
        setWidthBox(width)
      }
    }

    updateWidth()
    window.addEventListener('resize', updateWidth)
    return () => {
      window.removeEventListener('resize', updateWidth)
    }
  }, [])

  const handleSkillFilter = (index) => {
    switch(index) {
      case 0:
        setSkillFilter('all')
        break
      case 1:
        setSkillFilter('frontend')
        break
      case 2:
        setSkillFilter('backend')
        break
      case 3:
        setSkillFilter('database')
        break
      default:
        setSkillFilter('all') 
    }
  }

  return (
    <LayoutPage id={'skills'} title={'Skillset'}>

      <Flex flex={1} flexDir={'column'} alignItems={'center'} justifyContent={'space-evenly'}>
        <Tabs variant={'soft-rounded'} isFitted onChange={(index) => handleSkillFilter(index)}>
          <TabList gap={2} flexWrap={'wrap'}>
            <Tab _selected={{ color: 'cyan.400', border: '1px' }} color={useColorModeValue('gray.800', 'whiteAlpha.900')} border={'1px'} borderColor={useColorModeValue('gray.100', 'gray.800')} fontSize={{ base: 16, md: 18 }}>All</Tab>
            <Tab _selected={{ color: 'cyan.400', border: '1px' }} color={useColorModeValue('gray.800', 'whiteAlpha.900')} border={'1px'} borderColor={useColorModeValue('gray.100', 'gray.800')} fontSize={{ base: 16, md: 18 }}>Frontend</Tab>
            <Tab _selected={{ color: 'cyan.400', border: '1px' }} color={useColorModeValue('gray.800', 'whiteAlpha.900')} border={'1px'} borderColor={useColorModeValue('gray.100', 'gray.800')} fontSize={{ base: 16, md: 18 }}>Backend</Tab>
            <Tab _selected={{ color: 'cyan.400', border: '1px' }} color={useColorModeValue('gray.800', 'whiteAlpha.900')} border={'1px'} borderColor={useColorModeValue('gray.100', 'gray.800')} fontSize={{ base: 16, md: 18 }}>DataBases</Tab>
          </TabList>
        </Tabs>

        <Box ref={boxRef} w={'full'} minH={'70%'}>
          <br />
          <Flex flexWrap={'wrap'} rowGap={{ base: 2, sm: 6 }}>
            {
              allItems.map((item, index) => (
                <SkillItem
                  key={index}
                  item={item}
                  width={useBreakpointValue({ 
                    base: `${(widthBox/2 > 120) ? widthBox/2 : 120 }px`, 
                    sm: `${(widthBox/4 > 140) ? widthBox/4 : widthBox/3 }px`, 
                    xl: `${(widthBox/5 > 140) ? widthBox/5 : widthBox/4 }px` 
                  })}
                  displaying={(item.filter === skillFilter || skillFilter === 'all') ? 'block' : 'none'}
                />
              ))
            }
          </Flex>
        </Box>
      </Flex>

    </LayoutPage>
  )
}
