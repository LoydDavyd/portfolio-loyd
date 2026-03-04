import styled from 'styled-components'
import { motion } from 'framer-motion'

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 60px;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background: ${({ theme }) => theme.colors.gradient};
    border-radius: 2px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2rem;
    margin-bottom: 40px;
  }
`

export default function SectionTitle({ children }) {
  return (
    <Title
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {children}
    </Title>
  )
}