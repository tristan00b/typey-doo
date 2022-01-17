/* ------------------------------------------------------------------------------------------------------------------ *\

   File: expect.d.ts
   Author: Tristan Bayfield
   License: MIT

\* ------------------------------------------------------------------------------------------------------------------ */

import type {
  Equal
} from './compare'

/* ------------------------------------------------------------------------------------------------------------------ *\
   Expectations
\* ------------------------------------------------------------------------------------------------------------------ */

export declare type Expect<Expected, Actual> =
  Equal<Expected, Actual> extends true ? Actual : never

export declare type ExpectTrue<Actual> = Expect<true, Actual>

export declare type ExpectFalse<Actual> = Expect<false, Actual>

export declare type ExpectEqual<A, B> = ExpectTrue<Equal<A, B>>
