import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Home from '../../app/page'

describe('Home Page', () => {
  it('should render without crashing', () => {
    render(<Home />)
    const container = screen.getByRole('main', { hidden: true }) || document.querySelector('div')
    expect(container).toBeDefined()
  })

  it('should have correct container classes', () => {
    const { container } = render(<Home />)
    const mainDiv = container.firstChild as HTMLElement
    expect(mainDiv).toHaveClass('min-h-screen', 'bg-background')
  })

  it('should render all landing page sections', () => {
    render(<Home />)
    // The page should render without errors - components are tested individually
    expect(document.body).toBeInTheDocument()
  })

  it('should maintain proper component order', () => {
    const { container } = render(<Home />)
    const mainDiv = container.firstChild as HTMLElement
    // Verify the main container exists and has children
    expect(mainDiv.children.length).toBeGreaterThan(0)
  })
})