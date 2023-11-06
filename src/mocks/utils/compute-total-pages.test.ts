import { computeTotalPages } from '@/mocks/utils/compute-total-pages';

describe(computeTotalPages.name, () => {
  it('should return 2', () => {
    const pages = computeTotalPages(10, 5);
    expect(pages).toBe(2);
  });
  it('should return 0 for not a number', () => {
    const pages = computeTotalPages(Number(''), 5);
    expect(pages).toBe(0);
  });
  it('should return 0 for not a nan', () => {
    const pages = computeTotalPages(NaN, 5);
    expect(pages).toBe(0);
  });
});
