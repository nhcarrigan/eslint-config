/// <reference types="vitest" />

import type { Assertion, AsymmetricMatchersContaining } from 'vitest';

interface CustomMatchers<R = unknown> {
  toContainRules(expected: Record<string, unknown>): R;
}

declare module 'vitest' {
  interface Assertion<T = any> extends CustomMatchers<T> {}
  interface AsymmetricMatchersContaining extends CustomMatchers {}
}

declare module 'vitest' {
  // @ts-expect-error We need to extend the TestAPI interface
  export interface TestAPI {
    extend: <T>(matchers: Record<string, (this: T, ...args: any[]) => any>) => void;
  }
}