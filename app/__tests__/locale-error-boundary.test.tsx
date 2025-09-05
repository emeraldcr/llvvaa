/**
 * Comprehensive Error Boundary Testing
 * Tests error boundary recovery mechanisms and fallback behavior
 */

import React from 'react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, cleanup, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { LocaleErrorBoundary } from '../components/locale-error-boundary';

// Mock console methods to avoid noise in tests
const originalConsoleError = console.error;
const originalConsoleWarn = console.warn;

beforeEach(() => {
  console.error = vi.fn();
  console.warn = vi.fn();
  cleanup();
});

afterEach(() => {
  console.error = originalConsoleError;
  console.warn = originalConsoleWarn;
  cleanup();
});

// Test component that throws an error
const ThrowError = ({ shouldThrow = true }: { shouldThrow?: boolean }) => {
  if (shouldThrow) {
    throw new Error('Test locale error');
  }
  return <div data-testid="success-content">Content loaded successfully</div>;
};

describe('Locale Error Boundary', () => {
  describe('Error Catching and Display', () => {
    it('should catch and handle locale errors gracefully', () => {
      render(
        <LocaleErrorBoundary>
          <ThrowError />
        </LocaleErrorBoundary>
      );

      expect(screen.getByText('Oops! Something went wrong')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /try again/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /default language/i })).toBeInTheDocument();
    });

    it('should display error details in development mode', () => {
      const originalEnv = process.env.NODE_ENV;
      process.env.NODE_ENV = 'development';

      render(
        <LocaleErrorBoundary>
          <ThrowError />
        </LocaleErrorBoundary>
      );

      expect(screen.getByText('Error Details (Development Only)')).toBeInTheDocument();
      expect(screen.getByText(/Test locale error/)).toBeInTheDocument();

      process.env.NODE_ENV = originalEnv;
    });

    it('should hide error details in production mode', () => {
      const originalEnv = process.env.NODE_ENV;
      process.env.NODE_ENV = 'production';

      render(
        <LocaleErrorBoundary>
          <ThrowError />
        </LocaleErrorBoundary>
      );

      expect(screen.queryByText('Error Details (Development Only)')).not.toBeInTheDocument();

      process.env.NODE_ENV = originalEnv;
    });

    it('should log client-side errors correctly', () => {
      const consoleSpy = vi.spyOn(console, 'error').mockImplementation();

      render(
        <LocaleErrorBoundary>
          <ThrowError />
        </LocaleErrorBoundary>
      );

      expect(consoleSpy).toHaveBeenCalledWith(
        'Locale Error Boundary caught an error:',
        expect.any(Error),
        expect.any(Object)
      );

      consoleSpy.mockRestore();
    });
  });

  describe('Recovery Mechanisms', () => {
    it('should handle retry functionality', async () => {
      // Mock window.location.reload
      const mockReload = vi.fn();
      Object.defineProperty(window, 'location', {
        value: { reload: mockReload },
        writable: true
      });

      render(
        <LocaleErrorBoundary>
          <ThrowError />
        </LocaleErrorBoundary>
      );

      const retryButton = screen.getByRole('button', { name: /try again/i });
      fireEvent.click(retryButton);

      expect(mockReload).toHaveBeenCalled();
    });

    it('should provide fallback locale navigation from English', () => {
      const mockLocation = {
        pathname: '/en/invalid-page',
        href: ''
      };
      Object.defineProperty(window, 'location', {
        value: mockLocation,
        writable: true
      });

      render(
        <LocaleErrorBoundary>
          <ThrowError />
        </LocaleErrorBoundary>
      );

      const fallbackButton = screen.getByRole('button', { name: /default language/i });
      fireEvent.click(fallbackButton);

      expect(window.location.href).toBe('/es/invalid-page');
    });

    it('should provide fallback locale navigation from root path', () => {
      const mockLocation = {
        pathname: '/some-page',
        href: ''
      };
      Object.defineProperty(window, 'location', {
        value: mockLocation,
        writable: true
      });

      render(
        <LocaleErrorBoundary>
          <ThrowError />
        </LocaleErrorBoundary>
      );

      const fallbackButton = screen.getByRole('button', { name: /default language/i });
      fireEvent.click(fallbackButton);

      expect(window.location.href).toBe('/es/some-page');
    });

    it('should handle path with existing Spanish locale correctly', () => {
      const mockLocation = {
        pathname: '/es/tours/adventure',
        href: ''
      };
      Object.defineProperty(window, 'location', {
        value: mockLocation,
        writable: true
      });

      render(
        <LocaleErrorBoundary>
          <ThrowError />
        </LocaleErrorBoundary>
      );

      const fallbackButton = screen.getByRole('button', { name: /default language/i });
      fireEvent.click(fallbackButton);

      // Should maintain Spanish locale
      expect(window.location.href).toBe('/es/tours/adventure');
    });
  });

  describe('Custom Fallback UI', () => {
    it('should render custom fallback when provided', () => {
      const customFallback = (
        <div data-testid="custom-fallback">
          Custom error message
        </div>
      );

      render(
        <LocaleErrorBoundary fallback={customFallback}>
          <ThrowError />
        </LocaleErrorBoundary>
      );

      expect(screen.getByTestId('custom-fallback')).toBeInTheDocument();
      expect(screen.getByText('Custom error message')).toBeInTheDocument();
      expect(screen.queryByText('Oops! Something went wrong')).not.toBeInTheDocument();
    });

    it('should render children when no error occurs', () => {
      render(
        <LocaleErrorBoundary>
          <ThrowError shouldThrow={false} />
        </LocaleErrorBoundary>
      );

      expect(screen.getByTestId('success-content')).toBeInTheDocument();
      expect(screen.getByText('Content loaded successfully')).toBeInTheDocument();
      expect(screen.queryByText('Oops! Something went wrong')).not.toBeInTheDocument();
    });
  });

  describe('Error State Management', () => {
    it('should reset error state on retry', async () => {
      const mockReload = vi.fn();
      Object.defineProperty(window, 'location', {
        value: { reload: mockReload },
        writable: true
      });

      const { rerender } = render(
        <LocaleErrorBoundary>
          <ThrowError />
        </LocaleErrorBoundary>
      );

      // Verify error state
      expect(screen.getByText('Oops! Something went wrong')).toBeInTheDocument();

      // Click retry button
      const retryButton = screen.getByRole('button', { name: /try again/i });
      fireEvent.click(retryButton);

      // Verify reload was called
      expect(mockReload).toHaveBeenCalled();
    });

    it('should handle multiple errors correctly', () => {
      const { rerender } = render(
        <LocaleErrorBoundary>
          <ThrowError />
        </LocaleErrorBoundary>
      );

      // First error
      expect(screen.getByText('Oops! Something went wrong')).toBeInTheDocument();

      // Rerender with different error
      rerender(
        <LocaleErrorBoundary>
          <ThrowError />
        </LocaleErrorBoundary>
      );

      // Should still show error UI
      expect(screen.getByText('Oops! Something went wrong')).toBeInTheDocument();
    });
  });

  describe('Higher-Order Component', () => {
    it('should work with withLocaleErrorBoundary HOC', () => {
      // Mock the HOC import since it's not imported in this test
      const { withLocaleErrorBoundary } = require('../components/locale-error-boundary');
      
      const TestComponent = () => <div data-testid="hoc-content">HOC Content</div>;
      const WrappedComponent = withLocaleErrorBoundary(TestComponent);

      render(<WrappedComponent />);

      expect(screen.getByTestId('hoc-content')).toBeInTheDocument();
    });

    it('should handle errors in HOC wrapped components', () => {
      const { withLocaleErrorBoundary } = require('../components/locale-error-boundary');
      
      const WrappedThrowError = withLocaleErrorBoundary(ThrowError);

      render(<WrappedThrowError />);

      expect(screen.getByText('Oops! Something went wrong')).toBeInTheDocument();
    });

    it('should use custom fallback in HOC', () => {
      const { withLocaleErrorBoundary } = require('../components/locale-error-boundary');
      
      const customFallback = <div data-testid="hoc-fallback">HOC Fallback</div>;
      const WrappedThrowError = withLocaleErrorBoundary(ThrowError, customFallback);

      render(<WrappedThrowError />);

      expect(screen.getByTestId('hoc-fallback')).toBeInTheDocument();
    });
  });

  describe('Browser Environment Handling', () => {
    it('should handle server-side rendering gracefully', () => {
      // Mock server environment
      const originalWindow = global.window;
      delete (global as any).window;

      render(
        <LocaleErrorBoundary>
          <ThrowError />
        </LocaleErrorBoundary>
      );

      expect(screen.getByText('Oops! Something went wrong')).toBeInTheDocument();

      // Restore window
      global.window = originalWindow;
    });

    it('should only execute client-side code in browser', () => {
      const mockLocation = {
        pathname: '/test',
        href: ''
      };
      Object.defineProperty(window, 'location', {
        value: mockLocation,
        writable: true
      });

      render(
        <LocaleErrorBoundary>
          <ThrowError />
        </LocaleErrorBoundary>
      );

      const fallbackButton = screen.getByRole('button', { name: /default language/i });
      
      // Should only execute when window is available
      expect(() => fireEvent.click(fallbackButton)).not.toThrow();
    });
  });
});