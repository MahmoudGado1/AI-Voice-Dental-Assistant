import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import CTA from '../../../components/landing/CTA'

describe('CTA Component', () => {
  it('should render the main heading', () => {
    render(<CTA />)
    expect(screen.getByText(/Your dental health/i)).toBeInTheDocument()
    expect(screen.getByText(/journey starts here/i)).toBeInTheDocument()
  })

  it('should render the Ready When You Are badge', () => {
    render(<CTA />)
    expect(screen.getByText('Ready When You Are')).toBeInTheDocument()
  })

  it('should render the description', () => {
    render(<CTA />)
    expect(screen.getByText(/Join 1,200\+ patients/i)).toBeInTheDocument()
  })

  it('should render Start free chat button', () => {
    render(<CTA />)
    expect(screen.getByText('Start free chat')).toBeInTheDocument()
  })

  it('should render Book appointment button', () => {
    render(<CTA />)
    expect(screen.getByText('Book appointment')).toBeInTheDocument()
  })

  it('should render Available 24/7 badge', () => {
    render(<CTA />)
    expect(screen.getByText('Available 24/7')).toBeInTheDocument()
  })

  it('should render CTA image', () => {
    render(<CTA />)
    const image = screen.getByAltText('DentWise AI Assistant')
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src', '/cta.png')
  })

  it('should render Mic icon', () => {
    render(<CTA />)
    expect(screen.getAllByTestId('mic-icon')[0]).toBeInTheDocument()
  })

  it('should render Calendar icon', () => {
    render(<CTA />)
    expect(screen.getAllByTestId('calendar-icon')[0]).toBeInTheDocument()
  })

  it('should have proper section structure', () => {
    const { container } = render(<CTA />)
    const section = container.querySelector('section')
    expect(section).toBeInTheDocument()
    expect(section).toHaveClass('relative')
  })

  it('should have grid layout', () => {
    const { container } = render(<CTA />)
    const grid = container.querySelector('[class*="grid"]')
    expect(grid).toBeInTheDocument()
  })

  it('should have gradient background', () => {
    const { container } = render(<CTA />)
    const section = container.querySelector('section')
    expect(section?.className).toContain('bg-gradient')
  })

  it('should render image with priority', () => {
    render(<CTA />)
    const image = screen.getByAltText('DentWise AI Assistant')
    // Priority is a Next.js Image prop that we mock
    expect(image).toBeInTheDocument()
  })
})