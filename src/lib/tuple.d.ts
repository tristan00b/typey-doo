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

/** Concatenates two tuples of types `A` and `B` */
export declare type Concat<A extends unknown[], B extends unknown []> = [ ...A, ...B ]

/** Drops the last element of a tuple of types `T` */
export declare type Drop<T extends unknown[]> = T extends [ ...infer U, infer _ ] ? U : []

/** Evaluates to the first element of a tuple of types `T` */
export declare type Head<T extends unknown[]> = T extends [ infer U, ...infer _ ] ? U : undefined

/** Evaluates to the last element of a tuple of types `T` */
export declare type Last<T extends unknown[]> = T extends [ ...infer _, infer U ] ? U : undefined

/** Drops the first element of a tuple of types `T` */
export declare type Tail<T extends unknown[]> = T extends [ infer _, ...infer U ] ? U : []

/** @todo */
// export declare type Append<T extends unknown[], K extends unknown> =

/** @todo */
// export declare type Prepend<T extends unknown[], K extends unkonwn> =

/** @todo */
// export declare type Insert<T extends unknown[], Index extends number, k extends unkonwn> =

/** Aliases `Tail` */
export declare type OmitFirst<T extends unknown[]> = Tail<T>

/** Aliases `Tail` */
export declare type Rest<T extends unknown[]>      = Tail<T>

/** Aliases `Drop` */
export declare type OmitLast<T extends unknown[]>  = Drop<T>

declare type _FindIndex<V, T extends unknown[], U extends unknown[]=[]> =
  U['length'] extends [0, ...T]['length'] ? never
  : V extends T[ U['length'] ]
      ? U['length']
      : _FindIndex<V, T, [0, ...U]>

/** Finds the index of type `V` in a tuple of types `T` */
export declare type FindIndex<V, T extends unknown[]> = _FindIndex<V, T>

export declare type Filter<V, T extends unknown[]> =
  T extends [                          ] ? [                      ]
: T extends [            V, ...infer U ] ? [      ...Filter<V, U> ]
: T extends [ infer fst, V, ...infer U ] ? [ fst, ...Filter<V, U> ]
: [ T[0], ...Filter<V, Tail<T>> ]

/** Finds and replaces a type `U` with a type `V` in a tuple types `T` */
export declare type Replace<T extends unknown[], U, V> =
  T extends [ infer W, ...infer Rest ] ? [ If<Equal<W, U>, V, W>, ...Replace<Rest, U, V> ] : []

type _Repeat<
  V,
  N extends number,
  U extends unknown[]=[],
  I = U['length']
> =
  I extends N
  ? []
  : [ V, ..._Repeat<V, N, [0, ...U]> ]

/** Creates a tuple of type `T` repeated `N` times */
export type Repeat<T, N extends number> =
  IsReal<N>     extends true ? never :
  IsNegative<N> extends true ? never :
  _Repeat<T, N>
