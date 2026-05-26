import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import NavBar from './NavBar'

describe('NavBar', () => {
  it('renders the navigation element', () => {
    render(<NavBar />)
    const nav = screen.getByRole('navigation')
    expect(nav).toBeInTheDocument()
  })

  it('renders the Logo component', () => {
    render(<NavBar />)
    const logo = screen.getByRole('img')
    expect(logo).toBeInTheDocument()
    expect(logo).toHaveAttribute('src', '/img/LOGOOF.png')
  })

  it('renders the Home link', () => {
    render(<NavBar />)
    const homeLink = screen.getByText('Home')
    expect(homeLink).toBeInTheDocument()
    expect(homeLink).toHaveAttribute('href', '#home')
  })

  it('renders the Cursos link', () => {
    render(<NavBar />)
    const cursosLink = screen.getByText('Cursos')
    expect(cursosLink).toBeInTheDocument()
    expect(cursosLink).toHaveAttribute('href', '#courses')
  })

  it('renders the Quem somos link', () => {
    render(<NavBar />)
    const quemSomosLink = screen.getByText('Quem somos')
    expect(quemSomosLink).toBeInTheDocument()
    expect(quemSomosLink).toHaveAttribute('href', '#courses')
  })

  it('applies fixed positioning and styling classes to nav', () => {
    render(<NavBar />)
    const nav = screen.getByRole('navigation')
    expect(nav).toHaveClass('fixed', 'top-0', 'w-full', 'z-50')
  })

  it('has navselec class on links', () => {
    render(<NavBar />)
    const homeLink = screen.getByText('Home')
    expect(homeLink).toHaveClass('navselec')
  })
})
