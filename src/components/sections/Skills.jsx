import styled from 'styled-components'
import { motion } from 'framer-motion'
import { skills } from '../../data/skills'
import SectionTitle from '../ui/SectionTitle'

const Section = styled.section`
  padding: 100px 20px;
  background: ${({ theme }) => theme.colors.surface};
`

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  margin-top: 50px;
`

const Category = styled(motion.div)`
  background: ${({ theme }) => theme.colors.surfaceLight};
  padding: 30px;
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.shadows.medium};
`

const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.primary};
`

const SkillsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`

const SkillItem = styled.div`
  width: 100%;
`

const SkillInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  color: ${({ theme }) => theme.colors.textSecondary};
`

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 4px;
  overflow: hidden;
`

const Progress = styled(motion.div)`
  height: 100%;
  background: ${({ theme }) => theme.colors.gradient};
  border-radius: 4px;
`

const SoftSkillsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`

const SoftSkill = styled.li`
  background: ${({ theme }) => theme.colors.primary}20;
  color: ${({ theme }) => theme.colors.primary};
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
`

export default function Skills() {
  return (
    <Section id="skills">
      <SectionTitle>Habilidades</SectionTitle>
      <Container>
        <SkillsGrid>
          <Category
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <CategoryTitle>Front-End</CategoryTitle>
            <SkillsList>
              {skills.frontend.map((skill) => (
                <SkillItem key={skill.name}>
                  <SkillInfo>
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </SkillInfo>
                  <ProgressBar>
                    <Progress
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.3 }}
                      viewport={{ once: true }}
                    />
                  </ProgressBar>
                </SkillItem>
              ))}
            </SkillsList>
          </Category>

          <Category
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <CategoryTitle>Ferramentas</CategoryTitle>
            <SkillsList>
              {skills.tools.map((skill) => (
                <SkillItem key={skill.name}>
                  <SkillInfo>
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </SkillInfo>
                  <ProgressBar>
                    <Progress
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.3 }}
                      viewport={{ once: true }}
                    />
                  </ProgressBar>
                </SkillItem>
              ))}
            </SkillsList>
          </Category>
        </SkillsGrid>

        <Category
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ marginTop: '40px' }}
        >
          <CategoryTitle>Soft Skills</CategoryTitle>
          <SoftSkillsList>
            {skills.soft.map((skill) => (
              <SoftSkill key={skill}>{skill}</SoftSkill>
            ))}
          </SoftSkillsList>
        </Category>
      </Container>
    </Section>
  )
}