import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const Nav = styled(motion.nav)`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 20px 40px;
  background: ${({ scrolled, theme }) => 
    scrolled ? 'rgba(15, 23, 42, 0.95)' : 'transparent'};
  backdrop-filter: ${({ scrolled }) => scrolled ? 'blur(10px)' : 'none'};
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  transition: all 0.3s ease;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 15px 20px;
  }
`;

const Logo = styled(motion.div)`
  font-size: 1.5rem;
  font-weight: bold;
  background: ${({ theme }) => theme.colors.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: pointer;
`;

const MenuLinks = styled.div`
  display: flex;
  gap: 30px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 70%;
    background: ${({ theme }) => theme.colors.surface};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: ${({ theme }) => theme.shadows.large};
  }
`;

const MenuItem = styled(motion.a)`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  font-weight: 500;
  position: relative;
  cursor: pointer;

  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: ${({ theme }) => theme.colors.gradient};
    transition: width 0.3s ease;
  }

  &:hover:after {
    width: 100%;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1001;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: block;
  }
`;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = ['Sobre', 'Projetos', 'Skills', 'Contato'];

  return (
    <Nav scrolled={scrolled}>
      <Logo
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        Loyd Dev
      </Logo>

      <MobileMenuButton onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FiX /> : <FiMenu />}
      </MobileMenuButton>

      <MenuLinks isOpen={isOpen}>
        {menuItems.map((item, index) => (
          <MenuItem
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={() => setIsOpen(false)}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {item}
          </MenuItem>
        ))}
      </MenuLinks>
    </Nav>
  );
}