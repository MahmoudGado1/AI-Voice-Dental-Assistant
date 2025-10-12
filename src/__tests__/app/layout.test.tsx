import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import RootLayout, { metadata } from '../../app/layout'

describe('RootLayout', () => {
  it('should render children correctly', () => {
    render(
      <RootLayout>
        <div data-testid="test-child">Test Content</div>
      </RootLayout>
    )
    
    expect(screen.getByTestId('test-child')).toBeInTheDocument()
    expect(screen.getByText('Test Content')).toBeInTheDocument()
  })

  it('should wrap children in ClerkProvider', () => {
    render(
      <RootLayout>
        <div>Test</div>
      </RootLayout>
    )
    
    expect(screen.getByTestId('clerk-provider')).toBeInTheDocument()
  })

  it('should have correct HTML structure', () => {
    const { container } = render(
      <RootLayout>
        <div>Test</div>
      </RootLayout>
    )
    
    const html = container.querySelector('html')
    expect(html).toHaveAttribute('lang', 'en')
  })

  it('should apply dark class to body', () => {
    const { container } = render(
      <RootLayout>
        <div>Test</div>
      </RootLayout>
    )
    
    const body = container.querySelector('body')
    expect(body).toHaveClass('dark')
  })

  it('should apply font variables to body', () => {
    const { container } = render(
      <RootLayout>
        <div>Test</div>
      </RootLayout>
    )
    
    const body = container.querySelector('body')
    expect(body?.className).toContain('antialiased')
  })
})

describe('Metadata', () => {
  it('should have correct title', () => {
    expect(metadata.title).toBe('Dentwise - AI Powered Voice Assistant')
  })

  it('should have correct description', () => {
    expect(metadata.description).toBe(
      'Get instant dental advice through voice calls with our AI assistant. Available 24/7.'
    )
  })

  it('should have all required metadata fields', () => {
    expect(metadata).toHaveProperty('title')
    expect(metadata).toHaveProperty('description')
  })
})