import { Button } from '@mantine/core';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      Home page
      <div>
        <Button component={Link} href="/pizza">
          pizza
        </Button>
      </div>
    </div>
  );
}
