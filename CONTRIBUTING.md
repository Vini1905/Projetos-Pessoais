# Guia de Contribuição

## Fluxo de Branches

Este projeto segue um fluxo de branches estruturado. **Commits diretos nas branches `main` e `develop` não são permitidos.**

### Visão Geral

```
feature/* → develop → release/x.x.x → main
```

### Passo a Passo

#### 1. Criar feature branch a partir da `develop`

```bash
git checkout develop
git pull origin develop
git checkout -b feature/nome-da-feature
```

#### 2. Desenvolver e testar localmente

```bash
# Desenvolva sua feature
npm run dev

# Rode os testes
npm run test

# Verifique a cobertura (mínimo 90%)
npm run test:coverage

# Rode o lint
npm run lint
```

#### 3. PR automático: `feature/*` → `develop` (automático)

- Ao fazer push na branch `feature/*`, dois workflows são disparados automaticamente:
  1. **CI (`ci-feature.yml`)**: executa lint, testes com cobertura (≥90%) e build
  2. **Auto PR (`auto-feature-pr.yml`)**: cria o PR de `feature/*` → `develop` automaticamente
- Se o PR já existir, novos pushes apenas re-executam o CI
- Aguarde aprovação e merge

#### 4. PR automático: `develop` → `release/x.x.x` (automático)

- Ao mergear na `develop`, o workflow **auto-release** executa automaticamente:
  1. **Bump de versão** via `standard-version` (baseado nos Conventional Commits)
  2. **Geração do CHANGELOG.md** com as mudanças
  3. **Criação da branch** `release/x.x.x` a partir da `main`
  4. **Abertura do PR** de `develop` → `release/x.x.x`
- O CI (`ci-release.yml`) executa os mesmos checks automaticamente
- Aguarde aprovação e merge

> **Versionamento automático:** A versão é determinada pelos prefixos dos commits:
> - `feat:` → bump **minor** (1.0.0 → 1.1.0)
> - `fix:` → bump **patch** (1.0.0 → 1.0.1)
> - `feat!:` ou `BREAKING CHANGE:` → bump **major** (1.0.0 → 2.0.0)

#### 5. PR automático: `release/x.x.x` → `main` (automático)

- Ao mergear na `release/x.x.x`, o workflow **auto-main-pr** cria automaticamente o PR para `main`
- O CI (`ci-main.yml`) executa lint, testes, cobertura e build de produção
- O artefato de build será salvo automaticamente
- Após aprovação e merge, o fluxo está concluído

### Convenções

#### Nomes de branches

| Tipo | Padrão | Exemplo |
|---|---|---|
| Feature | `feature/nome` | `feature/carousel-melhorias` |
| Release | `release/x.x.x` | `release/1.1.0` |
| Hotfix | `hotfix/nome` | `hotfix/corrigir-nav` |

#### Mensagens de commit

Utilize [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` — nova funcionalidade
- `fix:` — correção de bug
- `docs:` — documentação
- `chore:` — tarefas de manutenção
- `refactor:` — refatoração sem mudança de comportamento
- `test:` — adição ou correção de testes

### Requisitos para merge

- Todos os checks do CI devem passar (lint, testes, build)
- Cobertura de código ≥ 90%
- Ao menos 1 aprovação no PR

## Variáveis de Ambiente

Copie o arquivo `.env.example` para `.env` e ajuste conforme necessário:

```bash
cp .env.example .env
```

Variáveis disponíveis:

| Variável | Descrição | Default |
|---|---|---|
| `VITE_APP_TITLE` | Título da aplicação | `DN Site` |
| `VITE_APP_CAROUSEL_INTERVAL` | Intervalo do carrossel (ms) | `5000` |
| `VITE_APP_LOG_LEVEL` | Nível de log (debug/info/warn/error) | `info` |
