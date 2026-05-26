import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Hero from './Hero'

describe('Hero', () => {
  it('renders a section element', () => {
    const { container } = render(<Hero />)
    const section = container.querySelector('section')
    expect(section).toBeInTheDocument()
  })

  it('renders the Shock product card', () => {
    render(<Hero />)
    expect(screen.getByText('Shock')).toBeInTheDocument()
    expect(screen.getByText('Curso')).toBeInTheDocument()
  })

  it('renders the Shock product description', () => {
    render(<Hero />)
    expect(
      screen.getByText(
        /O Shock é um curso realizado na nossa Base Missionária/
      )
    ).toBeInTheDocument()
  })

  it('renders the Shock image with correct alt text', () => {
    render(<Hero />)
    const shockImg = screen.getByAltText('Shock')
    expect(shockImg).toBeInTheDocument()
    expect(shockImg).toHaveAttribute('src', '/img/AULAS.JPG')
  })

  it('renders the Caraguatá product card', () => {
    render(<Hero />)
    expect(screen.getByAltText('Caraguatá')).toBeInTheDocument()
    expect(screen.getByText('Corpus')).toBeInTheDocument()
    expect(screen.getByText('Caraguatá')).toBeInTheDocument()
  })

  it('renders the Marmita product card', () => {
    render(<Hero />)
    expect(screen.getByAltText('Marmita')).toBeInTheDocument()
    expect(screen.getByText('Marmita')).toBeInTheDocument()
  })

  it('renders the Marmita image with correct src', () => {
    render(<Hero />)
    const marmitaImg = screen.getByAltText('Marmita')
    expect(marmitaImg).toHaveAttribute('src', '/img/Caraguata.JPG')
  })

  it('renders Saiba Mais button', () => {
    render(<Hero />)
    expect(screen.getByText('Saiba Mais!')).toBeInTheDocument()
  })

  it('renders the Saiba Mais button with correct classes', () => {
    render(<Hero />)
    const btn = screen.getByText('Saiba Mais!')
    expect(btn).toHaveClass('btn', 'cadastro')
  })

  it('renders three list items', () => {
    const { container } = render(<Hero />)
    const items = container.querySelectorAll('.item')
    expect(items).toHaveLength(3)
  })

  it('marks the first item as active', () => {
    const { container } = render(<Hero />)
    const items = container.querySelectorAll('.item')
    expect(items[0]).toHaveClass('active')
    expect(items[1]).not.toHaveClass('active')
    expect(items[2]).not.toHaveClass('active')
  })

  it('renders navigation arrow buttons', () => {
    const { container } = render(<Hero />)
    const prevBtn = container.querySelector('#prev')
    const nextBtn = container.querySelector('#next')
    expect(prevBtn).toBeInTheDocument()
    expect(nextBtn).toBeInTheDocument()
  })

  it('renders SVG icons inside arrow buttons', () => {
    const { container } = render(<Hero />)
    const svgs = container.querySelectorAll('svg')
    expect(svgs.length).toBeGreaterThanOrEqual(2)
  })

  it('renders three dot indicators', () => {
    const { container } = render(<Hero />)
    const dots = container.querySelectorAll('.dot')
    expect(dots).toHaveLength(3)
  })

  it('marks the first dot as active', () => {
    const { container } = render(<Hero />)
    const dots = container.querySelectorAll('.dot')
    expect(dots[0]).toHaveClass('active')
    expect(dots[1]).not.toHaveClass('active')
    expect(dots[2]).not.toHaveClass('active')
  })

  it('renders the container div', () => {
    const { container } = render(<Hero />)
    const containerDiv = container.querySelector('.container')
    expect(containerDiv).toBeInTheDocument()
  })

  it('renders the indicators section', () => {
    const { container } = render(<Hero />)
    const indicators = container.querySelector('.indicators')
    expect(indicators).toBeInTheDocument()
  })
})
