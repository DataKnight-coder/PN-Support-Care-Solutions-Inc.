import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
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
      <h1 style={{ fontSize: '4rem', color: 'var(--color-care-teal)', marginBottom: 'var(--spacing-4)' }}>404</h1>
      <h2 style={{ fontSize: '2rem', color: 'var(--color-deep-navy)', marginBottom: 'var(--spacing-4)' }}>Page Not Found</h2>
      <p style={{ color: 'var(--color-charcoal)', fontSize: '1.125rem', marginBottom: 'var(--spacing-8)', maxWidth: '500px' }}>
        We couldn't find the page you were looking for. It may have been moved or doesn't exist.
      </p>
      <div style={{ display: 'flex', gap: 'var(--spacing-4)' }}>
        <Link href="/">
          <Button variant="primary" size="lg">Return to Homepage</Button>
        </Link>
        <Link href="/services">
          <Button variant="outline" size="lg">View Services</Button>
        </Link>
      </div>
    </div>
  );
}
