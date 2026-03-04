import { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FiSend, FiUser, FiMail, FiMessageSquare } from 'react-icons/fi'
import SectionTitle from '../ui/SectionTitle'

const Section = styled.section`
  padding: 100px 20px;
`

const Container = styled(motion.div)`
  max-width: 600px;
  margin: 0 auto;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const InputGroup = styled.div`
  position: relative;
`

const Icon = styled.div`
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.2rem;
`

const Input = styled.input`
  width: 100%;
  padding: 15px 15px 15px 50px;
  background: ${({ theme }) => theme.colors.surface};
  border: 2px solid transparent;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`

const TextArea = styled.textarea`
  width: 100%;
  padding: 15px 15px 15px 50px;
  background: ${({ theme }) => theme.colors.surface};
  border: 2px solid transparent;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`

const SubmitButton = styled(motion.button)`
  background: ${({ theme }) => theme.colors.gradient};
  color: white;
  padding: 15px 30px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
  border: none;
  transition: all 0.3s ease;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

const SuccessMessage = styled(motion.div)`
  background: ${({ theme }) => theme.colors.primary}20;
  color: ${({ theme }) => theme.colors.primary};
  padding: 15px;
  border-radius: 8px;
  text-align: center;
  margin-top: 20px;
`

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simular envio
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSuccess(true)
    setFormData({ name: '', email: '', message: '' })
    
    setTimeout(() => setIsSuccess(false), 5000)
  }

  return (
    <Section id="contato">
      <SectionTitle>Contato</SectionTitle>
      <Container
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <Icon><FiUser /></Icon>
            <Input
              type="text"
              name="name"
              placeholder="Seu nome"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </InputGroup>

          <InputGroup>
            <Icon><FiMail /></Icon>
            <Input
              type="email"
              name="email"
              placeholder="Seu email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </InputGroup>

          <InputGroup>
            <Icon><FiMessageSquare /></Icon>
            <TextArea
              name="message"
              placeholder="Sua mensagem"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </InputGroup>

          <SubmitButton
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
            <FiSend />
          </SubmitButton>

          {isSuccess && (
            <SuccessMessage
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              Mensagem enviada com sucesso! Entrarei em contato em breve.
            </SuccessMessage>
          )}
        </Form>
      </Container>
    </Section>
  )
}