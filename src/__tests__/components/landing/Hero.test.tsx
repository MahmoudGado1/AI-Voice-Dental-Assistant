import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Hero from '../../../components/landing/Hero'

describe('Hero Component', () => {
  it('should render the main heading', () => {
    render(<Hero />)
    expect(screen.getByText(/Your dental/i)).toBeInTheDocument()
    expect(screen.getByText(/questions/i)).toBeInTheDocument()
    expect(screen.getByText(/answered instantly/i)).toBeInTheDocument()
  })

  it('should render the description text', () => {
    render(<Hero />)
    expect(screen.getByText(/Chat with our AI dental assistant/i)).toBeInTheDocument()
  })

  it('should render CTA buttons', () => {
    render(<Hero />)
    expect(screen.getByText('Try voice chat')).toBeInTheDocument()
    expect(screen.getByText('Book appointment')).toBeInTheDocument()
  })

  it('should render the AI-Powered badge', () => {
    render(<Hero />)
    expect(screen.getByText('AI-Powered Dental Assistant')).toBeInTheDocument()
  })

  it('should render testimonial section with rating', () => {
    render(<Hero />)
    expect(screen.getByText(/4.9\/5/i)).toBeInTheDocument()
    expect(screen.getByText(/1,200\+ patients/i)).toBeInTheDocument()
  })

  it('should render 5 star icons', () => {
    render(<Hero />)
    const stars = screen.getAllByTestId('star-icon')
    expect(stars).toHaveLength(5)
  })

  it('should render 5 user avatars', () => {
    render(<Hero />)
    const avatars = screen.getAllByRole('img', { name: /User \d+/ })
    expect(avatars).toHaveLength(5)
  })

  it('should render hero image with correct alt text', () => {
    render(<Hero />)
    const heroImage = screen.getByAltText('DentWise AI')
    expect(heroImage).toBeInTheDocument()
    expect(heroImage).toHaveAttribute('src', '/hero.png')
  })

  it('should render Mic icon in CTA button', () => {
    render(<Hero />)
    expect(screen.getAllByTestId('mic-icon')[0]).toBeInTheDocument()
  })

  it('should render Calendar icon in CTA button', () => {
    render(<Hero />)
    expect(screen.getAllByTestId('calendar-icon')[0]).toBeInTheDocument()
  })

  it('should have proper section structure', () => {
    const { container } = render(<Hero />)
    const section = container.querySelector('section')
    expect(section).toBeInTheDocument()
    expect(section).toHaveClass('relative', 'min-h-screen')
  })

  it('should render sign up buttons with modal mode', () => {
    render(<Hero />)
    const signUpButtons = screen.getAllByTestId('sign-up-button')
    expect(signUpButtons.length).toBeGreaterThanOrEqual(2)
    signUpButtons.forEach(button => {
      expect(button).toHaveAttribute('data-mode', 'modal')
    })
  })

  it('should use Unsplash images for avatars', () => {
    render(<Hero />)
    const avatars = screen.getAllByRole('img', { name: /User \d+/ })
    avatars.forEach(avatar => {
      expect(avatar.getAttribute('src')).toContain('images.unsplash.com')
    })
  })

  it('should have gradient background decorations', () => {
    const { container } = render(<Hero />)
    const gradients = container.querySelectorAll('[class*="gradient"]')
    expect(gradients.length).toBeGreaterThan(0)
  })
})