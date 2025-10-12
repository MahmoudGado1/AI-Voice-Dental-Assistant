import { describe, it, expect } from 'vitest'
import nextConfig from '../../../next.config'

describe('Next.js Configuration', () => {
  it('should have correct image domains configured', () => {
    expect(nextConfig.images).toBeDefined()
    expect(nextConfig.images?.domains).toEqual(['images.unsplash.com'])
  })

  it('should be a valid NextConfig object', () => {
    expect(nextConfig).toBeDefined()
    expect(typeof nextConfig).toBe('object')
  })

  it('should allow images from unsplash', () => {
    const domains = nextConfig.images?.domains || []
    expect(domains).toContain('images.unsplash.com')
  })
})