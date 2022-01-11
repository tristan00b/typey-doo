/* ------------------------------------------------------------------------------------------------------------------ *\

   File: object.d.ts
   Author: Tristan Bayfield
   License: MIT

\* ------------------------------------------------------------------------------------------------------------------ */

/* ------------------------------------------------------------------------------------------------------------------ *\
   Objects
\* ------------------------------------------------------------------------------------------------------------------ */

/**
 * Converts an array into an object
 * @example
 * ```AsObject<[1, 2, 3]> == { 0:1, 1:2, 2:3 }```
 */
export declare type AsObject<T extends unknown[]> =
  { [ key in keyof T as Exclude<key, keyof object[]> ]: T[key] }

/** Returns a union of the keys of T */
export declare type KeysOf  <T extends object> = { [ key in keyof T ]:   key  }[ keyof T ]

/** Returns a union of the scalars of T */
export declare type ValuesOf<T extends object> = { [ key in keyof T ]: T[key] }[ keyof T ]

export declare type AllKeys<T extends unknown[]> =
  T extends [] ? never :
  T extends [infer U, ...infer V] ? keyof U | AllKeys<V> : never

export declare type Merge<T extends unknown[]> =
  T extends [] ? {} :
  T extends [infer U, ...infer V] ? U & Merge<V> : {}
