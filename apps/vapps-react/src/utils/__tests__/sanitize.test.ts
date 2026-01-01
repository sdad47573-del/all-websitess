import { describe, it, expect } from 'vitest';
import { sanitizeDeep } from '../sanitize';

describe('sanitizeDeep', () => {
  it('trims strings', () => {
    expect(sanitizeDeep('  hello  ')).toBe('hello');
  });

  it('sanitizes arrays recursively', () => {
    const input = ['  a ', ' b  ', ['  c  ']];
    expect(sanitizeDeep(input)).toEqual(['a', 'b', ['c']]);
  });

  it('sanitizes nested objects', () => {
    const input = { a: '  x ', b: { c: ' y  ', d: ['  z  '] } };
    expect(sanitizeDeep(input)).toEqual({ a: 'x', b: { c: 'y', d: ['z'] } });
  });

  it('passes through non-string primitives', () => {
    expect(sanitizeDeep(123)).toBe(123);
    expect(sanitizeDeep(true)).toBe(true);
    expect(sanitizeDeep(null)).toBe(null);
    expect(sanitizeDeep(undefined)).toBe(undefined);
  });
});
