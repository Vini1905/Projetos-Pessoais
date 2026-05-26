import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Logo from './Logo'

describe('Logo', () => {
  it('renders the logo image', () => {
    render(<Logo />)
    const img = screen.getByRole('img')
    expect(img).toBeInTheDocument()
  })

  it('renders the image with correct src', () => {
    render(<Logo />)
    const img = screen.getByRole('img')
    expect(img).toHaveAttribute('src', '/img/LOGOOF.png')
  })

  it('applies correct CSS classes to the image', () => {
    render(<Logo />)
    const img = screen.getByRole('img')
    expect(img).toHaveClass('h-20', 'w-20', 'object-contain')
  })

  it('wraps the image in a div', () => {
    const { container } = render(<Logo />)
    const div = container.firstChild
    expect(div.tagName).toBe('DIV')
    expect(div.querySelector('img')).toBeInTheDocument()
  })
})
