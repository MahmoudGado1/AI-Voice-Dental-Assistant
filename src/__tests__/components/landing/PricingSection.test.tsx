import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import PricingSection from '../../../components/landing/PricingSection'

describe('PricingSection Component', () => {
  it('should render the main heading', () => {
    render(<PricingSection />)
    expect(screen.getByText(/Choose your/i)).toBeInTheDocument()
    expect(screen.getByText(/AI dental plan/i)).toBeInTheDocument()
  })

  it('should render the Simple Pricing badge', () => {
    render(<PricingSection />)
    expect(screen.getByText('Simple Pricing')).toBeInTheDocument()
  })

  it('should render the description', () => {
    render(<PricingSection />)
    expect(screen.getByText(/Book appointments for free/i)).toBeInTheDocument()
  })

  it('should render three pricing tiers', () => {
    render(<PricingSection />)
    expect(screen.getByText('Free')).toBeInTheDocument()
    expect(screen.getByText('AI Basic')).toBeInTheDocument()
    expect(screen.getByText('AI Pro')).toBeInTheDocument()
  })

  it('should render correct prices', () => {
    render(<PricingSection />)
    expect(screen.getByText('$0')).toBeInTheDocument()
    expect(screen.getByText('$9')).toBeInTheDocument()
    expect(screen.getByText('$19')).toBeInTheDocument()
  })

  it('should render Most Popular badge', () => {
    render(<PricingSection />)
    expect(screen.getByText('Most Popular')).toBeInTheDocument()
  })

  it('should render Free plan features', () => {
    render(<PricingSection />)
    expect(screen.getByText('Unlimited appointment booking')).toBeInTheDocument()
    expect(screen.getByText('Find dentists in your area')).toBeInTheDocument()
    expect(screen.getByText('Basic text chat support')).toBeInTheDocument()
    expect(screen.getByText('Appointment reminders')).toBeInTheDocument()
  })

  it('should render AI Basic plan features', () => {
    render(<PricingSection />)
    expect(screen.getByText('10 AI voice calls per month')).toBeInTheDocument()
    expect(screen.getByText('AI dental guidance & advice')).toBeInTheDocument()
    expect(screen.getByText('Symptom assessment')).toBeInTheDocument()
    expect(screen.getByText('Priority support')).toBeInTheDocument()
    expect(screen.getByText('Call history & recordings')).toBeInTheDocument()
  })

  it('should render AI Pro plan features', () => {
    render(<PricingSection />)
    expect(screen.getByText('Unlimited AI voice calls')).toBeInTheDocument()
    expect(screen.getByText('Advanced AI dental analysis')).toBeInTheDocument()
    expect(screen.getByText('Personalized care plans')).toBeInTheDocument()
    expect(screen.getByText('24/7 priority AI support')).toBeInTheDocument()
    expect(screen.getByText('Detailed health reports')).toBeInTheDocument()
  })

  it('should render CTA buttons for each plan', () => {
    render(<PricingSection />)
    expect(screen.getByText('Get Started Free')).toBeInTheDocument()
    expect(screen.getByText('Start AI Basic')).toBeInTheDocument()
    expect(screen.getByText('Upgrade to AI Pro')).toBeInTheDocument()
  })

  it('should render check circle icons for features', () => {
    render(<PricingSection />)
    const checkIcons = screen.getAllByTestId('check-circle-icon')
    expect(checkIcons.length).toBeGreaterThan(10)
  })

  it('should have proper section structure', () => {
    const { container } = render(<PricingSection />)
    const section = container.querySelector('section')
    expect(section).toBeInTheDocument()
    expect(section).toHaveClass('relative')
  })

  it('should render Everything in Free text', () => {
    render(<PricingSection />)
    expect(screen.getByText('Everything in Free')).toBeInTheDocument()
  })

  it('should render Everything in AI Basic text', () => {
    render(<PricingSection />)
    expect(screen.getByText('Everything in AI Basic')).toBeInTheDocument()
  })

  it('should have grid layout for pricing cards', () => {
    const { container } = render(<PricingSection />)
    const grid = container.querySelector('[class*="grid"]')
    expect(grid).toBeInTheDocument()
  })
})