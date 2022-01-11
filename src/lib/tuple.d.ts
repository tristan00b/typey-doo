/* ------------------------------------------------------------------------------------------------------------------ *\

   File: tuple.d.ts
   Author: Tristan Bayfield
   License: MIT

\* ------------------------------------------------------------------------------------------------------------------ */

import type {
  Equal,
  If
} from './compare'

import type {
  IsNegative,
  IsReal
} from './number'

/* ------------------------------------------------------------------------------------------------------------------ *\
   Tuples
\* ------------------------------------------------------------------------------------------------------------------ */

export declare type Head<T extends unknown[]> = T extends [ infer U, ...infer _ ] ? U : []
export declare type Last<T extends unknown[]> = T extends [ ...infer _, infer U ] ? U : []
export declare type Rest<T extends unknown[]> = T extends [ infer _, ...infer U ] ? U : []
export declare type Drop<T extends unknown[]> = T extends [ ...infer U, infer _ ] ? U : []

/** @todo */
// export declare type Append<T extends unknown[], K extends unknown> = ?

/** @todo */
// export declare type Prepend<T extends unknown[], K extends unkonwn> = ?

/** @todo */
// export declare type Insert<T extends unknown[], Index extends number, k extends unkonwn> = ?

// aliases
export declare type OmitFirst<T extends unknown[]> = Rest<T>
export declare type Tail<T extends unknown[]>      = Rest<T>
export declare type OmitLast<T extends unknown[]>  = Drop<T>

export declare type FindIndex<Val, T extends unknown[], U extends unknown[]=[]> =
  U['length'] extends [0, ...T]['length'] ? never
  : Val extends T[ U['length'] ]
      ? U['length']
      : FindIndex<Val, T, [0, ...U]>

export declare type Filter<T extends unknown[], U> =
  T extends [                          ] ? [                      ]
: T extends [            U, ...infer V ] ? [      ...Filter<V, U> ]
: T extends [ infer fst, U, ...infer V ] ? [ fst, ...Filter<V, U> ]
: [ T[0], ...Filter<Rest<T>, U> ]

export declare type Replace<T extends unknown[], U, V> =
  T extends [ infer W, ...infer Rest ] ? [ If<Equal<W, U>, V, W>, ...Replace<Rest, U, V> ] : []

export declare type Concat<A extends unknown[], B extends unknown []> = [ ...A, ...B ]


type _Repeat<
  T,
  N extends number,
  U extends unknown[]=[],
  I = U['length']
> =
  I extends N
  ? []
  : [ T, ..._Repeat<T, N, [0, ...U]> ]

type Repeat<T, N extends number> =
  IsReal<N>     extends true ? never :
  IsNegative<N> extends true ? never :
  _Repeat<T, N>
