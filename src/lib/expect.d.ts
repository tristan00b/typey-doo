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

/** Evaluates to `Actual` when `Expected` has type `true`, otherwise `never` */
export declare type Expect<Expected, Actual> =
  Equal<Expected, Actual> extends true ? Actual : never

/** Evaluates to `Actual` when `Actual` has type `true`, otherwise `never` */
export declare type ExpectTrue<Actual> = Expect<true, Actual>

/** Evaluates to `Actual` when `Actual` has type `false`, otherwise `never` */
export declare type ExpectFalse<Actual> = Expect<false, Actual>

/** Evaluates to `true` when `A` and `B` are of the same type, otherwise `never` */
export declare type ExpectEqual<A, B> = ExpectTrue<Equal<A, B>>
