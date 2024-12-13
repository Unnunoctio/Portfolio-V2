import { Box } from '@chakra-ui/react'
import { AboutMePage, ContactPage, HomePage, ProjectsPage, ResumePage, SkillsPage } from './pages'

export const FullPage = () => {
  return (
    <Box>
      <HomePage />
      <AboutMePage />
      <ResumePage />
      <SkillsPage />
      <ProjectsPage />
      <ContactPage />
    </Box>
  )
}
