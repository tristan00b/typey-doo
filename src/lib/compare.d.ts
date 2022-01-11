/* ------------------------------------------------------------------------------------------------------------------ *\

   File: compare.d.ts
   Author: Tristan Bayfield
   License: MIT

\* ------------------------------------------------------------------------------------------------------------------ */

import type {
  AND,
  NOT,
} from './boolean'

import type {
  Head,
  Tail,
} from './tuple'

/* ------------------------------------------------------------------------------------------------------------------ *\
   Comparisons
\* ------------------------------------------------------------------------------------------------------------------ */

export declare type Falsy<T> =
  // In JS: false, 0, -0, 0n, "", null, undefined, and NaN. Everything else is truthy.
  // In TS:
  // - The -0 literal export declare type is equivalent to the 0 literal type.
  // - The values NaN, Infinity, -Infinity don't have literal types that can easily
  //   be tested for. They are all of export declare type number.
  // - More specifically:
  //   export declare type  _0 = -0                 // 0
  //   export declare type  _1 = typeof NaN         // number
  //   export declare type  _2 = typeof Infinity    // number
  //   export declare type  _3 = typeof (-0)        // parse error ts(1003): Identifier expected
  //   export declare type  _4 = typeof (-Infinity) // parse error ts(1003): Identifier expected
  T extends (false|0|0n|''|null|undefined) ? true : false

export declare type Truthy<T> = NOT<Falsy<T>> extends true ? true : false

export declare type Equal<U, V> =
  U extends V ? V extends U ? true : false : false

export declare type AllEqual<T extends unknown[], H = Head<T>> =
  T extends [] ? boolean : AND<Equal<H, Head<T>>, AllEqual<Tail<T>, H>>

export declare type If<Cond extends boolean, A, B> =
  Cond extends true  ? A
: Cond extends false ? B
: A|B

/* ------------------------------------------------------------------------------------------------------------------ *\
   Expectations
\* ------------------------------------------------------------------------------------------------------------------ */

export declare type Expect<Cond extends boolean, Expected extends boolean> = Equal<Cond, Expected> extends true ? true : never
export declare type ExpectTrue <Cond extends boolean> = Expect<Cond, true>
export declare type ExpectFalse<Cond extends boolean> = Expect<Cond, false>
export declare type ExpectEqual<A, B> = ExpectTrue<Equal<A, B>>
