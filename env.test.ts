import { describe } from 'vitest';

import { env } from './env';

describe('env', () => {
  it('should have NEXT_PUBLIC_API_URL', () => {
    expect(env.NEXT_PUBLIC_API_URL).toBe('http://localhost:3000/');
  });
});
