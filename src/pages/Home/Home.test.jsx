import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Home from './index'

describe('Home', () => {
  it('renders the Home component', () => {
    const { container } = render(<Home />)
    expect(container.firstChild).toBeInTheDocument()
  })

  it('renders the NavBar component', () => {
    render(<Home />)
    const nav = screen.getByRole('navigation')
    expect(nav).toBeInTheDocument()
  })

  it('renders the Hero component', () => {
    render(<Home />)
    expect(screen.getByText('Shock')).toBeInTheDocument()
  })

  it('wraps content in a container div', () => {
    const { container } = render(<Home />)
    const containerDiv = container.querySelector('.container')
    expect(containerDiv).toBeInTheDocument()
  })

  it('renders NavBar before Hero in the DOM', () => {
    const { container } = render(<Home />)
    const containerDiv = container.querySelector('.container')
    const children = containerDiv.children
    expect(children[0].tagName).toBe('NAV')
    expect(children[1].tagName).toBe('SECTION')
  })

  it('renders the Logo inside NavBar', () => {
    render(<Home />)
    const logoImg = screen.getByRole('img', { name: '' })
    expect(logoImg).toHaveAttribute('src', '/img/LOGOOF.png')
  })

  it('renders navigation links', () => {
    render(<Home />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Cursos')).toBeInTheDocument()
    expect(screen.getByText('Quem somos')).toBeInTheDocument()
  })
})
