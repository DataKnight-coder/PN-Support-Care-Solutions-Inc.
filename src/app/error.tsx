'use client'; // Error components must be Client Components

import { useEffect } from 'react';
import { Button } from '@/components/ui/Button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Unhandled error:', error);
  }, [error]);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--spacing-32) var(--container-padding-mobile)',
      textAlign: 'center',
      backgroundColor: 'var(--color-warm-ivory)',
      minHeight: '60vh'
    }}>
      <h2 style={{ fontSize: '2rem', color: 'var(--color-deep-navy)', marginBottom: 'var(--spacing-4)' }}>Something went wrong!</h2>
      <p style={{ color: 'var(--color-charcoal)', fontSize: '1.125rem', marginBottom: 'var(--spacing-8)', maxWidth: '500px' }}>
        We apologize for the inconvenience. Our team has been notified of the issue.
      </p>
      <div style={{ display: 'flex', gap: 'var(--spacing-4)' }}>
        <Button 
          variant="primary" 
          size="lg"
          onClick={() => reset()}
        >
          Try again
        </Button>
        <Button 
          variant="outline" 
          size="lg"
          onClick={() => window.location.href = '/'}
        >
          Return Home
        </Button>
      </div>
    </div>
  );
}
