import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

const BackgroundGradient = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 50% 50%, 
    ${({ theme }) => theme.colors.primary}20 0%, 
    transparent 50%);
`;

const Content = styled(motion.div)`
  text-align: center;
  z-index: 1;
  padding: 0 20px;
`;

const Title = styled(motion.h1)`
  font-size: clamp(2rem, 8vw, 4rem);
  margin-bottom: 20px;
  background: ${({ theme }) => theme.colors.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Subtitle = styled(motion.p)`
  font-size: clamp(1rem, 4vw, 1.5rem);
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 40px;
  max-width: 600px;
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 20px;
  justify-content: center;
`;

const SocialIcon = styled(motion.a)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.surface};
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
`;

export default function Hero() {
  return (
    <Section id="home">
      <BackgroundGradient />
      <Content>
        <Title
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Olá, eu sou Loyd Davyd
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Desenvolvedor Front-End especializado em criar experiências digitais 
          incríveis com React e tecnologias modernas
        </Subtitle>
        <SocialLinks
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <SocialIcon href="https://github.com/LoydDavyd" target="_blank">
            <FiGithub />
          </SocialIcon>
          <SocialIcon href="https://linkedin.com/in/loyd" target="_blank">
            <FiLinkedin />
          </SocialIcon>
          <SocialIcon href="mailto:loyd@email.com">
            <FiMail />
          </SocialIcon>
        </SocialLinks>
      </Content>
    </Section>
  );
}