# 📄 README.md - Portfólio Loyd Davyd

```markdown
# 💼 Portfólio Profissional - Loyd Davyd

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Styled Components](https://img.shields.io/badge/Styled_Components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

Portfólio profissional moderno e responsivo desenvolvido com React e Vite, apresentando projetos, habilidades e informações de contato de um desenvolvedor front-end.

![Preview do Portfólio](./public/preview.png)

## ✨ Demonstração

🔗 **Link do Projeto:** [https://portfolio-loyd.vercel.app](https://portfolio-loyd.vercel.app)

## 📋 Índice

- [Sobre](#-sobre)
- [Tecnologias](#-tecnologias)
- [Funcionalidades](#-funcionalidades)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Instalação](#-instalação)
- [Como Usar](#-como-usar)
- [Personalização](#-personalização)
- [Deploy](#-deploy)
- [Licença](#-licença)

## 🎯 Sobre

Este é um portfólio profissional desenvolvido para apresentar trabalhos, habilidades e experiência como desenvolvedor front-end. O projeto foi construído com foco em:

- **Design moderno e atraente** - Interface limpa com gradientes e efeitos visuais
- **Experiência do usuário** - Navegação fluida e animações suaves
- **Performance** - Código otimizado e carregamento rápido
- **Responsividade** - Funciona perfeitamente em todos os dispositivos

## 🚀 Tecnologias

- **React 18** - Biblioteca para construção de interfaces
- **Vite** - Build tool e servidor de desenvolvimento
- **Styled Components** - Estilização com CSS-in-JS
- **Framer Motion** - Animações avançadas
- **React Icons** - Ícones profissionais
- **React Intersection Observer** - Detecção de elementos na viewport

## ⚡ Funcionalidades

### ✅ Implementadas
- ✅ **Header fixo com efeito glassmorphism** - Navegação que muda ao scrollar
- ✅ **Menu mobile responsivo** - Hamburger menu para dispositivos móveis
- ✅ **Seção Hero com animações** - Apresentação com efeitos de entrada
- ✅ **Cards de projetos interativos** - Hover effects e links para GitHub/demo
- ✅ **Barra de habilidades animada** - Progress bars com animação ao entrar na tela
- ✅ **Formulário de contato funcional** - Com validação e feedback visual
- ✅ **Botão voltar ao topo** - Aparece após rolar a página
- ✅ **Scroll suave entre seções** - Navegação fluida
- ✅ **Totalmente responsivo** - Adaptado para todos os tamanhos de tela
- ✅ **Tema com cores gradientes** - Design system consistente

### 🔜 Próximas Features
- [ ] Modo dark/light toggle
- [ ] PWA para instalação
- [ ] Blog integrado com MDX
- [ ] Múltiplos idiomas (i18n)
- [ ] Testes com Jest e Testing Library
- [ ] Integração com CMS para projetos dinâmicos

## 📁 Estrutura do Projeto

```
portfolio-loyd/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── BackToTop.jsx
│   │   ├── sections/
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Skills.jsx
│   │   │   └── Contact.jsx
│   │   └── ui/
│   │       ├── ProjectCard.jsx
│   │       ├── SkillBadge.jsx
│   │       └── SectionTitle.jsx
│   ├── data/
│   │   ├── projects.js
│   │   └── skills.js
│   ├── styles/
│   │   ├── GlobalStyles.js
│   │   └── theme.js
│   ├── hooks/
│   │   └── useScrollAnimation.js
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── vercel.json
```

## 🔧 Instalação

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm ou yarn

### Passo a Passo

1. **Clone o repositório**
```bash
git clone https://github.com/LoydDavyd/portfolio-loyd.git
cd portfolio
```

2. **Instale as dependências**
```bash
npm install
```

3. **Instale dependências adicionais**
```bash
npm install styled-components framer-motion react-icons react-intersection-observer
```

4. **Inicie o servidor de desenvolvimento**
```bash
npm run dev
```

5. **Acesse no navegador**
```
http://localhost:3000
```

## 📱 Como Usar

### Desenvolvimento
```bash
# Iniciar em modo desenvolvimento
npm run dev

# Build para produção
npm run build

# Visualizar build localmente
npm run preview
```

### Personalização

1. **Dados Pessoais**
   - Edite `src/data/projects.js` para adicionar/remover projetos
   - Edite `src/data/skills.js` para atualizar habilidades
   - Modifique informações de contato nos componentes

2. **Estilos**
   - Cores e tema em `src/styles/theme.js`
   - Estilos globais em `src/styles/GlobalStyles.js`

3. **Conteúdo**
   - Textos em cada componente da pasta `sections/`
   - Adicione imagens na pasta `public/`

## 🌍 Deploy

### Deploy na Vercel (Recomendado)

1. **Crie uma conta na [Vercel](https://vercel.com)**

2. **Instale a Vercel CLI (opcional)**
```bash
npm i -g vercel
```

3. **Faça o deploy**
```bash
# Via CLI
vercel

# Ou conecte seu repositório GitHub em vercel.com
```

### Deploy manual
```bash
# Gere os arquivos de produção
npm run build

# Envie o conteúdo da pasta 'dist' para seu servidor
```

## 🎨 Screenshots

### Desktop
![Desktop Version](./public/desktop.png)

### Mobile
![Mobile Version](./public/mobile.png)

## 🤝 Contribuição

Contribuições são sempre bem-vindas! Siga os passos:

1. Fork o projeto
2. Crie sua branch (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Contato

Loyd Davyd - [@loyd_davyd](https://twitter.com/loyd_davyd) - loyd@email.com

Link do Projeto: [https://github.com/LoydDavyd/portfolio](https://github.com/LoydDavyd/portfolio)

---

## ⭐ Agradecimentos

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Styled Components](https://styled-components.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)

---

**Feito com ❤️ por Loyd Davyd**
```

---

# 📄 ARQUIVO ADICIONAL: LICENSE (opcional)

```markdown
MIT License

Copyright (c) 2026 Loyd Davyd

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

# 🖼️ CRIE UMA PASTA DE IMAGENS

Crie uma pasta `public/images/` e adicione:
- `preview.png` - Screenshot do projeto
- `desktop.png` - Versão desktop
- `mobile.png` - Versão mobile

Ou remova as referências de imagem do README se não tiver as screenshots.

---

# ✅ RESUMO DO README

O README contém:

1. **Badges** - Tecnologias utilizadas
2. **Demonstração** - Link do projeto online
3. **Índice** - Navegação rápida
4. **Sobre** - Descrição do projeto
5. **Tecnologias** - Stack utilizada
6. **Funcionalidades** - O que foi implementado
7. **Estrutura** - Organização de pastas
8. **Instalação** - Passo a passo para rodar
9. **Como usar** - Comandos e personalização
10. **Deploy** - Instruções para publicar
11. **Screenshots** - Imagens do projeto
12. **Contribuição** - Como contribuir
13. **Licença** - MIT License
14. **Contato** - Redes sociais
15. **Agradecimentos** - Créditos

Agora seu projeto está **100% completo** com documentação profissional! 🎯