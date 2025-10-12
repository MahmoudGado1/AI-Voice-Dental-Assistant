import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import HowItWorks from '../../../components/landing/HowItWorks'

describe('HowItWorks Component', () => {
  it('should render the main heading', () => {
    render(<HowItWorks />)
    expect(screen.getByText(/Three steps to/i)).toBeInTheDocument()
    expect(screen.getByText(/better dental health/i)).toBeInTheDocument()
  })

  it('should render the Simple Process badge', () => {
    render(<HowItWorks />)
    expect(screen.getByText('Simple Process')).toBeInTheDocument()
  })

  it('should render the description', () => {
    render(<HowItWorks />)
    expect(screen.getByText(/Our streamlined process/i)).toBeInTheDocument()
  })

  it('should render three step cards', () => {
    render(<HowItWorks />)
    expect(screen.getByText('Ask Questions')).toBeInTheDocument()
    expect(screen.getByText('Get Expert Advice')).toBeInTheDocument()
    expect(screen.getByText('Book & Get Care')).toBeInTheDocument()
  })

  it('should render step 1 details', () => {
    render(<HowItWorks />)
    expect(screen.getByText(/Chat with our AI assistant/i)).toBeInTheDocument()
    expect(screen.getByText('24/7 Available')).toBeInTheDocument()
    expect(screen.getByText('Instant Response')).toBeInTheDocument()
  })

  it('should render step 2 details', () => {
    render(<HowItWorks />)
    expect(screen.getByText(/Receive personalized recommendations/i)).toBeInTheDocument()
    expect(screen.getByText('AI-Powered')).toBeInTheDocument()
    expect(screen.getByText('Personalized')).toBeInTheDocument()
  })

  it('should render step 3 details', () => {
    render(<HowItWorks />)
    expect(screen.getByText(/Schedule with verified dentists/i)).toBeInTheDocument()
    expect(screen.getByText('Verified Doctors')).toBeInTheDocument()
    expect(screen.getByText('Follow-up Care')).toBeInTheDocument()
  })

  it('should render step images with correct alt text', () => {
    render(<HowItWorks />)
    const images = screen.getAllByAltText('DentWise AI')
    expect(images).toHaveLength(3)
  })

  it('should render step images with correct sources', () => {
    render(<HowItWorks />)
    const images = screen.getAllByAltText('DentWise AI')
    expect(images[0]).toHaveAttribute('src', '/audio.png')
    expect(images[1]).toHaveAttribute('src', '/brain.png')
    expect(images[2]).toHaveAttribute('src', '/calendar.png')
  })

  it('should render CTA button', () => {
    render(<HowItWorks />)
    expect(screen.getByText('Get Started Now')).toBeInTheDocument()
  })

  it('should render Zap icon', () => {
    render(<HowItWorks />)
    expect(screen.getByTestId('zap-icon')).toBeInTheDocument()
  })

  it('should render Arrow Right icon', () => {
    render(<HowItWorks />)
    expect(screen.getByTestId('arrow-right-icon')).toBeInTheDocument()
  })

  it('should have proper section structure', () => {
    const { container } = render(<HowItWorks />)
    const section = container.querySelector('section')
    expect(section).toBeInTheDocument()
    expect(section).toHaveClass('relative')
  })

  it('should render numbered badges for steps', () => {
    const { container } = render(<HowItWorks />)
    const badges = container.querySelectorAll('[class*="rounded-full"]')
    expect(badges.length).toBeGreaterThan(0)
  })

  it('should have grid layout for steps', () => {
    const { container } = render(<HowItWorks />)
    const grid = container.querySelector('[class*="grid"]')
    expect(grid).toBeInTheDocument()
  })
})