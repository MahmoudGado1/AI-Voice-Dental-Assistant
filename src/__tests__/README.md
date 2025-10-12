# Dentwise Landing Page Tests

This directory contains comprehensive unit tests for the Dentwise landing page components.

## Test Structure

- `config/` - Tests for Next.js configuration
- `app/` - Tests for app-level components (layout, pages)
- `components/landing/` - Tests for landing page components

## Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm run test:coverage

# Run tests with UI
npm run test:ui
```

## Test Coverage

The test suite covers:

1. **next.config.ts** - Configuration validation
2. **layout.tsx** - Root layout with ClerkProvider
3. **page.tsx** - Home page composition
4. **Header.tsx** - Navigation and authentication buttons
5. **Hero.tsx** - Hero section with CTAs and testimonials
6. **HowItWorks.tsx** - Three-step process explanation
7. **WhatToAsk.tsx** - Example questions and answers
8. **PricingSection.tsx** - Pricing tiers and features
9. **CTA.tsx** - Call-to-action section
10. **Footer.tsx** - Footer with links and legal info

## Test Principles

- Tests focus on user-facing behavior
- External dependencies (Clerk, Next.js Image) are mocked
- Each component is tested in isolation
- Tests verify rendering, content, interactions, and accessibility
- Coverage includes happy paths and edge cases

## Dependencies

- Vitest - Test runner
- React Testing Library - Component testing
- @testing-library/jest-dom - Custom matchers
- @testing-library/user-event - User interaction simulation

## Notes

- Tests use mocked versions of Next.js components (Image, Link)
- Clerk authentication components are mocked
- Icon components from lucide-react are mocked
- All tests run in jsdom environment