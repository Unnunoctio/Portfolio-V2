import { Flex } from '@chakra-ui/react'
import { IoSchoolOutline } from 'react-icons/io5'
import { MdWorkOutline } from 'react-icons/md'
import { Timeline } from '../components/timeline/Timeline'
import { LayoutPage } from '../layout/LayoutPage'

const items = [
  {
    icon: IoSchoolOutline,
    date: '2022 - Present',
    title: 'Evento 1',
    subtitle: 'Universidad Catolica de Valparaiso',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    icon: MdWorkOutline,
    date: '2015 - 2022',
    title: 'Evento 2',
    subtitle: 'Napsis Spa',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    icon: IoSchoolOutline,
    date: '2010 - 2015',
    title: 'Evento 3',
    subtitle: 'Udemy',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
]

export const ResumePage = () => {
  return (
    <LayoutPage id={'resume'} title={'Work & Education'} minH={'70vh'}>

      <Flex flex={1} alignItems={'center'}>
        <Flex w={'full'} justifyContent={'space-between'} >
          <Timeline items={items.filter(x => { return x.icon === MdWorkOutline })} display={{ base: 'none', md: 'flex' }} />
          <Timeline items={items.filter(x => { return x.icon === IoSchoolOutline })} display={{ base: 'none', md: 'flex' }} />
          <Timeline items={items} display={{ base: 'flex', md: 'none' }} />
        </Flex>
      </Flex>
    </LayoutPage>
  )
}
