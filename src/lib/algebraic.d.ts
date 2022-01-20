/* ------------------------------------------------------------------------------------------------------------------ *\

   File: algebraic.d.ts
   Author: Tristan Bayfield
   License: MIT

\* ------------------------------------------------------------------------------------------------------------------ */

/** Gets the keys of a union of records */
export declare type KeysOfUnion<U extends object> =
  // credit: https://stackoverflow.com/a/49279355
  U extends Record<infer Key, unknown>  ? Key : never

/** Converts a union of records to an intersection of records */
export declare type UnionToIntersection<U extends object> = {
  // credit: https://stackoverflow.com/a/49279355
  [Key in KeysOfUnion<U>]: U extends Record<Key, infer Val> ? Val : never
}

/** Merges an intersection of records */
export declare type MergeIntersection<I extends object> =
  [I] extends [object] ? { [K in keyof I]: I[K] } : never
