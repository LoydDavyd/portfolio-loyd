import styled from 'styled-components'
import { motion } from 'framer-motion'
import { projects } from '../../data/projects'
import ProjectCard from '../ui/ProjectCard'
import SectionTitle from '../ui/SectionTitle'

const Section = styled.section`
  padding: 100px 20px;
`

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
`

export default function Projects() {
  return (
    <Section id="projetos">
      <SectionTitle>Projetos</SectionTitle>
      <Grid
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </Grid>
    </Section>
  )
}