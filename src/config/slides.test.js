import { describe, it, expect } from 'vitest'
import slides from './slides'

describe('slides config', () => {
  it('has exactly 3 slides', () => {
    expect(slides).toHaveLength(3)
  })

  it('each slide has required fields', () => {
    const requiredFields = ['tag', 'name', 'description', 'image', 'alt', 'nameFont', 'nameColor']
    slides.forEach((slide) => {
      requiredFields.forEach((field) => {
        expect(slide).toHaveProperty(field)
        expect(slide[field]).toBeTruthy()
      })
    })
  })

  it('has correct slide names', () => {
    const names = slides.map((s) => s.name)
    expect(names).toEqual(['Shock', 'Caraguatá', 'Marmitas'])
  })

  it('has unique alt texts', () => {
    const alts = slides.map((s) => s.alt)
    expect(new Set(alts).size).toBe(alts.length)
  })
})
