# DN Site

Site institucional desenvolvido com **React 19**, **Vite 8** e **Tailwind CSS 4**.

## Pré-requisitos

- [Node.js](https://nodejs.org/) v22+ (recomendado) ou v20+
- npm v10+

## Instalação

```bash
git clone https://github.com/Vini1905/Projetos-Pessoais.git
cd Projetos-Pessoais
npm install
```

## Scripts disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento com HMR |
| `npm run build` | Gera o build de produção na pasta `dist/` |
| `npm run preview` | Serve o build de produção localmente |
| `npm run lint` | Executa o ESLint em todo o projeto |
| `npm run test` | Executa os testes unitários |
| `npm run test:coverage` | Executa os testes com relatório de cobertura |

## Subindo o projeto localmente

```bash
npm run dev
```

O servidor estará disponível em `http://localhost:5173` (porta padrão do Vite). Alterações nos arquivos são refletidas automaticamente no navegador via Hot Module Replacement (HMR).

## Estrutura do projeto

```
├── public/                  # Arquivos estáticos (imagens, etc.)
│   └── img/                 # Imagens do site
├── src/
│   ├── components/          # Componentes reutilizáveis
│   │   ├── Hero.jsx         # Carrossel principal com slides
│   │   ├── Hero.css         # Estilos do carrossel
│   │   ├── Hero.test.jsx    # Testes do Hero
│   │   ├── Logo.jsx         # Componente de logo
│   │   ├── Logo.test.jsx    # Testes do Logo
│   │   ├── NavBar.jsx       # Barra de navegação
│   │   ├── NavBar.test.jsx  # Testes do NavBar
│   │   └── Nav.css          # Estilos da navegação
│   ├── pages/
│   │   └── Home/
│   │       ├── index.jsx    # Página principal
│   │       ├── Home.test.jsx# Testes da Home
│   │       └── style.css    # Estilos da página
│   ├── main.jsx             # Entry point da aplicação
│   ├── main.test.jsx        # Testes do entry point
│   ├── index.css            # Estilos globais (Tailwind + fontes)
│   └── setupTests.js        # Configuração dos testes (jest-dom)
├── vite.config.js           # Configuração do Vite + Vitest
├── eslint.config.js         # Configuração do ESLint
├── package.json
└── index.html               # HTML base
```

## Testes

O projeto utiliza [Vitest](https://vitest.dev/) com [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) e [jsdom](https://github.com/jsdom/jsdom).

### Rodando os testes

```bash
# Executar todos os testes
npm run test

# Executar com relatório de cobertura
npm run test:coverage

# Executar em modo watch (útil durante desenvolvimento)
npx vitest
```

### Cobertura atual

- **Statements:** 100%
- **Functions:** 100%
- **Lines:** 100%
- **Branches:** 90%

### Convenções para testes

- Arquivos de teste ficam junto ao componente: `Componente.test.jsx`
- Utilizar `describe` para agrupar testes por componente
- Utilizar `screen` e queries do Testing Library para selecionar elementos
- Para interações (click, etc.), usar `fireEvent` do Testing Library

## Stack tecnológica

| Tecnologia | Versão | Uso |
|---|---|---|
| [React](https://react.dev/) | 19.x | Biblioteca de UI |
| [Vite](https://vite.dev/) | 8.x | Build tool e dev server |
| [Tailwind CSS](https://tailwindcss.com/) | 4.x | Framework de estilos utilitários |
| [Vitest](https://vitest.dev/) | 4.x | Framework de testes |
| [React Testing Library](https://testing-library.com/) | 16.x | Utilitários de teste para React |
| [ESLint](https://eslint.org/) | 10.x | Linter de código |

## Build de produção

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`. Para visualizar localmente:

```bash
npm run preview
```
