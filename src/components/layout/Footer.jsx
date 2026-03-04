import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

const Foot = styled.footer`
  background: ${({ theme }) => theme.colors.surface};
  padding: 60px 20px 30px;
  text-align: center;
`

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 30px;
`

const SocialIcon = styled(motion.a)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.surfaceLight};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }
`

const Copyright = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.9rem;
`

export default function Footer() {
  return (
    <Foot>
      <Content>
        <SocialLinks>
          <SocialIcon 
            href="https://github.com/LoydDavyd" 
            target="_blank"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FiGithub />
          </SocialIcon>
          <SocialIcon 
            href="https://linkedin.com/in/loyd" 
            target="_blank"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FiLinkedin />
          </SocialIcon>
          <SocialIcon 
            href="mailto:loyd@email.com"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FiMail />
          </SocialIcon>
        </SocialLinks>
        <Copyright>
          © {new Date().getFullYear()} Loyd Davyd - Todos os direitos reservados
        </Copyright>
      </Content>
    </Foot>
  )
}