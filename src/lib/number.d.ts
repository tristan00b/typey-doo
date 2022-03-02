/* ------------------------------------------------------------------------------------------------------------------ *\

   File: number.d.ts
   Author: Tristan Bayfield
   License: MIT

\* ------------------------------------------------------------------------------------------------------------------ */

/* ------------------------------------------------------------------------------------------------------------------ *\
   Numbers
\* ------------------------------------------------------------------------------------------------------------------ */

export type _0 = 0
export type _1 = 1
export type _2 = 2
export type _3 = 3
export type _4 = 4
export type _5 = 5
export type _6 = 6
export type _7 = 7
export type _8 = 8
export type _9 = 9
export type _A = 10
export type _B = 11
export type _C = 12
export type _D = 13
export type _E = 14
export type _F = 15

export type Neg = '-'

export type BinDigit = _0 | _1
export type DecDigit = _0 | _1 | _2 | _3 | _4 | _5 | _6 | _7 | _8 | _9
export type HexDigit = _0 | _1 | _2 | _3 | _4 | _5 | _6 | _7 | _8 | _9 | _A | _B | _C | _D | _E | _F

/* ------------------------------------------------------------------------------------------------------------------ *\
   Checks
\* ------------------------------------------------------------------------------------------------------------------ */

/** Reports whether a number `N` is negative */
export type IsNegative<N extends number> =
  `${ N }` extends `-${ infer _Num }` ? true : false

/** Reports whether a number `N` is real */
export type IsReal<N extends number> =
  `${ N }` extends `${ infer _Integer }.${ infer _Decimal }` ? true : false
