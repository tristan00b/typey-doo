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
} from './tuple'

/* ------------------------------------------------------------------------------------------------------------------ *\
   Comparisons
\* ------------------------------------------------------------------------------------------------------------------ */

/** Evaluates the falsiness of a given type */
export declare type Falsy<T> =
  // In JS: false, 0, -0, 0n, "", null, undefined, and NaN. Everything else is truthy.
  // In TS:
  // - The -0 literal type is equivalent to the 0 literal type.
  // - The values NaN, Infinity, -Infinity don't have literal types that can easily
  //   be tested for. They are all of type number.
  // - More specifically:
  //   type  _0 = -0                 // 0
  //   type  _1 = typeof NaN         // number
  //   type  _2 = typeof Infinity    // number
  //   type  _3 = typeof (-0)        // parse error ts(1003): Identifier expected
  //   type  _4 = typeof (-Infinity) // parse error ts(1003): Identifier expected
  T extends (false|0|0n|''|null|undefined) ? true : false

/** Evaluates the truthiness of a given type */
export declare type Truthy<T> = NOT<Falsy<T>>

/** Determines whether its two types are of the same type */
export declare type Equal<U, V> =
  [U] extends [V] ? [V] extends [U] ? true : false : false

/** Determines whether an array of types are all of the same type */
export declare type AllEqual<T extends unknown[]> =
  T extends [] ? boolean
: T extends [infer _] ? true
: T extends [infer U, infer V] ? Equal<U, V>
: T extends [infer U, ...infer V] ? AND<Equal<U, Head<V>>, AllEqual<V>>
: never

/** Evaluates to `A` with `Cond` is truthy, and `B` when `Cond` is falsy */
export declare type If<Cond extends boolean, A, B> =
  Cond extends true  ? A
: Cond extends false ? B
: A|B
