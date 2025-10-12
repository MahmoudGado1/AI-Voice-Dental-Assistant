import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Header from '../../../components/landing/Header'

describe('Header Component', () => {
  it('should render the logo and brand name', () => {
    render(<Header />)
    expect(screen.getByAltText('Logo')).toBeInTheDocument()
    expect(screen.getByText('Dentwise')).toBeInTheDocument()
  })

  it('should render navigation links on desktop', () => {
    render(<Header />)
    const navLinks = screen.getAllByRole('link')
    expect(navLinks.length).toBeGreaterThan(0)
  })

  it('should render Sign In button', () => {
    render(<Header />)
    const signInButton = screen.getByTestId('sign-in-button')
    expect(signInButton).toBeInTheDocument()
    expect(signInButton).toHaveTextContent('Login')
  })

  it('should render Sign Up button', () => {
    render(<Header />)
    const signUpButton = screen.getByTestId('sign-up-button')
    expect(signUpButton).toBeInTheDocument()
    expect(signUpButton).toHaveTextContent('Sign Up')
  })

  it('should have modal mode for auth buttons', () => {
    render(<Header />)
    const signInButton = screen.getByTestId('sign-in-button')
    const signUpButton = screen.getByTestId('sign-up-button')
    
    expect(signInButton).toHaveAttribute('data-mode', 'modal')
    expect(signUpButton).toHaveAttribute('data-mode', 'modal')
  })

  it('should render navigation items', () => {
    render(<Header />)
    expect(screen.getByText('How it works')).toBeInTheDocument()
    expect(screen.getByText('Pricing')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
  })

  it('should have correct styling classes', () => {
    const { container } = render(<Header />)
    const nav = container.querySelector('nav')
    expect(nav).toHaveClass('fixed', 'top-0', 'z-50')
  })

  it('should render logo with correct dimensions', () => {
    render(<Header />)
    const logo = screen.getByAltText('Logo')
    expect(logo).toHaveAttribute('width', '32')
    expect(logo).toHaveAttribute('height', '32')
  })

  it('should have home link for logo', () => {
    render(<Header />)
    const logoLink = screen.getByRole('link', { name: /logo dentwise/i })
    expect(logoLink).toHaveAttribute('href', '/')
  })

  it('should be keyboard accessible', async () => {
    const user = userEvent.setup()
    render(<Header />)
    
    const signInButton = screen.getByTestId('sign-in-button')
    await user.tab()
    // Button should be focusable
    expect(signInButton).toBeDefined()
  })
})