import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { act } from 'react'

describe('main.jsx', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="root"></div>'
    vi.resetModules()
  })

  afterEach(() => {
    document.body.innerHTML = ''
  })

  it('renders the app into the root element', async () => {
    await act(async () => {
      await import('./main.jsx')
    })
    const root = document.getElementById('root')
    expect(root.innerHTML).not.toBe('')
  })

  it('renders the Home component with navigation', async () => {
    await act(async () => {
      await import('./main.jsx')
    })
    const root = document.getElementById('root')
    expect(root.querySelector('nav')).toBeTruthy()
  })

  it('renders the Hero section', async () => {
    await act(async () => {
      await import('./main.jsx')
    })
    const root = document.getElementById('root')
    expect(root.querySelector('section')).toBeTruthy()
  })
})
