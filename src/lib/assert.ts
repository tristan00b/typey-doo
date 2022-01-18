/* ------------------------------------------------------------------------------------------------------------------ *\

   File: assert.ts
   Author: Tristan Bayfield
   License: MIT

\* ------------------------------------------------------------------------------------------------------------------ */

import { fail } from './error'

export function assert<T>(cond: T, message?: string): asserts cond
{
  cond || fail('message')
}
