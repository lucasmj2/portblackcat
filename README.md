# BLACKCAT - Web3 Content Creator Portfolio

Portfólio profissional e minimalista para Lucas Menezes (BLACKCAT), criador de conteúdo Web3.

## 🚀 Características

- **Design Profissional**: Interface limpa e corporativa com estética futurista
- **Shader Animation**: Loading screen com Three.js e efeitos WebGL
- **Personagem Visual**: Seção Hero com imagem do personagem BlackCat
- **Animações Suaves**: Microinterações elegantes usando Framer Motion
- **Responsivo**: Totalmente adaptável para todos os dispositivos
- **Performance**: Otimizado para carregamento rápido
- **Acessível**: Seguindo melhores práticas de acessibilidade

## 🛠️ Tecnologias

- **React 18** - Framework principal
- **Tailwind CSS** - Estilização
- **Framer Motion** - Animações
- **Lucide React** - Ícones
- **React Type Animation** - Efeitos de digitação
- **React Intersection Observer** - Animações ao scroll

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm start

# Build para produção
npm run build
```

## 🎨 Estrutura

```
src/
├── components/
│   ├── SplashScreen.js    # Tela de carregamento inicial
│   ├── Navigation.js      # Menu de navegação
│   ├── Hero.js            # Seção principal
│   ├── About.js           # Informações pessoais
│   ├── MetricsGrid.js     # Grid de métricas animadas
│   ├── Specialties.js     # Especialidades
│   ├── Portfolio.js       # Projetos
│   ├── Contact.js         # Formulário de contato
│   ├── Footer.js          # Rodapé com links
│   └── GradientText.js    # Componente de texto com gradiente
├── lib/
│   └── utils.js           # Funções utilitárias
├── App.js                 # Componente principal
├── index.css              # Estilos globais
└── index.js               # Ponto de entrada
```

## 🎯 Seções

1. **Splash Screen**: Tela de carregamento com ShaderAnimation (Three.js)
2. **Hero**: Layout 2 colunas - texto + imagem do personagem BlackCat
3. **Sobre**: Perfil e objetivos profissionais (texto do site original)
4. **Métricas**: Grid de 8 estatísticas do perfil com animação de contagem
5. **Especialidades**: 6 áreas de expertise
6. **Portfólio**: Showcase de projetos com modal detalhado
7. **Contato**: Formulário de contato + links sociais (X e Telegram)
8. **Footer**: Links rápidos e redes sociais

## 📸 Como Adicionar a Imagem do Personagem

Coloque sua imagem do gato preto em:
```
public/blackcat-character.png
```

**Especificações:**
- Formato: PNG (com fundo transparente)
- Tamanho: 800x800px ou maior
- A imagem aparecerá automaticamente na seção Hero

Veja instruções detalhadas em: `public/COMO-ADICIONAR-IMAGEM.md`

## 🎨 Paleta de Cores

- **Preto**: `#000000` - Background principal
- **Branco**: `#FFFFFF` - Texto e acentos
- **Cinza**: `#6B7280` - Texto secundário
- **Roxo 500**: `#a855f7` - Acento primário
- **Pink 600**: `#ec4899` - Acento secundário
- **Gradiente**: Purple → Pink → Orange

## 📱 Responsividade

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Deploy

O projeto está pronto para deploy em plataformas como:
- Vercel
- Netlify
- GitHub Pages

## 📄 Licença

© 2024 BLACKCAT - Todos os direitos reservados
