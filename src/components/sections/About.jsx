import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import SectionTitle from '../ui/SectionTitle'

const Section = styled.section`
  padding: 100px 20px;
  background: ${({ theme }) => theme.colors.surface};
`

const Container = styled(motion.div)`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`

const Text = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 30px;
  line-height: 1.8;
`

const Highlight = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
`

export default function About() {
  const { ref, controls } = useScrollAnimation()

  return (
    <Section id="sobre">
      <SectionTitle>Sobre Mim</SectionTitle>
      <Container
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 }
        }}
        transition={{ duration: 0.6 }}
      >
        <Text>
          Sou um <Highlight>desenvolvedor front-end</Highlight> apaixonado por criar 
          interfaces modernas e experiências digitais memoráveis. Com mais de 3 anos 
          de experiência em desenvolvimento web, tenho trabalhado com diversas 
          tecnologias do ecossistema React.
        </Text>
        <Text>
          Minha jornada na programação começou com a curiosidade de entender como 
          os sites funcionam, e hoje me dedico a construir aplicações escaláveis e 
          performáticas. Acredito que um bom código vai além da funcionalidade - 
          ele deve ser limpo, reutilizável e de fácil manutenção.
        </Text>
        <Text>
          Atualmente, estou focado em <Highlight>Next.js, TypeScript</Highlight> e 
          arquiteturas de microfrontends, sempre buscando as melhores práticas e 
          tendências do mercado.
        </Text>
      </Container>
    </Section>
  )
}