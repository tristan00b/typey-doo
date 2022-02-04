/* ------------------------------------------------------------------------------------------------------------------ *\

   File: nominal.ts
   Author: Tristan Bayfield
   License: MIT

\* ------------------------------------------------------------------------------------------------------------------ */

// Special thanks to Dmitriy Kubyshkin, whose writing really helped me get this stuff working!
// https://kubyshkin.name/posts/newtype-in-typescript/

/** Creates a tagged type similar to using Haskell's `newtype` */
export type TaggedType<T extends string, U> = { __tag: T, value: U }

/** Gets the underlying value type from a tagged type */
export type ValueType<T extends { __tag: unknown, value: unknown }> = T['value']

/**
 * Casts a base type to a tagged type.
 *
 * @example
 * type CAD = TaggedType<'CAD', number>
 * type AUS = TaggedType<'AUS', number>
 *
 * const amt0 = to<CAD>(42)
 * const amt1 = to<AUS>(58)
 *
 * const sum0 = amt0 + amt1        // Error!
 * const sum1 = amt0 + to<CAD>(58) // Ok!
 * const isLt = amt0 < to<CAD>(58) // Ok!
 */
export function to<T extends { __tag: unknown, value: unknown } =
                             { __tag: unknown, value: never   }>(value: ValueType<T>): T
{
  return value as T
}

/**
 * Casts a tagged type back to its base type.
 *
 * @example
 * const amt0 = to<CAD>(42)
 * const amt1 = to<AUS>(58)
 *
 * const sum = fr(amt0) + fr(amt1) // Ok!
 */
export function fr<T extends { __tag: unknown, value: unknown }>(value: T): ValueType<T>
{
  return value as ValueType<T>
}
