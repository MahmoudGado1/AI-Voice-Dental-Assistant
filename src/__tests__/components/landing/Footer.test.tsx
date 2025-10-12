import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Footer from '../../../components/landing/Footer'

describe('Footer Component', () => {
  it('should render the logo and brand name', () => {
    render(<Footer />)
    expect(screen.getByAltText('DentWise Logo')).toBeInTheDocument()
    expect(screen.getByText('DentWise')).toBeInTheDocument()
  })

  it('should render the tagline', () => {
    render(<Footer />)
    expect(screen.getByText(/AI-powered dental assistance/i)).toBeInTheDocument()
  })

  it('should render Product section', () => {
    render(<Footer />)
    expect(screen.getByText('Product')).toBeInTheDocument()
    expect(screen.getByText('How it works')).toBeInTheDocument()
    expect(screen.getByText('Pricing')).toBeInTheDocument()
    expect(screen.getByText('FAQ')).toBeInTheDocument()
  })

  it('should render Support section', () => {
    render(<Footer />)
    expect(screen.getByText('Support')).toBeInTheDocument()
    expect(screen.getByText('Help center')).toBeInTheDocument()
    expect(screen.getByText('Contact us')).toBeInTheDocument()
    expect(screen.getByText('Status')).toBeInTheDocument()
  })

  it('should render Legal section', () => {
    render(<Footer />)
    expect(screen.getByText('Legal')).toBeInTheDocument()
    expect(screen.getByText('Privacy')).toBeInTheDocument()
    expect(screen.getByText('Terms')).toBeInTheDocument()
    expect(screen.getByText('Security')).toBeInTheDocument()
  })

  it('should render copyright text', () => {
    render(<Footer />)
    expect(screen.getByText(/© 2024 DentWise/i)).toBeInTheDocument()
  })

  it('should render footer message', () => {
    render(<Footer />)
    expect(screen.getByText(/Built for real people/i)).toBeInTheDocument()
  })

  it('should have proper footer structure', () => {
    const { container } = render(<Footer />)
    const footer = container.querySelector('footer')
    expect(footer).toBeInTheDocument()
  })

  it('should have grid layout for sections', () => {
    const { container } = render(<Footer />)
    const grid = container.querySelector('[class*="grid"]')
    expect(grid).toBeInTheDocument()
  })

  it('should render all footer links', () => {
    render(<Footer />)
    const links = screen.getAllByRole('link')
    expect(links.length).toBeGreaterThan(10)
  })

  it('should render logo with correct dimensions', () => {
    render(<Footer />)
    const logo = screen.getByAltText('DentWise Logo')
    expect(logo).toHaveAttribute('width', '32')
    expect(logo).toHaveAttribute('height', '32')
  })
})