import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const Card = styled(motion.div)`
  background: ${({ theme }) => theme.colors.surfaceLight};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }
`

const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  background: ${({ theme }) => theme.colors.gradient};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%);
    transform: translateX(-100%);
    transition: transform 0.6s ease;
  }

  ${Card}:hover &::before {
    transform: translateX(100%);
  }
`

const ProjectIcon = styled.div`
  font-size: 4rem;
  color: white;
  z-index: 1;
`

const Content = styled.div`
  padding: 20px;
`

const Title = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.text};
`

const Description = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 15px;
  font-size: 0.9rem;
`

const Tech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 15px;
`

const TechTag = styled.span`
  background: ${({ theme }) => theme.colors.primary}20;
  color: ${({ theme }) => theme.colors.primary};
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
`

const Links = styled.div`
  display: flex;
  gap: 15px;
`

const Link = styled(motion.a)`
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 0.9rem;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export default function ProjectCard({ project, index }) {
  return (
    <Card
      variants={cardVariants}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover="hover"
    >
      <ImageContainer>
        <ProjectIcon>📁</ProjectIcon>
      </ImageContainer>
      <Content>
        <Title>{project.title}</Title>
        <Description>{project.description}</Description>
        <Tech>
          {project.tech.split(', ').map((tech, i) => (
            <TechTag key={i}>{tech}</TechTag>
          ))}
        </Tech>
        <Links>
          <Link 
            href={project.github} 
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FiGithub /> Código
          </Link>
          {project.live && (
            <Link 
              href={project.live} 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiExternalLink /> Demo
            </Link>
          )}
        </Links>
      </Content>
    </Card>
  )
}