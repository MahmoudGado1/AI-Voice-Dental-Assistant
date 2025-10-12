import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import WhatToAsk from '../../../components/landing/WhatToAsk'

describe('WhatToAsk Component', () => {
  it('should render the main heading', () => {
    render(<WhatToAsk />)
    expect(screen.getByText(/Ask about/i)).toBeInTheDocument()
    expect(screen.getByText(/anything dental/i)).toBeInTheDocument()
  })

  it('should render the AI-Powered Conversations badge', () => {
    render(<WhatToAsk />)
    expect(screen.getByText('AI-Powered Conversations')).toBeInTheDocument()
  })

  it('should render the description', () => {
    render(<WhatToAsk />)
    expect(screen.getByText(/From simple questions to complex concerns/i)).toBeInTheDocument()
  })

  it('should render three question examples', () => {
    render(<WhatToAsk />)
    expect(screen.getByText('"My tooth hurts when I bite down"')).toBeInTheDocument()
    expect(screen.getByText('"How much does teeth whitening cost?"')).toBeInTheDocument()
    expect(screen.getByText('"When should I replace my filling?"')).toBeInTheDocument()
  })

  it('should render answer for tooth pain question', () => {
    render(<WhatToAsk />)
    expect(screen.getByText(/Get immediate advice on pain management/i)).toBeInTheDocument()
  })

  it('should render answer for whitening cost question', () => {
    render(<WhatToAsk />)
    expect(screen.getByText(/Compare treatment options/i)).toBeInTheDocument()
  })

  it('should render answer for filling replacement question', () => {
    render(<WhatToAsk />)
    expect(screen.getByText(/Learn about filling lifespan/i)).toBeInTheDocument()
  })

  it('should render feature tags for first question', () => {
    render(<WhatToAsk />)
    expect(screen.getByText('Instant Response')).toBeInTheDocument()
    expect(screen.getByText('Pain Relief')).toBeInTheDocument()
  })

  it('should render feature tags for second question', () => {
    render(<WhatToAsk />)
    expect(screen.getByText('Cost Analysis')).toBeInTheDocument()
    expect(screen.getByText('Treatment Options')).toBeInTheDocument()
  })

  it('should render feature tags for third question', () => {
    render(<WhatToAsk />)
    expect(screen.getByText('Preventive Care')).toBeInTheDocument()
    expect(screen.getByText('Maintenance')).toBeInTheDocument()
  })

  it('should render AI illustration image', () => {
    render(<WhatToAsk />)
    const image = screen.getByAltText('AI Illustration')
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src', '/confused.png')
  })

  it('should render message icons', () => {
    render(<WhatToAsk />)
    expect(screen.getByTestId('message-circle-icon')).toBeInTheDocument()
    const messageSquareIcons = screen.getAllByTestId('message-square-icon')
    expect(messageSquareIcons).toHaveLength(3)
  })

  it('should have proper section structure', () => {
    const { container } = render(<WhatToAsk />)
    const section = container.querySelector('section')
    expect(section).toBeInTheDocument()
    expect(section).toHaveClass('relative')
  })

  it('should have grid layout', () => {
    const { container } = render(<WhatToAsk />)
    const grid = container.querySelector('[class*="grid"]')
    expect(grid).toBeInTheDocument()
  })

  it('should render Common questions header', () => {
    render(<WhatToAsk />)
    expect(screen.getByText(/Common questions our AI answers:/i)).toBeInTheDocument()
  })
})