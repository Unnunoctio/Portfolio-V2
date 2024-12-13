import { useEffect, useRef, useState } from "react"
import { Box, Flex, SimpleGrid } from "@chakra-ui/react"
import { LayoutPage } from "../layout/LayoutPage"
import { ProjectCard } from "../components/card/ProjectCard"

import { FaNodeJs, FaReact } from "react-icons/fa"
import { GrMysql } from "react-icons/gr"
import { SiFlask, SiMongodb } from "react-icons/si"

const imageAzirUrl = "src/assets/azir.jpg"
const imageSebaUrl = "src/assets/seba.jpg"

const allTags = {
  react: { title: 'React',   icon: FaReact, color: 'cyan.400' },
  node:  { title: 'NodeJS',  icon: FaNodeJs, color: 'green.400' },
  flask: { title: 'Flask',   icon: SiFlask, color: '' },
  mysql: { title: 'MySQL',   icon: GrMysql, color: 'blue.500'},
  mongo: { title: 'MongoDB', icon: SiMongodb, color: 'green.300' },
}

const allCards = [
  {
    front: {
      image: imageAzirUrl,
      title: 'Titulo 1',
      tags: [
        allTags.react,
        allTags.flask,
        allTags.mongo
      ]
    },
    back: {
      title: 'Titulo 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      urlPage: '#',
      urlGithub: '#'
    }
  },
  {
    front: {
      image: imageSebaUrl,
      title: 'Titulo 2',
      tags: [
        allTags.react,
        allTags.node,
        allTags.mysql
      ]
    },
    back: {
      title: 'Titulo 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      urlPage: '#',
      urlGithub: '#'
    }
  },
  {
    front: {
      image: imageAzirUrl,
      title: 'Titulo 3',
      tags: [
        allTags.react,
        allTags.node,
        allTags.mongo
      ]
    },
    back: {
      title: 'Titulo 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      urlPage: '#',
      urlGithub: null
    }
  },
  {
    front: {
      image: imageSebaUrl,
      title: 'Titulo 4',
      tags: [
        allTags.react,
        allTags.flask,
        allTags.mysql
      ]
    },
    back: {
      title: 'Titulo 4',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      urlPage: '#',
      urlGithub: '#'
    }
  }
]

export const ProjectsPage = () => {
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

  return (
    <LayoutPage id={'projects'} title={'Projects'} minH={'80vh'} >
      
      <Flex flex={1} alignItems={'center'} >
        <Box ref={boxRef} w={'full'} >
          <SimpleGrid
            minChildWidth={(widthBox/16 >= 20) ? '20rem' : `${widthBox}px`}
            spacingX={ 4 }
            spacingY={{ base: 4, sm: 6 }}
            justifyItems={'center'}
          >
            {
              allCards.map((card, index) => (
                <ProjectCard key={index} cardItem={card} />
              ))
            }
          </SimpleGrid>
        </Box>
      </Flex>
    </LayoutPage>
  )
}
