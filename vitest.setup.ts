import '@testing-library/jest-dom'
import { cleanup } from '@testing-library/react'
import { afterEach, vi } from 'vitest'

// Cleanup after each test
afterEach(() => {
  cleanup()
})

// Mock Next.js Image component
vi.mock('next/image', () => ({
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} alt={props.alt} />
  },
}))

// Mock Next.js Link component
vi.mock('next/link', () => ({
  default: ({ children, href, ...props }: any) => {
    return <a href={href} {...props}>{children}</a>
  },
}))

// Mock Clerk components
vi.mock('@clerk/nextjs', () => ({
  ClerkProvider: ({ children }: any) => <div data-testid="clerk-provider">{children}</div>,
  SignInButton: ({ children, mode }: any) => (
    <button data-testid="sign-in-button" data-mode={mode}>{children}</button>
  ),
  SignUpButton: ({ children, mode }: any) => (
    <button data-testid="sign-up-button" data-mode={mode}>{children}</button>
  ),
}))

// Mock Lucide React icons
vi.mock('lucide-react', () => ({
  Mic: () => <svg data-testid="mic-icon" />,
  Calendar: () => <svg data-testid="calendar-icon" />,
  StarIcon: () => <svg data-testid="star-icon" />,
  Zap: () => <svg data-testid="zap-icon" />,
  ArrowRightIcon: () => <svg data-testid="arrow-right-icon" />,
  MessageCircle: () => <svg data-testid="message-circle-icon" />,
  MessageSquareIcon: () => <svg data-testid="message-square-icon" />,
  CheckCircleIcon: () => <svg data-testid="check-circle-icon" />,
  MicIcon: () => <svg data-testid="mic-icon" />,
  CalendarIcon: () => <svg data-testid="calendar-icon" />,
}))